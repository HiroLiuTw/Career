# Zyxel - Likely Technical Questions

## 1. C Language

### Q1. What is the difference between `sizeof` and `strlen`?

**Expected Answer**

`sizeof` is evaluated based on the type or object size at compile time in most cases. `strlen` calculates the length of a C string at runtime until it reaches the null terminator `\0`.

**Example**

```c
char arr[] = "hello";
char *p = arr;

sizeof(arr); // 6, including null terminator
strlen(arr); // 5
sizeof(p);   // pointer size, usually 8 on 64-bit systems
```

**How Hiro Can Connect It**

Mention that low-level system software often requires careful handling of buffers, string length, and memory boundaries.

---

### Q2. What is a memory leak?

**Expected Answer**

A memory leak happens when allocated memory is no longer reachable and cannot be freed.

```c
char *buf = malloc(100);
buf = malloc(200); // the first 100 bytes are leaked
free(buf);
```

**Follow-up**

How do you detect it?

**Answer**

Use code review, logging, valgrind / ASAN on Linux, heap analysis tools, and long-running stress tests.

---

### Q3. What is the difference between stack and heap memory?

**Expected Answer**

Stack memory is automatically managed for local variables and function calls. Heap memory is manually allocated and freed by the program using APIs such as `malloc` and `free`.

**Follow-up**

What problems can happen with heap memory?

**Answer**

Memory leak, double free, use-after-free, heap corruption, and fragmentation.

---

### Q4. What is the difference between `const char *p`, `char * const p`, and `const char * const p`?

**Expected Answer**

- `const char *p`: the data is const; the pointer can change.
- `char * const p`: the pointer is const; the data can change.
- `const char * const p`: both pointer and data are const.

---

### Q5. Implement `strcpy` safely.

**Expected Answer**

Traditional `strcpy` is unsafe because it assumes the destination buffer is large enough. A safer implementation should accept the destination buffer size.

```c
int safe_strcpy(char *dst, size_t dst_size, const char *src) {
    if (!dst || !src || dst_size == 0) {
        return -1;
    }

    size_t i = 0;
    for (; i + 1 < dst_size && src[i] != '\0'; ++i) {
        dst[i] = src[i];
    }
    dst[i] = '\0';

    return src[i] == '\0' ? 0 : -1;
}
```

---

## 2. Linux

### Q6. What is the difference between user space and kernel space?

**Expected Answer**

User space is where applications run with limited privileges. Kernel space is where the OS kernel and drivers run with full access to hardware and system resources. Communication is usually through system calls, device files, ioctl, netlink, procfs, sysfs, or other kernel interfaces.

**How Hiro Can Connect It**

Hiro can mention that his strongest experience is product-side and user-space integration, but he has experience integrating driver-provided functionality into endpoint products.

---

### Q7. What is `ioctl`?

**Expected Answer**

`ioctl` is a system call used to send device-specific control commands from user space to a driver. It is commonly used when standard read/write operations are not enough.

---

### Q8. How would you debug high CPU usage on Linux?

**Expected Answer**

1. Use `top` or `htop` to identify the process.
2. Use `pidstat`, `perf top`, or `top -H` to identify hot threads.
3. Use logs and metrics to identify timing and workload.
4. Use `strace`, `perf record`, or gdb if deeper investigation is needed.
5. Validate the hypothesis with logs, reproduction, or additional tracing.

**How Hiro Can Connect It**

This maps closely to his WPA approach on Windows: capture the high CPU interval, identify the peak, inspect hot call stacks, determine module ownership, correlate with logs, and validate before concluding root cause.

---

### Q9. What is the difference between process and thread?

**Expected Answer**

A process has its own address space and resources. Threads inside the same process share the address space but have separate stacks and execution contexts.

---

### Q10. What are `select`, `poll`, and `epoll`?

**Expected Answer**

They are I/O multiplexing mechanisms.

- `select`: older API, limited fd set size, scans all descriptors.
- `poll`: removes fd set size limitation but still scans all descriptors.
- `epoll`: event-driven and more scalable for large numbers of file descriptors.

---

## 3. Networking

### Q11. Explain TCP three-way handshake.

**Expected Answer**

1. Client sends SYN.
2. Server replies SYN-ACK.
3. Client replies ACK.

After this, both sides can exchange data reliably.

---

### Q12. TCP vs UDP. When would you use each?

**Expected Answer**

TCP provides reliable, ordered, connection-oriented transmission. UDP is connectionless, lower overhead, and suitable for broadcast, discovery, real-time traffic, or cases where the application handles reliability.

**How Hiro Can Connect It**

In DevicePort, TCP / UDP communication was used for device management and communication. UDP is commonly useful for discovery or broadcast-style communication, while TCP is suitable for reliable command or data transmission.

---

### Q13. What is the difference between bridge and routing?

**Expected Answer**

A bridge operates mainly at Layer 2 and forwards frames based on MAC addresses. Routing operates at Layer 3 and forwards packets based on IP addresses and routing tables.

---

### Q14. What is ARP?

**Expected Answer**

ARP maps an IPv4 address to a MAC address on a local network segment.

---

### Q15. What is VLAN?

**Expected Answer**

VLAN is a Layer 2 network segmentation mechanism. IEEE 802.1Q adds VLAN tags to Ethernet frames so multiple logical networks can share the same physical infrastructure.

---

### Q16. How would you debug TCP retransmission?

**Expected Answer**

Use packet capture tools such as tcpdump or Wireshark, check packet loss, RTT, MTU issues, congestion, network errors, duplex mismatch, firewall behavior, and application-level delays.

---

## 4. Automation

### Q17. What kind of automation experience do you have?

**Suggested Answer**

I built an Android automation framework using Appium and Python unittest to reduce manual regression effort and improve release stability. I also maintained CI/CD workflows and wrote scripts for engineering automation.

---

### Q18. How would you design an automation tool for network device testing?

**Expected Answer**

1. Define test scenarios and expected behavior.
2. Build a test runner in Python.
3. Control the device through CLI, API, SSH, or serial interface.
4. Collect logs and metrics.
5. Validate results automatically.
6. Integrate into CI if possible.
