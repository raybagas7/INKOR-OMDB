import React from "react";
import { SiRottentomatoes, SiImdb, SiMetacritic } from "react-icons/si";
import { FaStar } from "react-icons/fa6";
import styles from "./MovieRating.module.scss";

interface Props {
  ratings: Rating[];
}

const MovieRating = ({ ratings }: Props) => {
  console.log(ratings);

  return (
    <div className={styles.ratings_container}>
      {ratings.map((rating) => {
        switch (rating.Source) {
          case "Internet Movie Database":
            return (
              <div className={styles.rating_box}>
                <SiImdb className={styles.icon} />
                <div className={styles.rating_value}>
                  <FaStar />
                  <p>{rating.Value}</p>
                </div>
              </div>
            );
          case "Rotten Tomatoes":
            return (
              <div className={styles.rating_box}>
                <SiRottentomatoes className={styles.icon} />
                <div className={styles.rating_value}>
                  <p>{rating.Value}</p>
                </div>
              </div>
            );
          case "Metacritic":
            return (
              <div className={styles.rating_box}>
                <SiMetacritic className={styles.icon} />
                <div className={styles.rating_value}>
                  <p>{rating.Value}</p>
                </div>
              </div>
            );
          default:
            return;
        }
      })}
    </div>
  );
};

export default MovieRating;
