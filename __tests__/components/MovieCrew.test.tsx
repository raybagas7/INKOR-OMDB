import MovieCrew from "@/components/MovieCrew/MovieCrew";
import { render, screen } from "@testing-library/react";

describe("MovieCrew Component", () => {
  it("it should render all crews with multiple name", () => {
    render(
      <MovieCrew
        director="Anna Boden, Ryan Fleck"
        writer="Anna Boden, Ryan Fleck, Geneva Robertson-Dworet"
        actors="Brie Larson, Samuel L. Jackson, Ben Mendelsohn"
      />,
    );

    const anna = screen.getAllByText("Anna Boden");
    const ryan = screen.getAllByText("Ryan Fleck");

    expect(anna.length).toBe(2);
    expect(ryan.length).toBe(2);
  });

  it("it should render all crews with correctly", () => {
    render(
      <MovieCrew
        director="Anna Boden"
        writer="Geneva Robertson-Dworet"
        actors="Brie Larson, Samuel L. Jackson, Ben Mendelsohn"
      />,
    );

    const director = screen.getByText("Anna Boden");
    const writer = screen.getByText("Geneva Robertson-Dworet");
    const actors = screen.getByText("Samuel L. Jackson");

    expect(director).toBeInTheDocument();
    expect(writer).toBeInTheDocument();
    expect(actors).toBeInTheDocument();
  });
});
