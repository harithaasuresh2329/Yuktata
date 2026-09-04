# Contributing to Yuktata

Thank you for your interest in contributing to Yuktata!

## Getting Started

### 1. Fork & Clone

```bash
# Fork on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/yuktata.git
cd yuktata
```

### 2. Setup Development

```bash
npm install
cp .env.example .env
# Add your Anthropic API key to .env
```

### 3. Run Locally

```bash
npm start
```

Open http://localhost:5000

## Contributing Guidelines

### Making Changes

1. Create a feature branch:
   ```bash
   git checkout -b feature/my-feature
   ```

2. Make your changes

3. Test thoroughly:
   ```bash
   npm start
   ```

4. Commit with clear message:
   ```bash
   git commit -m "Add feature: description"
   ```

5. Push to your fork:
   ```bash
   git push origin feature/my-feature
   ```

6. Create Pull Request on GitHub

### Commit Message Format

- Use present tense: "Add feature" not "Added feature"
- Be descriptive: "Fix markdown removal in responses" not "Fix bug"
- Keep it concise: First line under 50 characters

### Code Standards

- Follow existing code style
- Add comments for complex logic
- Test before pushing
- No console.log in production code

## Reporting Issues

Include:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- System info (OS, Node version, etc.)

## Types of Contributions

### Bug Fixes
- Found a bug? Create an issue first
- Include reproducible example
- Submit PR with fix

### Features
- Suggest feature via issue
- Discuss implementation
- Submit PR with feature

### Documentation
- Improve README
- Add examples
- Fix typos

### Legal Framework Updates
- Add current Indian legal precedents
- Update for new legislation
- Improve accuracy of responses

## Pull Request Process

1. Update README if needed
2. Test all changes
3. Add meaningful commit message
4. Describe changes in PR
5. Link related issues

## Code Review

- Be open to feedback
- Discuss changes respectfully
- Make requested updates
- PR will be merged after approval

## Questions?

Open an issue with label "question" or "discussion"

## License

By contributing, you agree your code will be licensed under MIT License.

---

Thank you for making Yuktata better! 🙏
