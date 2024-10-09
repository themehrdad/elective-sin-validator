import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import SinValidator from "@/components/sin-validator";

describe("<SinValidator />", () => {
  it("renders the label", () => {
    render(<SinValidator label="sin-validator" />);
    const label = screen.getByText("sin-validator");
    expect(label).toBeInTheDocument();
  });

  it("renders an empty textbox by default", () => {
    render(<SinValidator label="sin-validator" />);
    const textbox = screen.getByRole("textbox");
    expect(textbox).toHaveValue("");
  });

  it("renders the textbox with the default placeholder", () => {
    render(<SinValidator label="sin-validator" />);
    const textbox = screen.getByRole("textbox");
    expect(textbox).toHaveAttribute("placeholder", "Enter SIN");
  });

  it("renders a gray question mark icon by default", () => {
    render(<SinValidator label="sin-validator" />);
    const icon = screen.getByTestId("question");
    expect(icon).toHaveClass("text-gray-500");
  });

  it("should not show any error messages by default", () => {
    render(<SinValidator label="sin-validator" />);
    const error = screen.queryByTestId("error");
    expect(error).not.toBeInTheDocument();
  });

  it("should show an error message when a wrong SIN is entered into the textbox", () => {
    render(<SinValidator label="sin-validator" />);
    const textbox = screen.getByRole("textbox");

    fireEvent.change(textbox, { target: { value: "123456789" } });

    const icon = screen.getByTestId("alert");
    const error = screen.queryByTestId("error");
    expect(icon).toHaveClass("text-red-500");
    expect(error).toBeInTheDocument();
    const errorElement = screen.getByTestId("error");
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent("Invalid SIN");
  });

  it("should show a green checkmark icon when a valid SIN is entered into the textbox", () => {
    render(<SinValidator label="sin-validator" />);
    const textbox = screen.getByRole("textbox");

    fireEvent.change(textbox, { target: { value: "046454286" } });

    const icon = screen.getByTestId("checkmark");
    const error = screen.queryByTestId("error");
    expect(icon).toHaveClass("text-green-500");
    expect(error).not.toBeInTheDocument();
  });

  it("should show a red alert icon when a SIN number is entered with less than 9 digits", () => {
    render(<SinValidator label="sin-validator" />);
    const textbox = screen.getByRole("textbox");

    fireEvent.change(textbox, { target: { value: "12345678" } });

    const icon = screen.getByTestId("alert");
    const error = screen.queryByTestId("error");
    expect(icon).toHaveClass("text-red-500");
    expect(error).toBeInTheDocument();
    const errorElement = screen.getByTestId("error");
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent("SIN must be 9 digits long");
  });

  it("should show a red alert icon when a SIN number is entered and it contains non-numeric characters", () => {
    render(<SinValidator label="sin-validator" />);
    const textbox = screen.getByRole("textbox");

    fireEvent.change(textbox, { target: { value: "12345678a" } });

    const icon = screen.getByTestId("alert");
    const error = screen.queryByTestId("error");
    expect(icon).toHaveClass("text-red-500");
    expect(error).toBeInTheDocument();
    const errorElement = screen.getByTestId("error");
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent("SIN must contain only digits");
  });
});
