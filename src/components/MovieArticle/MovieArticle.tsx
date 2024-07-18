import React from "react";
import styles from "./MovieArticle.module.scss";
import MovieDescription from "../MovieDescription/MovieDescription";
import MovieRating from "../MovieRating/MovieRating";
import MovieHeader from "../MovieHeader/MovieHeader";
import MovieCrew from "../MovieCrew/MovieCrew";
import MovieFacts from "../MovieFacts/MovieFacts";

interface Props {
  movieDetail: MovieDetail;
}

const MovieArticle = ({ movieDetail }: Props) => {
  console.log(movieDetail);

  return (
    <article className={styles.movie_article_container}>
      <MovieHeader
        title={movieDetail.Title}
        runtime={movieDetail.Runtime}
        rated={movieDetail.Rated}
        released={movieDetail.Released}
      />
      <MovieDescription
        title={movieDetail.Title}
        plot={movieDetail.Plot}
        poster={movieDetail.Poster}
        genre={movieDetail.Genre}
      />
      <MovieRating ratings={movieDetail.Ratings} />
      <MovieCrew
        director={movieDetail.Director}
        writer={movieDetail.Writer}
        actors={movieDetail.Actors}
      />
      <MovieFacts
        language={movieDetail.Language}
        country={movieDetail.Country}
        awards={movieDetail.Awards}
        metascore={movieDetail.Metascore}
        imdbRating={movieDetail.imdbRating}
        imdbVotes={movieDetail.imdbVotes}
        imdbID={movieDetail.imdbID}
        type={movieDetail.Type}
        dvd={movieDetail.DVD}
        boxOffice={movieDetail.BoxOffice}
        production={movieDetail.Production}
        website={movieDetail.Website}
      />
    </article>
  );
};

export default MovieArticle;
