# Security Policy

## Supported Versions

| Version | Status |
|---------|--------|
| 1.x     | ✅ Supported |

## Reporting a Vulnerability

If you discover a security vulnerability, please email Andresqr19 instead of using the issue tracker.

## Security Best Practices

1. **Dependency Management**
   - Keep dependencies updated with `npm audit`
   - Review `npm audit` warnings regularly
   - Use pinned versions for production

2. **Code Quality**
   - Environment variables for sensitive data
   - Never commit `.env` files

3. **Environment**
   - Node.js 18+
   - NPM 9+
