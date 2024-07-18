"use client";
import { useMovieList } from "@/hooks/useMovieList";
import React from "react";
import { Virtuoso } from "react-virtuoso";
import styles from "./SearchedMovie.module.scss";
import MovieSearchCard from "../MovieSearcCard/MovieSearchCard";

interface Props {
  type: "movie" | "episode" | "series";
  title: string;
}

const SearchedMovie = ({ type, title }: Props) => {
  const {
    data: searchedMovies,
    isError,
    isPending,
    fetchNextPage,
  } = useMovieList(type, title, {
    s: title,
    type: type,
    r: "json",
    page: 1,
  });

  const handleLoadMore = () => {
    fetchNextPage();
  };

  if (isError) {
    return <p>Its error</p>;
  }

  return (
    <div>
      {isPending && !searchedMovies ? (
        <p>Loading</p>
      ) : (
        <div className={styles.searched_container}>
          {searchedMovies?.pages[0].data.length > 0 ? (
            <Virtuoso
              endReached={handleLoadMore}
              useWindowScroll
              data={searchedMovies.pages}
              itemContent={(pageIndex, movie) => {
                return (
                  <div
                    className={styles.title_box}
                    key={`${pageIndex}-${type}-${movie.currentPage}`}
                  >
                    {movie.data.map((movie) =>
                      movie.imdbID ? (
                        <MovieSearchCard key={movie.imdbID} {...movie} />
                      ) : (
                        <></>
                      ),
                    )}
                  </div>
                );
              }}
            />
          ) : (
            <p>Empty</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchedMovie;
