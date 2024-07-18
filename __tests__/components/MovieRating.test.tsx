import MovieRating from "@/components/MovieRating/MovieRating";
import { render, screen } from "@testing-library/react";

describe("MovieRating Component", () => {
  it("it should render all rating correctly", () => {
    render(
      <MovieRating
        ratings={[
          { Source: "Internet Movie Database", Value: "6.8/10" },
          { Source: "Rotten Tomatoes", Value: "79%" },
          { Source: "Metacritic", Value: "64/100" },
        ]}
      />,
    );

    const imdb = screen.getByText("6.8/10");
    const rotten = screen.getByText("79%");
    const meta = screen.getByText("64/100");

    expect(imdb).toBeInTheDocument();
    expect(rotten).toBeInTheDocument();
    expect(meta).toBeInTheDocument();
  });
});
