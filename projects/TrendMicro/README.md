# Trend Micro Worry-Free Business Security Services Notes

## Product Summary

Worry-Free Business Security Services is a SaaS endpoint protection product for business customers.

Endpoint scope:

- 4M+ Windows endpoints
- 80K+ Android devices

## Hiro's Contributions

### Windows Endpoint

- C++ endpoint agent development.
- System integration.
- Production debugging.
- Performance analysis.
- Customer escalation handling.

### Android Endpoint

- Java endpoint agent development.
- JNI integration with VSAPI native scanning engine.
- Appium + Python automated testing framework.

### Module Integration

Hiro's responsibility is product-side integration rather than implementing the detection algorithms themselves.

Examples of collaborating module teams:

- VSAPI
- EYES
- Browser Extension
- Intel TDT

Responsibilities include:

- Integrating modules into the final endpoint product.
- Managing module lifecycle.
- Enabling features through module APIs.
- Coordinating with module teams.
- Verifying product behavior in customer environments.

## AI-assisted Workflow

Current AI usage includes internal Claude-based tooling connected to GitHub and JIRA through MCP servers.

Use cases:

- Customer issue analysis.
- Project context review.
- Markdown-based workflow definition.
- Development support.
- Documentation support.
