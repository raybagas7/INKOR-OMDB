import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from "@/components/ui/Input/Input";

describe("Input Component", () => {
  it("should render with default props", () => {
    render(<Input name="test-input" type="text" />);

    const input = screen.getByLabelText("test-input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  it("should render with an icon", () => {
    render(<Input name="test-input" type="text" icon={<span>icon</span>} />);

    const input = screen.getByLabelText("test-input");
    const icon = screen.getByText("icon");

    expect(input).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it("should accept and apply custom props", () => {
    render(
      <Input
        name="test-input"
        type="text"
        aria-label="custom-input"
        data-testid="custom-input"
      />,
    );

    const input = screen.getByTestId("custom-input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("aria-label", "custom-input");
  });
});
