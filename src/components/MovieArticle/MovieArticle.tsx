import React from "react";
import styles from "./MovieArticle.module.scss";
import MovieDescription from "../MovieDescription/MovieDescription";
import MovieRating from "../MovieRating/MovieRating";

interface Props {
  movieDetail: MovieDetail;
}

const MovieArticle = ({ movieDetail }: Props) => {
  console.log(movieDetail);

  return (
    <article className={styles.movie_article_container}>
      <MovieDescription
        title={movieDetail.Title}
        plot={movieDetail.Plot}
        poster={movieDetail.Poster}
        genre={movieDetail.Genre}
      />
      <MovieRating ratings={movieDetail.Ratings} />
    </article>
  );
};

export default MovieArticle;
