interface ApiSearchParam {
  s: string;
  type?: "movie" | "series" | "episode";
  y?: string;
  r: "json" | "xml";
  page?: number;
}
