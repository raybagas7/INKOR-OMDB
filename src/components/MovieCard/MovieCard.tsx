import React from "react";
import style from "./MovieCard.module.scss";
import Image from "next/image";

const MovieCard = ({ Title, Year, imdbID, Type, Poster }: Movies) => {
  console.log(Year, imdbID, Type);

  return (
    <div className={style.movie_card}>
      <Image
        style={{ objectFit: "cover" }}
        alt={Title}
        src={Poster}
        height={189}
        width={128}
      />
    </div>
  );
};

export default MovieCard;
