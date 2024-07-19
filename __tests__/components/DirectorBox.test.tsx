import DirectorBox from "@/components/MovieCrew/DirectorBox";
import { render, screen } from "@testing-library/react";

describe("DirectorBox Component", () => {
  it("it should render all director list", () => {
    render(<DirectorBox directorList={["Anna Bode", "Ryan Fleck"]} />);

    const title = screen.getByRole("heading", {
      level: 3,
      name: /director/i,
    });
    const anna = screen.getByText("Anna Bode");
    const ryan = screen.getByText("Ryan Fleck");

    expect(title).toBeInTheDocument();
    expect(anna).toBeInTheDocument();
    expect(ryan).toBeInTheDocument();
  });
});
