import React from "react";
import style from "./MovieCard.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { LiaImdb } from "react-icons/lia";

const MovieCard = ({ Title, Year, imdbID, Type, Poster }: Movies) => {
  console.log(Year, imdbID, Type);

  return (
    <motion.div
      className={style.movie_card_container}
      whileTap={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div className={style.movie_card}>
        <Image
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          alt={Title}
          src={Poster}
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
        <div className={style.movie_information_box}>
          <div>
            <h5>{Title}</h5>
            <div className={style.movie_sub_information}>
              <p>{Year}</p>
              <p>{Type}</p>
            </div>
          </div>
          <div className={style.movie_imdb}>
            <LiaImdb style={{ fontSize: "24px" }} />
            <p>{imdbID}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MovieCard;
