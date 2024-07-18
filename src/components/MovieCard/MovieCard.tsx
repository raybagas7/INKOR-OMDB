import React from "react";
import style from "./MovieCard.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { LiaImdb } from "react-icons/lia";
import Badge from "../ui/Badge/Badge";
import Link from "next/link";

const MovieCard = ({ Title, Year, imdbID, Type, Poster }: Movies) => {
  return (
    <motion.div
      className={style.movie_card_container}
      whileTap={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
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
              <p>{Type}</p>
              <Badge>{Year}</Badge>
            </div>
          </div>
          <Link href={`/title/${imdbID}`}>Link</Link>
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
