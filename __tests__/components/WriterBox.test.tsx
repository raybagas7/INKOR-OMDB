import WriterBox from "@/components/MovieCrew/WriterBox";
import { render, screen } from "@testing-library/react";

describe("WriterBox Component", () => {
  it("it should render all writer list", () => {
    render(<WriterBox writerList={["Anna Bode", "Ryan Fleck"]} />);

    const title = screen.getByRole("heading", {
      level: 3,
      name: /writer/i,
    });
    const anna = screen.getByText("Anna Bode");
    const ryan = screen.getByText("Ryan Fleck");

    expect(title).toBeInTheDocument();
    expect(anna).toBeInTheDocument();
    expect(ryan).toBeInTheDocument();
  });
});
