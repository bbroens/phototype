import { assert, describe, expect, it } from "vitest";

// Basic initial test to check if tests are triggering correctly
describe("initial phototype test suite", () => {
  it("should be able to test functions", () => {
    assert.equal(Math.sqrt(4), 2);
  });

  it("should be able to test basic math", () => {
    expect(1 + 1).eq(2);
  });
});
