# YUKTATA - Quick Start Guide (5 Minutes)

## Step 1: Get API Key (2 minutes)

1. Go to https://console.anthropic.com/
2. Sign up or log in
3. Create new API key
4. Copy the key

## Step 2: Install & Configure (2 minutes)

```bash
# Open terminal/command prompt in the yuktata folder

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Open .env in your text editor and paste:
ANTHROPIC_API_KEY=your_key_here
PORT=5000
```

## Step 3: Start Server (1 minute)

```bash
npm start
```

Wait for:
```
========================================
Yuktata Server Running
Port: 5000
Open: http://localhost:5000
========================================
```

## Step 4: Use Yuktata

1. Open browser: http://localhost:5000
2. Ask a legal question about Indian law
3. Get structured answers with sources

## Example Questions to Try

- "Does Article 21 protect the right to life?"
- "What are Fundamental Rights in India?"
- "Can police arrest without a warrant?"
- "What are the powers of the President of India?"

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Cannot find module" | Run `npm install` |
| "API key not found" | Create `.env` file with your key |
| "Port 5000 in use" | Edit .env: `PORT=3000` |
| "Server not connecting" | Check if server is running with `npm start` |

## That's It! 🎉

Your Yuktata legal assistant is now running.

---

For detailed documentation, see README.md
