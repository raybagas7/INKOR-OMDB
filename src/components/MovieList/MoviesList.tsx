"use client";
import agent from "@/libs/agent";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import styles from "./MovieList.module.scss";
import MovieCard from "../MovieCard/MovieCard";
import MovieCardSkeleton from "../MovieCard/MovieCardSkeleton";

interface Props {
  movieSearch?: string;
}

const MoviesList = ({ movieSearch = "Marvel" }: Props) => {
  const skeletonCards = new Array(7).fill(null);
  const { data: movies, isLoading } = useQuery({
    queryKey: ["movie-list", movieSearch],
    queryFn: async () =>
      agent.Movie.list(1, {
        type: "movie",
        s: movieSearch,
        r: "json",
      }),
  });

  if (isLoading) {
    return (
      <div>
        <div className={styles.list_title}>{movieSearch} Movie</div>
        <div className={styles.movie_list_container}>
          {skeletonCards.map((_, index) => (
            <MovieCardSkeleton key={`${movieSearch}-${index}`} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.list_title}>{movieSearch} Movie</div>
      <div className={styles.movie_list_container}>
        {movies?.Search.map((movie) => (
          <MovieCard key={movie.imdbID} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
