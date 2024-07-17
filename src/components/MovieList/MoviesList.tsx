"use client";
import agent from "@/libs/agent";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import styles from "./MovieList.module.scss";
import MovieCard from "../MovieCard/MovieCard";

const MoviesList = () => {
  const { data: movies, isPending } = useQuery({
    queryKey: ["movie-list"],
    queryFn: async () =>
      agent.Movie.list(1, {
        type: "movie",
        s: "marvel",
        r: "json",
      }),
  });
  console.log(movies);

  if (isPending) {
    return (
      <main>
        <p>Loading...</p>
      </main>
    );
  }
  return (
    <div>
      <div className={styles.list_title}>Marvel Movie</div>
      <div className={styles.movie_list_container}>
        {movies?.Search.map((movie) => (
          <MovieCard key={movie.imdbID} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
