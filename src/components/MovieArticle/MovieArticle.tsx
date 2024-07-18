import React from "react";
import styles from "./MovieArticle.module.scss";
import MovieDescription from "../MovieDescription/MovieDescription";

interface Props {
  movieDetail: MovieDetail;
}

const MovieArticle = ({ movieDetail }: Props) => {
  console.log(movieDetail);

  return (
    <article className={styles.movie_article_container}>
      <MovieDescription
        Title={movieDetail.Title}
        Plot={movieDetail.Plot}
        Poster={movieDetail.Poster}
        Genre={movieDetail.Genre}
      />
      {/* <div className={styles.movie_poster_box}>
        <Image
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          alt={movieDetail.Title}
          src={movieDetail.Poster}
          height={300}
          width={200}
          priority
        />
      </div>
      <div className={styles.movie_information}>
        <div className={styles.movie_genres}>
          {genres.map((genres) => (
            <Bagde key={genres}>
              <p>{genres}</p>
            </Bagde>
          ))}
        </div>
        <div className={styles.movie_plot_box}>
          <p>{movieDetail.Plot}</p>
        </div>
      </div> */}
    </article>
  );
};

export default MovieArticle;
