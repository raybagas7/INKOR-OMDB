import React from "react";
import Badge from "../ui/Badge/Badge";
import styles from "./MovieHeader.module.scss";

interface Props {
  title: string;
  rated: string;
  released: string;
  runtime: string;
}

const MovieHeader = ({ title, rated, released, runtime }: Props) => {
  return (
    <section className={styles.movie_header_container}>
      <h1>{title}</h1>
      <div className={styles.sub_header}>
        <p>Release date: {released}</p>
        <div className={styles.rated_runtime}>
          <p>{runtime}</p>
          <Badge>
            <p>{rated}</p>
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default MovieHeader;
