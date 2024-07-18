import React from "react";
import style from "./MovieSearchCard.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { LiaImdb } from "react-icons/lia";
import Badge from "../ui/Badge/Badge";
import Link from "next/link";

const MovieSearchCard = ({ Title, Year, imdbID, Type, Poster }: Movies) => {
  return (
    <motion.div
      className={style.movie_card_container}
      whileTap={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div className={style.movie_card}>
        <div className={style.short_box}>
          <div className={style.title}>
            <h5>{Title}</h5>
          </div>
        </div>
        <Image
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          alt={Title}
          src={
            Poster === "N/A"
              ? "https://m.media-amazon.com/images/M/MV5BYTY2ZjYyNGUtZGVkZS00MDNhLWIwMjMtZDk4MmQ5ZWI0NTY4XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_SX300.jpg"
              : Poster
          }
          height={300}
          width={200}
          priority
        />
      </motion.div>
      <motion.div
        className={style.movie_information_container}
        whileHover={{ width: "auto", opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Link href={`/title/${imdbID}`} className={style.movie_information_box}>
          <div>
            <h5>{Title}</h5>
            <div className={style.movie_sub_information}>
              <p>{Type}</p>
              <Badge>{Year}</Badge>
            </div>
          </div>
          <div className={style.movie_imdb}>
            <LiaImdb style={{ fontSize: "24px" }} />
            <p>{imdbID}</p>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default MovieSearchCard;
