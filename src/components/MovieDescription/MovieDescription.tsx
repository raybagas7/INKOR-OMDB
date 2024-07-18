import Image from "next/image";
import React from "react";
import styles from "./MovieDescription.module.scss";
import Bagde from "../ui/Badge/Badge";

interface Props {
  Title: string;
  Poster: string;
  Genre: string;
  Plot: string;
}

const MovieDescription = ({ Title, Poster, Genre, Plot }: Props) => {
  const genres = Genre.split(",");

  return (
    <section className={styles.movie_article_container}>
      <div className={styles.movie_poster_box}>
        <Image
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          alt={Title}
          src={Poster}
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
          <p>{Plot}</p>
        </div>
      </div>
    </section>
  );
};

export default MovieDescription;
