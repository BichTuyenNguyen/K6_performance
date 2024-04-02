
<p align="center"><h1>K6 PERFORMANCE TESTING</h1></p>
<p align="center">
    <a href="https://github.com/grafana/k6/releases">Download</a> ·
    <a href="https://k6.io/docs">Documentation</a> ·
    <a href="https://community.k6.io/">Community Forum</a>
</p>

<br>

## Framework Structure
[TBD]

## Example script


```js
import http from "k6/http";
import { check, sleep } from "k6";

// Test configuration
export const options = {
  thresholds: {
    // Assert that 99% of requests finish within 3000ms.
    http_req_duration: ["p(99) < 3000"],
  },
  // Ramp the number of virtual users up and down
  stages: [
    { duration: "30s", target: 15 },
    { duration: "1m", target: 15 },
    { duration: "20s", target: 0 },
  ],
};

// Simulated user behavior
export default function () {
  let res = http.get("https://test-api.k6.io/public/crocodiles/1/");
  // Validate response status
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}
```

## How to run script
Using npm:
```
 npm run jira 
```
Using k6:
```
k6 run -e ENV='staging' ./tests/jira_integration_test_ver2.js
```

## Documentation

The docs cover all aspects of using k6. Some highlights include:
- [Get Started](https://k6.io/docs). Install, run a test, inspect results.
- [HTTP requests](https://k6.io/docs/using-k6/http-requests/). Have your virtual users use HTTP methods.
  Or, check the other [Protocols](https://k6.io/docs/using-k6/protocols/).
- [Thresholds](https://k6.io/docs/using-k6/thresholds). Set goals for your test, and codify your SLOs.
- [Options](https://k6.io/docs/using-k6/k6-options). Configure your load, duration, TLS certificates, and much, much more.
- [Scenarios](https://k6.io/docs/using-k6/scenarios).
  Choose how to model your workload: open models, closed models, constant RPS, fixed iterations, and more.
- [Results output](https://k6.io/docs/results-output). Study, filter, and export your test results.
- [JavaScript API](https://k6.io/docs/javascript-api). Reference and examples of all k6 modules.
- [Extensions](https://k6.io/docs/extensions). Extend k6 for new protocols and use cases.


