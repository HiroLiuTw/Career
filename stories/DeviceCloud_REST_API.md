# Story - DeviceCloud RESTful API Service

## Context

DeviceCloud was a higher-level API-based management solution for DevicePort. It was not a sold product, but it was an independent software solution built around the DevicePort hardware platform.

## Architecture

Client / application

-> RESTful API service

-> Node.js request handling and device-management logic

-> Alpine Linux runtime

-> Docker image delivery

-> DevicePort hardware

## API Pattern

The service followed a simple RESTful pattern:

1. Receive GET / POST / PUT command.
2. Parse request parameters or body.
3. Execute the corresponding DevicePort management logic.
4. Return a structured response.

## Interview Message

This was not an internet-scale backend system, but it was a complete RESTful service implementation. The main value was creating a higher-level API interface so that DevicePort could be managed through software instead of only through lower-level tools or platform-specific applications.

## Libraries to Verify

The exact Node.js libraries should be verified from source code if possible. Possible candidates include:

- express
- http
- body-parser or express.json()
- cors
- net
- dgram
- fs
- child_process
- logging utility such as winston
