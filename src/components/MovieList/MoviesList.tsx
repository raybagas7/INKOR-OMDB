"use client";
import agent from "@/libs/agent";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import styles from "./MovieList.module.scss";
import MovieCard from "../MovieCard/MovieCard";
import MovieCardSkeleton from "../MovieCard/MovieCardSkeleton";

const MoviesList = ({
  search = "Marvel",
  type = "movie",
}: SearchOptionalParameter) => {
  const skeletonCards = new Array(7).fill(null);
  const { data: movies, isLoading } = useQuery({
    queryKey: ["movie-list", search, type],
    queryFn: async () =>
      agent.Movie.list(1, {
        s: search,
        type: type,
        r: "json",
      }),
  });

  if (isLoading) {
    return (
      <div>
        <div className={styles.list_title}>{search} Movie</div>
        <div className={styles.movie_list_container}>
          {skeletonCards.map((_, index) => (
            <MovieCardSkeleton key={`${search}-${index}`} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.list_title}>
        <p>
          <span className={styles.search_title}>{search}</span>
          {" - "}
          <span className={styles.type}>{type}</span>
        </p>
      </div>
      <div className={styles.movie_list_container}>
        {movies?.Search.map((movie) => (
          <MovieCard key={movie.imdbID} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
