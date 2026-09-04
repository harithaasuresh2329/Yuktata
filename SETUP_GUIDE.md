# YUKTATA - Complete Setup & File Structure Guide

## Overview

Yuktata now includes both **frontend** and **backend** code:
- **Frontend**: HTML5/CSS3/JavaScript (served by Express)
- **Backend**: Node.js/Express server with Anthropic API integration

## Directory Structure

```
yuktata/
├── server.js                 # Express backend server
├── package.json              # Node.js dependencies
├── .env.example              # Environment template
├── .gitignore                # Git ignore file
├── README.md                 # Full documentation
├── QUICKSTART.md             # 5-minute quick start
├── SETUP_GUIDE.md            # This file
└── public/
    └── index.html            # Frontend (served by Express)
```

## Files Explained

### Backend Files

#### `server.js` (Express Server)
- Main backend application
- Handles `/api/chat` endpoint
- Manages Anthropic API calls
- Serves static frontend files
- Implements error handling and CORS

**Key functions:**
- `POST /api/chat` - Process legal questions
- `GET /api/health` - Health check
- Static file serving from `public/` folder

#### `package.json` (Dependencies)
Lists all required npm packages:
- `express` - Web server
- `cors` - Cross-origin requests
- `dotenv` - Environment variables
- `node-fetch` - HTTP requests

**Run:** `npm install` to install dependencies

#### `.env.example` (Configuration Template)
Template for environment variables.
Copy to `.env` and add your API key:
```
ANTHROPIC_API_KEY=your_key_here
PORT=5000
```

**Never commit .env to version control!**

### Frontend Files

#### `public/index.html` (Complete Frontend)
Single-file HTML application with:
- **HTML**: Chat interface structure
- **CSS**: Navy/beige professional styling
- **JavaScript**: Chat logic and API communication

**Key features:**
- Connects to backend at `http://localhost:5000/api/chat`
- Markdown cleanup to remove asterisks
- Structured response formatting
- Connection status indicator
- Error handling and loading states

### Documentation Files

#### `README.md`
Comprehensive documentation covering:
- Features overview
- System requirements
- Installation steps
- API endpoints reference
- Deployment guides
- Troubleshooting
- Security best practices

#### `QUICKSTART.md`
5-minute setup guide for quick installation

#### `.gitignore`
Prevents committing:
- `.env` (sensitive data)
- `node_modules/`
- OS and IDE files
- Logs

## Installation Steps

### 1. Download Files

All files have been provided. Organize them as shown in the structure above.

### 2. Prerequisites

