const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Validate API key on startup
if (!ANTHROPIC_API_KEY) {
    console.error('ERROR: ANTHROPIC_API_KEY environment variable is not set');
    console.error('Please set your API key in .env file: ANTHROPIC_API_KEY=your_key_here');
    process.exit(1);
}

console.log('Yuktata Backend Server Starting...');
console.log('API Key loaded successfully');

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Yuktata server is running' });
});

// Main chat endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;

        if (!message || message.trim() === '') {
            return res.status(400).json({ error: 'Message cannot be empty' });
        }

        // System prompt for Yuktata
        const systemPrompt = `You are Yuktata, an AI legal-information assistant focused exclusively on Indian law and the Constitution of India.

Answer ONLY questions that fall within the domain of Indian law, constitutional law, Indian statutes, judicial decisions, legal rights, legal procedures, and related Indian legal subjects.

For non-legal questions, respond with: "This question is outside Yuktata's legal-information domain. Please ask a question related to Indian law or the Constitution of India."

For legal questions, ALWAYS use this exact format with these three sections:

DIRECT ANSWER
[Give 1-2 lines stating if the claim is correct, incorrect, partially correct, or requires qualification]

BRIEF EXPLANATION
[Provide 4-5 lines explaining the answer. Include the relevant Constitutional Article, Act section, legal principle, Supreme Court judgment, or statutory provision]

SOURCES
[List the specific authoritative sources cited. Example: Constitution of India Article 21; Bharatiya Nyaya Sanhita 2023 Section 3]

CRITICAL RULES:
- Use ONLY plain text. NO markdown, NO asterisks, NO special formatting characters
- Be extremely concise and clear
- Never fabricate laws, sections, articles, or judgments
- Recognize BNS 2023, BNSS 2023, BSA 2023 as current criminal codes
- If the answer depends on specific facts or circumstances, state that
- Only cite authoritative sources: Constitution of India, India Code, Supreme Court, High Courts
- Keep the total response under 150 words
- Always include all three sections: DIRECT ANSWER, BRIEF EXPLANATION, and SOURCES`;

        // Call Anthropic API
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': ANTHROPIC_API_KEY,
                'anthropic-version': '2023-06-01',
            },
            body: JSON.stringify({
                model: 'claude-sonnet-4-6',
                max_tokens: 1000,
                system: systemPrompt,
                messages: [
                    {
                        role: 'user',
                        content: message,
                    },
                ],
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Anthropic API Error:', errorData);
            
            if (response.status === 401) {
                return res.status(401).json({ 
                    error: 'Authentication failed. Invalid API key.' 
                });
            } else if (response.status === 429) {
                return res.status(429).json({ 
                    error: 'Rate limit exceeded. Please try again later.' 
                });
            } else {
                return res.status(response.status).json({ 
                    error: errorData.error?.message || 'Failed to get response from Yuktata' 
                });
            }
        }

        const data = await response.json();
        const textContent = data.content.find(block => block.type === 'text');

        if (!textContent) {
            return res.status(500).json({ error: 'No text response received from Claude' });
        }

        res.json({ response: textContent.text });

    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ 
            error: 'Server error: ' + error.message 
        });
    }
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`========================================`);
    console.log(`Yuktata Server Running`);
    console.log(`Port: ${PORT}`);
    console.log(`Open: http://localhost:${PORT}`);
    console.log(`========================================`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received. Shutting down gracefully...');
    process.exit(0);
});
