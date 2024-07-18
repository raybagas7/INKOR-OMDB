interface SearchMovies {
  Search: Movies[];
}

interface Movies {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface SearchOptionalParameter {
  search?: string;
  type?: "movie" | "series" | "episode";
}
