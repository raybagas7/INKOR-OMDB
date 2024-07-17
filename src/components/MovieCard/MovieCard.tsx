import React from "react";
import style from "./MovieCard.module.scss";
import Image from "next/image";

const MovieCard = ({ Title, Year, imdbID, Type, Poster }: Movies) => {
  console.log(Year, imdbID, Type);

  return (
    <div className={style.movie_card}>
      <Image
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        alt={Title}
        src={Poster}
        height={300}
        width={200}
        priority
      />
    </div>
  );
};

export default MovieCard;
