"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import agent from "@/libs/agent";

export default function Home() {
  const [movies, setMovies] = useState<SearchMovies>();
  useEffect(() => {
    agent.Movie.list({
      page: 1,
      type: "movie",
      s: "marvel",
    })
      .then((movies) => setMovies(movies))
      .catch((err) => console.log(err));
  }, []);
  console.log(movies?.Search);

  if (!movies) {
    return null;
  }
  return (
    <main className={styles.main_container}>
      <div>
        {movies.Search.map((movie) => (
          <p key={movie.imdbID}>{movie.Title}</p>
        ))}
      </div>
    </main>
  );
}
