import "@testing-library/jest-dom";
import { validateSin } from "@/lib/validate-sin";
import { describe, expect, it } from "@jest/globals";

describe("validate-sin", () => {
  it("should fail if the sin has less than 9 characters", () => {
    const sin = "123";
    const result = validateSin(sin);
    expect(result.valid).toBe(false);
    expect(result.reason).toBe("SIN must be 9 digits long");
  });

  it("should fail if the sin has more than 9 characters", () => {
    const sin = "1234567890";
    const result = validateSin(sin);
    expect(result.valid).toBe(false);
    expect(result.reason).toBe("SIN must be 9 digits long");
  });

  it("should fail if the sin contains non-digits", () => {
    const sin = "12345678a";
    const result = validateSin(sin);
    expect(result.valid).toBe(false);
    expect(result.reason).toBe("SIN must contain only digits");
  });

  it("should fail if the sin checksum check fails", () => {
    const sin = "123456789";
    const result = validateSin(sin);
    expect(result.valid).toBe(false);
    expect(result.reason).toBe("Invalid SIN");
  });

  it("should pass if the sin is valid", () => {
    const sin = "046454286";
    const result = validateSin(sin);
    expect(result.valid).toBe(true);
    expect(result.reason).toBe("");
  });
});
