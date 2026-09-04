# Yuktata - GitHub Repository Setup Guide

## Quick GitHub Setup (5 Minutes)

### 1. Create GitHub Repository
1. Go to https://github.com/new
2. Name: `yuktata`
3. Description: `AI Legal Assistant for Indian Law`
4. Choose Public
5. DO NOT initialize with README
6. Click "Create repository"

### 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Yuktata - AI Legal Assistant for Indian Law"
git remote add origin https://github.com/YOUR_USERNAME/yuktata.git
git branch -M main
git push -u origin main
```

---

## Directory Structure for GitHub

```
yuktata/
├── public/
│   └── index.html              # Frontend
├── .env.example                # API key template
├── .gitignore                  # Git ignore file
├── server.js                   # Backend server
├── package.json                # Dependencies
├── README.md                   # Documentation
├── QUICKSTART.md               # Quick start guide
├── LICENSE                     # MIT License
└── CONTRIBUTING.md             # Contribution guidelines
```

---

## Files to Include

### MUST INCLUDE ✅
- server.js
- package.json
- public/index.html
- .env.example
- .gitignore
- README.md

### RECOMMENDED ✅
- QUICKSTART.md
- LICENSE
- CONTRIBUTING.md

### DO NOT INCLUDE ❌
- .env (contains API key)
- node_modules/
- .DS_Store
- *.log

---

## Step-by-Step Setup

### 1. Organize Files Locally

```
yuktata/
├── server.js           (copy from downloads)
├── package.json        (copy from downloads)
├── .env.example        (copy from downloads)
├── .gitignore          (copy from downloads)
├── README.md           (copy from downloads)
├── QUICKSTART.md       (copy from downloads)
└── public/
    └── index.html      (copy from downloads)
```

### 2. Create LICENSE File

```bash
cat > LICENSE << 'ENDFILE'
MIT License

Copyright (c) 2024 Yuktata Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
ENDFILE
```

### 3. Create CONTRIBUTING.md File

```bash
cat > CONTRIBUTING.md << 'ENDFILE'
# Contributing to Yuktata

## How to Contribute

1. Fork the repository
2. Clone: git clone https://github.com/YOUR_USERNAME/yuktata.git
3. Create branch: git checkout -b feature/my-feature
4. Make changes
5. Commit: git commit -m "Add feature"
6. Push: git push origin feature/my-feature
7. Create Pull Request

## Code Standards

- Write meaningful commit messages
- Test before pushing
- Follow existing code style
ENDFILE
```

### 4. Initialize Git Locally

```bash
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### 5. Add and Commit Files

```bash
git add .
git commit -m "Initial commit: Yuktata - AI Legal Assistant for Indian Law"
git branch -M main
```

### 6. Create GitHub Repository

1. Go to https://github.com/new
2. Name: `yuktata`
3. DO NOT initialize with README/gitignore/license
4. Click "Create repository"
5. Copy the repository URL

### 7. Push to GitHub

```bash
# Replace YOUR_USERNAME
git remote add origin https://github.com/YOUR_USERNAME/yuktata.git
git push -u origin main
```

### 8. Verify on GitHub

Visit: https://github.com/YOUR_USERNAME/yuktata
- ✅ All files present
- ✅ .env NOT present (gitignored)
- ✅ README.md shows as landing page

---

## GitHub Repository Settings

### Enable Features
- Settings → Features → Enable Issues
- Settings → Features → Enable Discussions

### Add Topics
Settings → About → Add topics:
- legal-ai
- chatbot
- indian-law
- claude-api
- nodejs

### Configure Visibility
- Public (for open source)
- Private (for private use)

---

## Important: Environment Variables

### Local (.env - NOT COMMITTED)
```
ANTHROPIC_API_KEY=your_key_here
PORT=5000
```

### GitHub Secrets (For CI/CD)
Settings → Secrets and variables → Actions
- Click "New repository secret"
- Name: `ANTHROPIC_API_KEY`
- Value: Your actual API key

---

## Regular Git Workflow

### Push Updates

```bash
# Make changes to files
git add .
git commit -m "Description of what changed"
git push origin main
```

### Create Feature Branch

```bash
git checkout -b feature/new-feature
# Make changes
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
# Create Pull Request on GitHub
```

---

## Useful Git Commands

```bash
git status                          # Check status
git log                             # See history
git remote -v                       # View remotes
git checkout -b branch-name         # Create branch
git checkout branch-name            # Switch branch
git pull origin main                # Pull latest
git push origin main                # Push changes
```

---

## Troubleshooting

### Authentication Failed
1. Go to https://github.com/settings/tokens
2. Create Personal Access Token
3. Use token as password

### Remote Not Found
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/yuktata.git
git push -u origin main
```

### .env Accidentally Committed
```bash
git rm --cached .env
git commit -m "Remove .env"
git push origin main
```

---

## Complete Checklist

- ✅ Files organized locally
- ✅ Git initialized (git init)
- ✅ Files committed (git commit)
- ✅ GitHub repository created
- ✅ Remote added (git remote add)
- ✅ Files pushed (git push)
- ✅ Verified on GitHub
- ✅ .env not in repository
- ✅ Repository configured

---

**Your Yuktata is ready for GitHub!**

Repository URL: https://github.com/YOUR_USERNAME/yuktata
