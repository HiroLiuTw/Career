# DevicePort / DeviceCloud Notes

## Product Summary

DevicePort is an industrial device server that virtualizes common industrial and commercial interfaces over Ethernet.

Supported physical interfaces include:

- UART
- USB
- Digital IO
- Analog IO
- Parallel

On Windows, DevicePort can make remote physical ports appear to the host system as if the host had local physical interface cards installed.

On Android and iOS, because the operating systems do not natively define these industrial IO interfaces, communication and control are implemented through software logic.

## Hiro's Contributions

### Windows Management Console

- Developed management console software.
- Focused on configuration and virtual port management.

### Android SDK

- Encapsulated DevicePort communication and control logic into a reusable SDK.
- Used TCP and UDP communication.
- Enabled customers to integrate DevicePort capabilities into their own Android applications.

### iOS SDK

- Encapsulated DevicePort communication and control logic into a reusable SDK.
- Used TCP and UDP communication.
- Enabled customers to integrate DevicePort capabilities into their own iOS applications.

### DeviceCloud

- A higher-level RESTful API management solution for DevicePort.
- RESTful API server fully implemented in Node.js.
- Service runs inside a prepared Alpine Linux environment.
- Delivered to customers as a Docker image.
- Product was developed but not commercially sold.
