# Zyxel - Likely Manager Questions

## Q1. Please introduce yourself.

Focus on system software, device-oriented software, networking, automation, and production debugging.

## Q2. Why are you interested in Zyxel and this role?

### Suggested Answer

I am interested in this role because it is close to the kind of system software work I have been doing for many years. Earlier in my career, I worked on DevicePort, which was a network-connected industrial device platform involving TCP / UDP communication, device control, Windows management software, mobile SDKs, and a Linux-based RESTful service. Later, at Trend Micro, I worked on endpoint products, module integration, production debugging, and automation.

This Zyxel role combines Linux, networking, system integration, and automation. Although I have not worked directly on XPON before, I believe my background in device communication, system integration, and troubleshooting can transfer well to this domain.

## Q3. You do not have direct XPON experience. How would you ramp up?

### Suggested Answer

I would start by understanding the product architecture and the data path first: which parts are handled by the SoC, which parts are handled by Linux kernel modules or drivers, and which parts are handled by user-space applications. Then I would study the relevant protocols, existing logs, debugging tools, and current automation flow. I usually ramp up by combining code reading, architecture understanding, debugging tools, and small tasks that allow me to verify my understanding.

## Q4. What is your Linux experience?

### Suggested Answer

My Linux experience is mostly from product-side service development and deployment rather than kernel development. At SUNIX, I built DeviceCloud, a RESTful API service fully implemented in Node.js, running in a prepared Alpine Linux environment and delivered as a Docker image. I also have general experience with Linux environments through Docker, CI/CD, scripting, and troubleshooting.

I would be honest that I am not a deep kernel developer today, but I have strong system debugging and integration experience and am comfortable learning lower-level Linux networking topics.

## Q5. Have you done driver development?

### Suggested Answer

I have not been the main author of a Linux kernel driver. My experience is closer to driver or module integration at the product level. For example, at Trend Micro, when integrating modules such as Intel TDT or other security modules, my responsibility was to integrate the module into the final endpoint product, manage the lifecycle, enable features through APIs, and verify that it worked reliably in customer environments.

So I would not describe myself as a driver developer, but I do have experience integrating lower-level modules into production products and debugging issues around those integrations.

## Q6. Tell me about a difficult technical issue you solved.

Use the CPU Performance WPA story or a customer escalation story.

Key points:

- Identify the symptom and impact.
- Collect the right trace or logs.
- Locate the high-usage interval.
- Find the hot process / module / call stack.
- Correlate with product logs.
- Validate the hypothesis.
- Coordinate with the responsible team if needed.

## Q7. How do you work with other teams?

### Suggested Answer

In my current role, many features require coordination with core module teams. I often act as the product-side integration engineer. That means I need to understand the module team's API or driver lifecycle, integrate it into the endpoint product, verify the behavior, and debug issues when the product does not behave as expected. I also need to provide clear evidence, such as logs, traces, or reproduction steps, when escalating issues back to module teams.

## Q8. What is your automation experience?

### Suggested Answer

I built an Android automation framework using Appium and Python unittest. The framework executed test cases against Android devices and helped improve regression testing and release stability. Besides that, I also worked with CI/CD workflows, GitHub Actions, Python scripts, and batch scripts to improve engineering efficiency.
