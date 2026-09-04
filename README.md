# YUKTATA - AI Legal Assistant for Indian Law

Yuktata is a professional-grade legal information chatbot designed to answer questions exclusively about Indian law and the Constitution of India. It uses Anthropic's Claude API to provide accurate, concise legal answers.

## Features

✅ **Domain-Specific Responses** - Only answers questions related to Indian law  
✅ **Structured Answers** - Direct Answer, Brief Explanation, and Sources format  
✅ **Current Legal Framework** - Recognizes BNS 2023, BNSS 2023, BSA 2023  
✅ **Professional UI** - Navy/beige institutional design  
✅ **Secure Backend** - API key protected, server-side processing  
✅ **Responsive Design** - Works on desktop, tablet, and mobile  
✅ **Error Handling** - Graceful error messages and connection status

## System Requirements

- Node.js v14 or higher
- npm (comes with Node.js)
- Anthropic API key (free tier available)

## Installation & Setup

### 1. Get Your Anthropic API Key

1. Go to [Anthropic Console](https://console.anthropic.com/)
2. Sign up or log in
3. Navigate to the API keys section
4. Create a new API key
5. Copy the key (you'll need it in the next step)

### 2. Install Dependencies

```bash
npm install
```

This will install:
- `express` - Web server framework
- `cors` - Cross-Origin Resource Sharing support
- `dotenv` - Environment variable management
- `node-fetch` - HTTP client for API calls

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Then open `.env` and add your API key:

```
ANTHROPIC_API_KEY=your_actual_api_key_here
PORT=5000
```

**Important:** Never commit your `.env` file to version control!

### 4. Start the Server

```bash
npm start
```

You should see:
```
========================================
Yuktata Server Running
Port: 5000
Open: http://localhost:5000
========================================
```

### 5. Open in Browser

Open your browser and navigate to:
```
http://localhost:5000
```

## Project Structure

```
yuktata/
├── server.js              # Express backend server
├── package.json           # Dependencies and scripts
├── .env.example           # Environment variables template
├── README.md             # This file
└── public/
    └── index.html        # Frontend HTML/CSS/JS
```

## How It Works

### Architecture

```
Frontend (Browser)
    ↓
POST /api/chat
    ↓
Backend Server (Node.js)
    ↓
Anthropic Claude API
    ↓
Response → Backend → Frontend → Display
```

### Request Flow

1. **User Input**: User enters a legal question in the chat interface
2. **Frontend**: Browser sends POST request to `/api/chat` endpoint
3. **Backend**: Server processes request and validates API key
4. **Claude API**: Backend calls Anthropic's Claude Sonnet 4.6 model
5. **Processing**: Claude analyzes question and generates structured response
6. **Formatting**: Response is parsed and formatted with three sections
7. **Display**: Frontend renders response in a professional layout

### Response Format

Every legal question receives a response in this format:

```
DIRECT ANSWER
[1-2 lines: Yes/No/Partially Correct/Depends]

BRIEF EXPLANATION
[4-5 lines with relevant Articles/Sections/Principles]

SOURCES
[Authoritative references]
```

## API Endpoints

### Health Check
```bash
GET /api/health
```
Returns: `{ status: 'ok', message: 'Yuktata server is running' }`

### Chat Endpoint
```bash
POST /api/chat
Content-Type: application/json

{
  "message": "Does Article 21 protect the right to life?"
}
```

Response:
```json
{
  "response": "DIRECT ANSWER\nYes. Article 21 protects...\n\nBRIEF EXPLANATION\nArticle 21 states...\n\nSOURCES\nConstitution of India, Article 21"
}
```

## Configuration

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `ANTHROPIC_API_KEY` | Required | Your Anthropic API key |
| `PORT` | 5000 | Port to run the server on |

### Model Settings

In `server.js`, you can modify:

```javascript
{
  model: 'claude-sonnet-4-6',      // AI model to use
  max_tokens: 1000,                // Maximum response length
}
```

## Development

### Run in Development Mode

```bash
npm run dev
```

This uses `nodemon` to auto-restart the server on file changes (requires `npm install --save-dev nodemon`).

### Error Handling

The application handles common errors:

- **401 Unauthorized**: Invalid or missing API key
- **429 Too Many Requests**: Rate limit exceeded
- **500 Server Error**: Internal server error
- **Network Errors**: Connection issues with Anthropic API

## Deployment

### Deploy to Heroku

1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set environment variable:
   ```bash
   heroku config:set ANTHROPIC_API_KEY=your_key_here
   ```
5. Deploy: `git push heroku main`

### Deploy to Railway

1. Connect your GitHub repository to Railway
2. Set environment variables in Railway dashboard
3. Railway automatically detects Node.js and starts the server

### Deploy to Render

1. Push code to GitHub
2. Create new Web Service on Render
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables in dashboard

### Deploy to AWS EC2

1. Launch EC2 instance with Node.js
2. Clone repository: `git clone <repo-url>`
3. Install dependencies: `npm install`
4. Set environment variables: `export ANTHROPIC_API_KEY=...`
5. Start server: `npm start`
6. Use PM2 for process management:
   ```bash
   npm install -g pm2
   pm2 start server.js --name "yuktata"
   ```

## Troubleshooting

### "Cannot find module 'express'"

```bash
npm install
```

### "ANTHROPIC_API_KEY is not set"

1. Create `.env` file
2. Add: `ANTHROPIC_API_KEY=your_key_here`
3. Restart the server

### "Failed to fetch" error in browser

1. Ensure backend server is running on `http://localhost:5000`
2. Check browser console for detailed errors
3. Verify API key is valid

### "Invalid API key" error

1. Check your API key at [Anthropic Console](https://console.anthropic.com/)
2. Regenerate if necessary
3. Update `.env` file
4. Restart server

### Port already in use

Change the port in `.env`:
```
PORT=3000
```

Or kill the process using the port:
```bash
lsof -ti:5000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :5000   # Windows
```

## Security

### Best Practices

- Never commit `.env` file
- Never share your API key
- Use environment variables for sensitive data
- Keep dependencies updated: `npm audit`
- Use HTTPS in production
- Implement rate limiting for production
- Add authentication if needed

### CORS Policy

Currently allows all origins. For production:

```javascript
app.use(cors({
  origin: 'https://yourdomain.com',
  credentials: true
}));
```

## Performance

### Optimization Tips

- API responses cached (optional): Add Redis for caching
- Database logging (optional): Store chat history
- Rate limiting: Implement with `express-rate-limit`
- Compression: Add `compression` middleware

### Response Times

- Average response time: 2-5 seconds
- Depends on: Network, API load, question complexity

## Support & Resources

- **Anthropic Documentation**: https://docs.anthropic.com/
- **Claude API**: https://console.anthropic.com/
- **Express.js Docs**: https://expressjs.com/
- **Node.js Docs**: https://nodejs.org/

## Legal Disclaimer

Yuktata provides legal information for educational purposes only. It does not replace professional legal advice from a qualified advocate. Always consult a legal professional for important legal matters.

## License

MIT License - Feel free to use and modify

## Version

Yuktata v1.0.0

---

**Built with Node.js, Express, and Anthropic Claude API**
