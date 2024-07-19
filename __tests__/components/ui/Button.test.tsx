import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "@/components/ui/Button/Button";

describe("Button Component", () => {
  it("should render with default props", () => {
    render(<Button>Default Button</Button>);

    const button = screen.getByRole("button", { name: "Default Button" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("button_primary");
    expect(button).toHaveClass("text_white");
    expect(button).toHaveClass("button_base");
    expect(button).toHaveAttribute("type", "button");
  });

  it("should render with primary variant and large size", () => {
    render(
      <Button variant="primary" size="large">
        Primary Large Button
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Primary Large Button" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("button_primary");
    expect(button).toHaveClass("text_white");
    expect(button).toHaveClass("button_lg");
  });

  it("should render with secondary variant and small size", () => {
    render(
      <Button variant="secondary" size="small">
        Secondary Small Button
      </Button>,
    );

    const button = screen.getByRole("button", {
      name: "Secondary Small Button",
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("button_secondary");
    expect(button).toHaveClass("text_black");
    expect(button).toHaveClass("button_sm");
  });

  it("should render with destructive variant", () => {
    render(<Button variant="destructive">Destructive Button</Button>);

    const button = screen.getByRole("button", { name: "Destructive Button" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("button_error");
    expect(button).toHaveClass("text_white");
    expect(button).toHaveClass("button_base");
  });

  it("should render with outline variant", () => {
    render(<Button variant="outline">Outline Button</Button>);

    const button = screen.getByRole("button", { name: "Outline Button" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("button_outline");
    expect(button).toHaveClass("text_primary");
    expect(button).toHaveClass("button_base");
  });

  it("should accept and apply custom props", () => {
    render(
      <Button aria-label="custom-button" data-testid="custom-button">
        Custom Button
      </Button>,
    );

    const button = screen.getByTestId("custom-button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-label", "custom-button");
  });
});
