import "@testing-library/jest-dom";
import useSinValidator from "@/lib/use-sin-validator";
import { describe, expect, it } from "@jest/globals";
import { renderHook } from "@testing-library/react";

describe("<useSinValidator />", () => {
  it("should return valid as false and reason as 'SIN must be 9 digits long' if the sin has less than 9 characters", () => {
    const hookRenderResult = renderHook(() => useSinValidator("123"));
    const { valid, reason } = hookRenderResult.result.current;

    expect(valid).toBe(false);
    expect(reason).toBe("SIN must be 9 digits long");
  });

  it("should return valid as false and reason as 'SIN must be 9 digits long' if the sin has more than 9 characters", () => {
    const hookRenderResult = renderHook(() => useSinValidator("1234567890"));
    const { valid, reason } = hookRenderResult.result.current;

    expect(valid).toBe(false);
    expect(reason).toBe("SIN must be 9 digits long");
  });

  it("should return valid as false and reason as 'SIN must contain only digits' if the sin contains non-digits", () => {
    const hookRenderResult = renderHook(() => useSinValidator("12345678a"));
    const { valid, reason } = hookRenderResult.result.current;

    expect(valid).toBe(false);
    expect(reason).toBe("SIN must contain only digits");
  });

  it("should return valid as false and reason as 'Invalid SIN' if the sin checksum check fails", () => {
    const hookRenderResult = renderHook(() => useSinValidator("123456789"));
    const { valid, reason } = hookRenderResult.result.current;

    expect(valid).toBe(false);
    expect(reason).toBe("Invalid SIN");
  });

  it("should return valid as true and reason as '' if the sin is valid", () => {
    const hookRenderResult = renderHook(() => useSinValidator("046454286"));
    const { valid, reason } = hookRenderResult.result.current;

    expect(valid).toBe(true);
    expect(reason).toBe("");
  });

  it("should re-evaluate the result if the sin is changed", () => {
    const hookRenderResult = renderHook(({ sin }) => useSinValidator(sin), {
      initialProps: { sin: "123456789" },
    });
    const { valid: valid1, reason: reason1 } = hookRenderResult.result.current;

    hookRenderResult.rerender({ sin: "046454286" });
    const { valid: valid2, reason: reason2 } = hookRenderResult.result.current;

    expect(valid1).toBe(false);
    expect(reason1).toBe("Invalid SIN");
    expect(valid2).toBe(true);
    expect(reason2).toBe("");
  });
});
