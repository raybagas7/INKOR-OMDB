import ActorBox from "@/components/MovieCrew/ActorBox";
import { render, screen } from "@testing-library/react";

describe("ActorBox Component", () => {
  it("it should render all director list", () => {
    render(<ActorBox actorList={["Anna Bode", "Ryan Fleck"]} />);

    const title = screen.getByRole("heading", {
      level: 3,
      name: /actor/i,
    });
    const anna = screen.getByText("Anna Bode");
    const ryan = screen.getByText("Ryan Fleck");

    expect(title).toBeInTheDocument();
    expect(anna).toBeInTheDocument();
    expect(ryan).toBeInTheDocument();
  });
});
