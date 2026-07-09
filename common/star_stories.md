# Common STAR Stories

This file collects reusable interview stories. Each story can be adapted for behavioral or technical interviews.

## 1. DevicePort Product Ecosystem

### Situation

SUNIX had an industrial device product called DevicePort that allowed physical interfaces such as UART, USB, Digital I/O, Analog I/O, and Parallel ports to be accessed over Ethernet.

### Task

Build software solutions around the DevicePort platform across multiple environments.

### Action

Developed Windows management software, Android and iOS SDKs using TCP / UDP communication, and DeviceCloud, a RESTful API service built with Node.js and delivered as a Docker image on Alpine Linux.

### Result

Created a software ecosystem around the DevicePort hardware platform and enabled customers to integrate DevicePort into their own applications.

## 2. Android Automation Framework

### Situation

Android endpoint regression testing required repeatable validation before release.

### Task

Reduce manual regression effort and improve release stability.

### Action

Built an automation framework using Appium and Python unittest to execute test cases against Android devices.

### Result

Improved regression testing efficiency and supported more stable release validation.

## 3. CPU Performance Analysis

### Situation

A system or endpoint showed high CPU usage and required root cause investigation.

### Task

Identify which process, module, or call stack caused the CPU spike.

### Action

Captured the high CPU interval, identified the peak, inspected hot call stacks, determined module ownership, correlated with logs, and validated the hypothesis with additional evidence.

### Result

Provided clear evidence for either internal agent-side analysis or escalation to the responsible module team.
