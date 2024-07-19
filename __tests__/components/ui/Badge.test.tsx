import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Badge from "@/components/ui/Badge/Badge";

describe("Badge Component", () => {
  it("should render with children", () => {
    render(<Badge>Test Badge</Badge>);

    const badge = screen.getByText("Test Badge");
    expect(badge).toBeInTheDocument();
  });

  it("should render with multiple children", () => {
    render(
      <Badge>
        <span>Part 1</span>
        <span>Part 2</span>
      </Badge>,
    );

    const part1 = screen.getByText("Part 1");
    const part2 = screen.getByText("Part 2");

    expect(part1).toBeInTheDocument();
    expect(part2).toBeInTheDocument();
  });

  it("should apply the badge_box class", () => {
    render(<Badge>Styled Badge</Badge>);

    const badge = screen.getByText("Styled Badge");
    expect(badge).toHaveClass("badge_box");
  });
});
