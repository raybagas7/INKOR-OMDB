import React from "react";
import styles from "./MovieDescription.module.scss";
import Image from "next/image";
import Bagde from "../ui/Badge/Badge";

interface Props {
  movieDetail: MovieDetail;
}

const MovieDescription = ({ movieDetail }: Props) => {
  console.log(movieDetail);
  const genres = movieDetail.Genre.split(",");

  return (
    <section className={styles.movie_description_section}>
      <div className={styles.movie_poster_box}>
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
      </div>
    </section>
  );
};

export default MovieDescription;
