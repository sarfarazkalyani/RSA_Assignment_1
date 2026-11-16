/*
## Playwright Packages: `playwright` vs. `@playwright/test`

This project uses `@playwright/test` rather than the standalone `playwright` package. Here is the key difference between the two:

* **`playwright` (Core Library):** The low-level browser automation engine. It provides APIs to launch Chromium, Firefox, and WebKit, navigate pages, and interact with elements, making it ideal for web scraping or custom automation scripts. It does not include a test runner or built-in assertions.
* **`@playwright/test` (Test Runner Framework):** The full end-to-end testing framework built on top of the core `playwright` library. It includes everything from the core package plus a test runner (`test()`), auto-retrying assertions (`expect()`), parallel execution, browser fixtures, retries, and HTML reporting.
 */



