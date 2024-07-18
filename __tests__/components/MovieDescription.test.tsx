import MovieDescription from "@/components/MovieDescription/MovieDescription";
import { render, screen } from "@testing-library/react";

describe("MovieDescription Component", () => {
  it("it should render all the props correctly", () => {
    render(
      <MovieDescription
        title="Captain Marvel"
        poster="https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
        genre="Action, Adventure, Sci-Fi"
        plot="After crashing an experimental aircraft"
      />,
    );

    const image = screen.getByAltText("Captain Marvel");
    const genre1 = screen.getByText("Action");
    const genre2 = screen.getByText("Adventure");
    const genre3 = screen.getByText("Sci-Fi");
    const plot = screen.getByText("After crashing an experimental aircraft");

    expect(image).toBeInTheDocument();
    expect(genre1).toBeInTheDocument();
    expect(genre2).toBeInTheDocument();
    expect(genre3).toBeInTheDocument();
    expect(plot).toBeInTheDocument();
  });
});
