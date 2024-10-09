import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import StatusIcon from "@/components/status-icon";

describe("<StatusIcon />", () => {
  it("should show a green checkmark when valid", () => {
    render(<StatusIcon valid={true} unknown={false} />);

    const checkmark = screen.getByTestId("checkmark");

    expect(checkmark).toBeInTheDocument();
    expect(checkmark).toHaveClass("text-green-500");
  });

  it("should show a gray question mark when unknown", () => {
    render(<StatusIcon valid={false} unknown={true} />);

    const circle = screen.getByTestId("question");

    expect(circle).toBeInTheDocument();
    expect(circle).toHaveClass("text-gray-500");
  });

  it("should show a red alert when invalid", () => {
    render(<StatusIcon valid={false} unknown={false} />);

    const alert = screen.getByTestId("alert");

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("text-red-500");
  });
});