- Node.js v14+ ([Download](https://nodejs.org/))
- npm (comes with Node.js)
- Anthropic API key ([Get here](https://console.anthropic.com/))

### 3. Setup

```bash
# Navigate to the yuktata folder
cd yuktata

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Edit .env and add your API key
# ANTHROPIC_API_KEY=your_actual_key_here
```

### 4. Run

```bash
npm start
```

Output should show:
```
========================================
Yuktata Server Running
Port: 5000
Open: http://localhost:5000
========================================
```

### 5. Access

Open browser: `http://localhost:5000`

## How Frontend & Backend Communicate

### Request Flow

```
Browser (Frontend)
    ↓
User enters question
    ↓
JavaScript sends: POST /api/chat
{
  "message": "Does Article 21 protect the right to life?"
}
    ↓
Express Server (Backend)
    ↓
Validates request
    ↓
Calls Anthropic API
with system prompt
    ↓
Claude Sonnet 4.6
processes question
    ↓
Returns formatted response
    ↓
Express returns JSON
    ↓
JavaScript parses response
    ↓
Removes markdown symbols
    ↓
Formats with CSS styling
    ↓
Displays in chat bubble
```

## System Prompt (Backend)

Located in `server.js`, the system prompt:
- **Enforces domain**: Only answers legal questions
- **Defines format**: Direct Answer, Brief Explanation, Sources
- **Ensures accuracy**: No fabricated laws or citations
- **Current law**: Recognizes BNS 2023, BNSS 2023, BSA 2023

## API Endpoints

### Health Check
```
GET /api/health
```
**Response:** `{ status: 'ok', message: 'Yuktata server is running' }`

### Chat
```
POST /api/chat
Content-Type: application/json

Body:
{
  "message": "question about Indian law"
}
```

**Response:**
```json
{
  "response": "DIRECT ANSWER\n...\n\nBRIEF EXPLANATION\n...\n\nSOURCES\n..."
}
```

## Environment Variables

### Required
- `ANTHROPIC_API_KEY` - Your Anthropic API key

### Optional
- `PORT` - Server port (default: 5000)

### Example .env File
```
ANTHROPIC_API_KEY=sk-ant-abc123def456xyz789
PORT=5000
```

## Security Considerations

### 1. API Key Protection
- Never hardcode API keys in frontend
- Always use backend to handle API calls
- Store in environment variables only

### 2. Input Validation
- Backend validates all inputs
- No direct client-to-API calls

### 3. Error Handling
- Sensitive errors not exposed to client
- Server logs detailed errors only

### 4. CORS
- Currently allows all origins
- For production, restrict to your domain:
```javascript
app.use(cors({
  origin: 'https://yourdomain.com'
}));
```

## Deployment Options

### Local Development
```bash
npm start
```
Access: `http://localhost:5000`

### Heroku
```bash
heroku create your-app-name
heroku config:set ANTHROPIC_API_KEY=your_key
git push heroku main
```

### Railway
1. Connect GitHub repo
2. Add env vars in dashboard
3. Auto-deploys on git push

### Render
1. Create Web Service
2. Build: `npm install`
3. Start: `npm start`
4. Add env vars

### AWS/DigitalOcean/VPS
```bash
# SSH into server
ssh user@server-ip

# Clone repo
git clone <repo-url>
cd yuktata

# Setup
npm install
cp .env.example .env
# Edit .env with API key

# Install PM2 for process management
npm install -g pm2
pm2 start server.js --name "yuktata"
pm2 startup
pm2 save
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `npm: command not found` | Install Node.js from nodejs.org |
| `Cannot find module express` | Run `npm install` |
| `ANTHROPIC_API_KEY is not set` | Add to .env file, restart server |
| `Failed to fetch` (browser) | Ensure server running on localhost:5000 |
| `Port 5000 in use` | Change PORT in .env or kill process |
| `Invalid API key` | Check key at console.anthropic.com |
| `CORS error` | Check browser console, ensure server is running |

## Development Workflow

### Making Changes

**Frontend (HTML/CSS/JS):**
1. Edit `public/index.html`
2. Refresh browser
3. Changes appear immediately

**Backend (Node.js):**
1. Edit `server.js`
2. Restart: `npm start`
3. For auto-restart: `npm run dev` (requires nodemon)

### Adding Features

Examples:
- Add chat history storage: Modify `server.js` to use database
- Add user authentication: Add auth middleware
- Add rate limiting: Use `express-rate-limit`
- Add logging: Use `winston` or `morgan`

## Performance Tips

1. **Caching** - Cache responses using Redis
2. **Database** - Store chat history for reference
3. **Rate Limiting** - Prevent abuse
4. **Compression** - Add gzip compression
5. **CDN** - Serve static files via CDN (production)

## Testing

### Test Health Endpoint
```bash
curl http://localhost:5000/api/health
```

### Test Chat Endpoint
```bash
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"What is Article 21?"}'
```

## License & Legal

- MIT License - Use and modify freely
- Yuktata provides educational legal information only
- Not a substitute for professional legal advice

## Support

- Check README.md for full documentation
- Review server.js comments for code explanation
- Check browser console for frontend errors
- Check server terminal for backend errors

## Next Steps

1. Download all files
2. Follow QUICKSTART.md for 5-minute setup
3. Ask legal questions
4. Deploy to production

---

**Yuktata v1.0.0** - Built with Node.js, Express, and Anthropic Claude API
