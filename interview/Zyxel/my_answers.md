# Zyxel - My Polished Answers

## 1. Self Introduction

Hi, I'm Hiro Liu. I am a senior software engineer with over thirteen years of experience across Windows, Android, iOS, and Linux-related environments.

My background is mainly in system software, endpoint security, cross-platform development, automation, and system integration.

Earlier in my career at SUNIX, I worked on DevicePort, an industrial device platform that virtualizes physical interfaces such as UART, USB, Digital I/O, Analog I/O, and Parallel ports over Ethernet. Around that platform, I worked on Windows management software, Android and iOS SDKs using TCP / UDP communication, and DeviceCloud, a RESTful API service running on Alpine Linux and delivered as a Docker image.

Later, at Trend Micro, I worked on Worry-Free Business Security Services, focusing on Android and Windows endpoint agents, module integration, production debugging, performance analysis, automation, and customer escalations.

I would describe myself as a system software engineer who is strong in system integration, debugging, automation, and learning new technical domains through real product problems.

## 2. Why Zyxel?

I am interested in Zyxel because this role is very close to system software and networking, which are areas that connect well with my background.

At SUNIX, I worked on DevicePort, which involved TCP / UDP communication and remote device control over Ethernet. At Trend Micro, I worked on endpoint products that required system integration, debugging, and module lifecycle management.

This role combines Linux, networking, network SoC integration, and automation. I have not worked directly on XPON before, but I believe my experience in device communication, product integration, and troubleshooting can transfer well to this role.

## 3. How do you analyze high CPU usage?

My general approach is to first make sure the trace really covers the high CPU interval. If the trace does not include the problematic period, the analysis can easily go in the wrong direction.

After that, I locate the CPU peak in the performance tool and identify which process or thread consumed the most CPU. Then I inspect the hottest call stacks and determine whether the CPU usage is coming from our agent-side module or from a core module owned by another team.

If it belongs to a core module, I correlate the time period with the module logs and provide evidence to the module team, including the call stack, timestamp, and related logs.

If it belongs to our security agent side, I compare the call stack with our agent logs to understand which code path or feature was active at that time. If the information is not enough, I may collect additional data using tools such as Process Monitor or other logs.

The key point is that I do not stop at the first suspicious call stack. I try to validate the hypothesis with multiple sources of evidence before concluding the root cause.

## 4. What is your Linux experience?

My Linux experience is not mainly kernel development. It is mostly product-side service development and deployment.

At SUNIX, I built DeviceCloud, a RESTful API service implemented in Node.js. It ran inside a prepared Alpine Linux environment and was delivered as a Docker image to customers. The service provided a higher-level API-based management solution for DevicePort.

So my Linux experience is closer to user-space service development, deployment, Docker packaging, and product integration. For this role, I would need to deepen my Linux networking and kernel-space knowledge, but I believe my system software background gives me a strong foundation to ramp up quickly.

## 5. Have you worked on driver integration?

I have not been the main developer of a Linux kernel driver. My experience is closer to product-side driver or module integration.

For example, at Trend Micro, I integrated modules provided by other internal teams into the endpoint product. For Intel TDT integration, the detection logic was implemented by the module team, while my responsibility was to integrate the new driver lifecycle into the product, enable the feature through the provided APIs, and make sure it worked correctly in the final customer environment.

So I would not claim to be a kernel driver developer today, but I do have experience working around driver or module lifecycle integration and debugging issues at the product level.

## 6. TCP vs UDP

TCP is connection-oriented and provides reliable, ordered data transmission. It is suitable when correctness and ordering are important.

UDP is connectionless and has lower overhead. It is useful for scenarios such as discovery, broadcast, or cases where the application can handle reliability by itself.

In my DevicePort experience, TCP / UDP communication was an important part of the product. The mobile SDKs encapsulated communication logic so that customers could control DevicePort from their own Android or iOS applications without implementing the underlying protocol by themselves.

## 7. How do you approach a new technical domain?

I usually start from the architecture and data flow. I try to understand the major components, their responsibilities, and how data moves between them.

Then I read the code and logs together. I prefer to verify my understanding through small tasks, debugging, or reproducing an issue rather than only reading documentation.

This is also how I worked when integrating modules from other teams at Trend Micro. I had to understand the module lifecycle, API behavior, logs, and product integration points before I could debug or deliver the feature reliably.
