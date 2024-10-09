import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import InputError from "@/components/input-error";
import { describe, expect, it } from "@jest/globals";

describe("<InputError />", () => {
  it("should render the error message", () => {
    render(<InputError error="This is an error" />);

    const errorElement = screen.getByText("This is an error");

    expect(errorElement).toBeInTheDocument();
  });
});
