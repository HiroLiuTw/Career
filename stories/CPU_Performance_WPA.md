# Story - CPU Performance Analysis with WPA

## Situation

The interviewer asked a hypothetical troubleshooting question: how to analyze a high CPU issue using Windows Performance Analyzer (WPA).

## Core Workflow

1. Confirm that the WPR / ETL trace covers the actual high-CPU time range.
2. Open the trace in WPA and zoom into the CPU high interval.
3. Identify the peak or sustained CPU usage period.
4. Use CPU views to find the process and module consuming the most CPU.
5. Expand the call stack to identify the hot path.
6. Determine whether the stack belongs to:
   - Security agent side
   - Core module team component
   - Third-party component
   - OS / driver layer
7. Correlate WPA findings with product logs by timestamp.
8. If the issue belongs to a core module, collect evidence and transfer it to the owner team.
9. If it belongs to the agent side, continue analysis with agent logs, Process Monitor logs, or a more focused WPR trace.

## Strong Interview Message

The key is not only finding the process that consumes CPU. The stronger message is that I use WPA as part of an evidence-based debugging workflow: performance trace, call stack, module ownership, log correlation, and clear handoff to the responsible team.

## Reusable Answer

If I need to analyze a high CPU issue using WPA, I first make sure the trace covers the exact time range when CPU usage was high. Then I zoom into the high-CPU interval in WPA and use CPU Usage by Process and CPU Usage by Stack to identify the process, module, and hot call stack.

After that, I determine ownership. If the stack belongs to a core module maintained by another team, I correlate the timestamp with module logs and prepare clear evidence before transferring the case. If it belongs to our agent side, I compare the stack with agent logs and may collect additional Process Monitor logs or a more focused WPR trace.

My goal is to narrow the issue from a symptom to a responsible component and provide enough evidence for root cause analysis.
