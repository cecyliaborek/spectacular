const { test, expect } = require("@spectacular/core/dist/index.js");

test("first spectacular test case", () => {
  expect(1).toBe(1);
});

test("should fail", () => {
  expect(2).toBe(3);
});
