# Hiro Liu Career Portfolio - English Speaker Script

This script is designed for a 5-6 minute self-introduction. It is not meant to be memorized word by word. Use it as a natural speaking guide.

---

## Slide 1 - Hiro Liu

### Goal
Quickly establish what kind of engineer you are.

### Suggested Script
Hi, I'm Hiro Liu. I'm a senior software engineer based in Taipei, Taiwan, with over thirteen years of software engineering experience.

My background is mainly in system software, endpoint security, cross-platform development, automation, and system integration.

I have worked across Windows, Android, iOS, and Linux, and my experience spans from industrial IoT products to endpoint security products used at global scale.

The main theme of my career is building reliable software around real-world systems, where software needs to interact closely with devices, operating systems, and production environments.

### Transition
Let me briefly walk through my career journey first.

---

## Slide 2 - Career Journey

### Goal
Give the interviewer a simple timeline without repeating the resume.

### Suggested Script
I studied Computer Science and Information Engineering at National Taiwan University of Science and Technology.

After graduation, I completed my military service, and then started my software engineering career at SUNIX in 2012.

At SUNIX, I started as a software engineer and later became a section manager, leading a small engineering team.

In 2020, I joined Trend Micro as a senior software engineer.

### Transition
The first major product area I want to introduce is DevicePort at SUNIX.

---

## Slide 3 - SUNIX: Building Connected Industrial Solutions

### Goal
Show that your SUNIX experience was product ecosystem work, not only application development.

### Suggested Script
At SUNIX, the main product I worked on was DevicePort.

DevicePort is a device that virtualizes physical interfaces such as UART, USB, Digital IO, Analog IO, and Parallel ports over Ethernet.

On Windows, I was responsible for the management console, it communicates with the background service to monitor and configure the DevicPort connections and the mapped virtual IO Ports.

For Android and iOS, because those systems do not have native concepts like COM ports or industrial IO interfaces, the communication and control logic had to be implemented purely in software.

That's why I developed the SDK, so that customers can integrate the SDK and control DevicePort through the APIs.

Besides the Windows application and mobile SDKs, another project I worked on was DeviceCloud.

It was a RESTful API service fully implemented in Node.js, running inside a prepared Alpine Linux environment and delivered as a Docker image.

The purpose was to provide a higher-level API-based management solution for DevicePort.

This experience gave me a strong foundation in cross-platform development, device communication, SDK design, and product-level system integration.

### Possible Follow-up Questions
- What is DevicePort?
- How did the Android or iOS SDK communicate with the hardware?
- What did DeviceCloud provide compared with the original DevicePort software?
- Why did you use Docker and Alpine Linux?

### Transition
After SUNIX, I moved into endpoint security at Trend Micro.

---

## Slide 4 - Trend Micro: Protecting Millions of Endpoints

### Goal
Explain your current product scope and clarify that you are an endpoint integration and production debugging engineer.

### Suggested Script
For the past several years, I have been working at Trend Micro on Worry-Free Business Security Services, which is a SaaS endpoint protection product for business customers.

The product includes both Windows and Android endpoint agents.

At first, I was responsible for Android Agents, I work on the endpoint agent using Java, and I also handle JNI integration with the native scanning engine provided by another internal module team.

I built an automation framework using Appium and Python to improve regression testing and release stability.

After the Android project was transferred to another engineering team for long-term maintenance, I shifted my primary focus to the Windows endpoint agent.

On the Windows side, I mainly work with C++ and focus on endpoint agent development, system integration, production debugging, performance analysis, and customer escalations.

The Windows endpoint product is deployed across more than four million managed endpoints.

A very important part of my role is cross-team integration.

For example, when integrating modules from teams such as EYES, VSAPI, Browser Extension, or Intel TDT, my responsibility is not to implement the detection logic itself. My responsibility is to integrate those modules into the final endpoint product, manage the module lifecycle, enable features through their APIs, and make sure the product works reliably in customer environments.

In addition to feature work, I also handle production issues and customer escalations.

Every year I handle around 70 to 90 customer cases, including critical issues that require remote debugging, log analysis, performance investigation, and coordination across teams.

### Possible Follow-up Questions
- What does your team own in the endpoint product?
- How do you debug production issues on Windows?
- What was your role in Intel TDT integration?
- How did you build the Appium automation framework?
- How do you work with module teams?

### Transition
Across these experiences, I have developed a few consistent engineering habits.

---

## Slide 5 - How I Approach Engineering

### Goal
Describe your engineering style in a role-neutral way.

### Suggested Script
There are four principles that describe how I usually approach engineering work.

First, ownership. I prefer to take responsibility for a technical problem until it is clearly understood and resolved. This is especially important in production issues, where the first symptom is often not the real root cause.

Second, problem solving. I try to understand the system behavior before changing the implementation. In my current role, this often means using debugging tools, telemetry, logs, dumps, and performance traces to build a clear picture of what is happening.

Third, collaboration. Many of the projects I worked on required collaboration with other engineering teams. I am comfortable acting as the integration point between product teams and core module teams.

Fourth, continuous learning. In recent years, I have started using AI-assisted development workflows, including internal Claude-based tools connected to GitHub and JIRA through MCP servers. I use these tools to analyze customer issues, review project context, generate documentation, and support engineering productivity.

### Possible Follow-up Questions
- Can you give an example of ownership?
- How do you approach root cause analysis?
- How do you use AI tools in daily work?
- How do you collaborate with other teams?

### Transition
That is the high-level overview of my background and engineering approach.

---

## Slide 6 - Questions

### Goal
Close naturally and invite discussion.

### Suggested Script
That is my brief introduction. I would be happy to discuss any of these projects in more detail, especially DevicePort, DeviceCloud, Worry-Free Business Security Services, endpoint debugging, automation, or cross-team integration.

Thank you.
