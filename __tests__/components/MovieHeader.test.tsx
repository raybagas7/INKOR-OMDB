import MovieHeader from "@/components/MovieHeader/MovieHeader";
import { render, screen } from "@testing-library/react";

describe("MovieHeader Component", () => {
  it("it should render with all props correctly", () => {
    render(
      <MovieHeader
        title="Captain Marvel"
        rated="PG-13"
        released="08 Mar 2019"
        runtime="123 min"
      />,
    );

    const title = screen.getByRole("heading", {
      level: 1,
      name: /captain marvel/i,
    });
    const rated = screen.getByText("PG-13");
    const released = screen.getByText("Release date: 08 Mar 2019");
    const runtime = screen.getByText("123 min");

    expect(title).toBeInTheDocument();
    expect(rated).toBeInTheDocument();
    expect(released).toBeInTheDocument();
    expect(runtime).toBeInTheDocument();
  });
});
