# Quest Interview - Questions and Suggested Answers

This file captures real interview questions from Quest and turns them into reusable answers.

---

## Q1. How would you analyze a high CPU issue using WPA?

### Why the interviewer asked this

They were checking whether I have a real troubleshooting workflow, not just tool familiarity. A good answer should show how I move from a performance symptom to evidence, ownership, and follow-up actions.

### Suggested Answer

If I need to analyze a high CPU issue using WPA, I usually start by making sure the trace actually covers the time range where the CPU usage was high.

First, I would open the ETL trace in WPA and locate the high CPU interval on the timeline. I would zoom into the peak or the sustained high-CPU period instead of looking at the entire trace, because the overall average can hide the real problem.

Then I would use views such as CPU Usage, CPU Usage by Process, and CPU Usage by Stack to identify which process consumed the most CPU during that time. After that, I would expand the call stack to understand whether the hot path came from our own agent process, one of our product modules, a core module from another team, or even a third-party component.

If the stack points to a core module owned by another module team, my next step is to collect supporting evidence. I would check whether the module logs were captured during the same time window, correlate the timestamps with the WPA trace, and summarize the observation clearly before transferring the case to the module team.

If the stack belongs to the security agent side, I would compare the WPA call stack with the agent logs from the same period to understand what operation the agent was performing at that moment. If the data is still not enough, I may collect additional evidence such as Process Monitor logs, more detailed product logs, or another WPR trace with a more focused profile.

So my workflow is not only to find the process with high CPU. I try to narrow it down to the responsible component, correlate the performance data with product logs, and provide enough evidence for the owner team or for my own team to continue the root cause analysis.

### Shorter Version

I would first confirm that the WPR trace covers the actual high-CPU time range. Then I would zoom into the peak in WPA, identify the top CPU-consuming process and module, and expand the call stack to find the hot path. After that, I would correlate the stack with product logs from the same time window. If the issue belongs to another core module, I would summarize the evidence and work with the owning module team. If it belongs to the agent side, I would continue the investigation with agent logs, Process Monitor, or a more focused trace.

### Keywords to remember

- Time range validation
- CPU peak / sustained CPU interval
- CPU Usage by Process
- CPU Usage by Stack
- Hot path
- Process / module ownership
- Timestamp correlation
- Agent logs
- Module logs
- Process Monitor
- Evidence-based escalation

---

## Q2. Which libraries did you use in Node.js and Python?

### Why the interviewer asked this

They wanted to know whether my experience was hands-on or only conceptual. The safest answer is to be honest about what I remember and explain the architecture clearly.

### Suggested Answer

For Node.js, my experience was mainly from building a RESTful API service for DeviceCloud. It was a relatively lightweight service, not a large-scale backend system.

The service exposed HTTP APIs for DevicePort management. The overall flow was simple and clear: the client sent GET, POST, or PUT requests, the server parsed the request, executed the corresponding device-management logic, and returned a structured response.

I do not want to overstate the exact library names because the project was several years ago, but the service was built around standard Node.js HTTP request and response handling. It likely used common REST-server components such as routing, request-body parsing, and response formatting. The important part was that I implemented the complete API flow and packaged the service inside an Alpine Linux environment as a Docker image for delivery.

For Python, my most direct experience was test automation. I used Python with Appium and unittest to write automated test cases for the Android endpoint agent. The test cases interacted with Android devices through Appium, executed regression scenarios, and helped improve release stability.

### More Direct Version

For Node.js, I mainly used it to implement a RESTful API service for DeviceCloud. The service handled GET, POST, and PUT APIs, executed device-management logic, and returned responses to the client. I do not remember every library name clearly, so I would rather not claim something inaccurate, but the implementation was based on standard Node.js HTTP server and REST API patterns.

For Python, I used Appium and unittest to build Android automation test cases. The Python test cases controlled Android devices through Appium and were used for regression testing before releases.

### Possible Node.js modules to verify later

Please verify against the old code if available:

- `express` - very common for routing REST APIs
- `http` - built-in Node.js HTTP server module
- `body-parser` or `express.json()` - request body parsing
- `cors` - cross-origin request handling, if the API was called from web UI
- `net` or `dgram` - TCP / UDP communication with DevicePort, if the Node.js service talked directly to the hardware
- `fs` - reading / writing configuration files
- `child_process` - invoking system commands, if needed
- `winston` or similar logging library - structured logging, if used

### Python modules to mention confidently

- `Appium`
- `unittest`

Possible supporting modules, only mention if actually used:

- `subprocess`
- `os`
- `time`
- `logging`
- `json`
- `adb` / Android-related utilities

---

## Interview Reflection

The strongest way to answer these questions is not to list tools, but to explain the workflow:

- For WPA: symptom -> trace -> time range -> process -> call stack -> module ownership -> log correlation -> evidence.
- For Node.js: REST API request -> business / device-management logic -> response -> Docker delivery.
- For Python: test case -> Appium -> Android device -> regression validation.
