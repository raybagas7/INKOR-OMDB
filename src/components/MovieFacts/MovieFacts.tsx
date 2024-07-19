import React from "react";
import styles from "./MovieFacts.module.scss";
import { FaAward } from "react-icons/fa6";
import Badge from "../ui/Badge/Badge";
import { FcDvdLogo } from "react-icons/fc";
import { GrInProgress } from "react-icons/gr";
import { FaGlobe } from "react-icons/fa";
import Link from "next/link";

interface Props {
  language: string;
  country: string;
  awards: string;
  metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  type: string;
  dvd: string;
  boxOffice: string;
  production: string;
  website: string;
  totalSeasons?: string;
}

const MovieFacts = ({
  language,
  country,
  awards,
  metascore,
  imdbRating,
  imdbVotes,
  imdbID,
  type,
  dvd,
  boxOffice,
  production,
  website,
  totalSeasons,
}: Props) => {
  return (
    <section className={styles.movie_facts_container}>
      <div>
        <div className={styles.section_title}>
          <h3>Movie Facts</h3>
        </div>
        <div className={styles.facts_box}>
          <div className={styles.award_box}>
            <Badge>
              <FaAward style={{ color: "#000000" }} />
              <p>Award</p>
            </Badge>
            <p>{awards}</p>
          </div>
          <p>Language: {language}</p>
          <p>Country: {country}</p>
          <p style={{ textTransform: "capitalize" }}>Type: {type}</p>
          {totalSeasons && <p>Total Seasons: {totalSeasons}</p>}
        </div>
      </div>
      <div>
        <div className={styles.movie_score}>
          <h2>Scores</h2>
        </div>
        <div className={styles.score_box}>
          <p>Meta Score: {metascore}</p>
          <p>imdb Rating: {imdbRating}</p>
          <p>imdb Votes: {imdbVotes} Votes</p>
          <p>imdb ID: {imdbID}</p>
          <p>Box Office: {boxOffice}</p>
        </div>
      </div>
      <div>
        <div className={styles.movie_media}>
          <h2>Media</h2>
        </div>
        <div className={styles.media_box}>
          <div className={styles.media_icon_box}>
            <FaGlobe className={styles.icon} />
            {website === "N/A" || !website ? (
              <p>N/A</p>
            ) : (
              <Link href={website}>{website}</Link>
            )}
          </div>
          <div className={styles.media_icon_box}>
            <FcDvdLogo className={styles.icon} />
            {dvd === "N/A" || !dvd ? <p>N/A</p> : <p>{dvd}</p>}
          </div>
          <div className={styles.media_icon_box}>
            <GrInProgress className={styles.icon} />
            {production === "N/A" || !production ? (
              <p>N/A</p>
            ) : (
              <p>{production}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieFacts;
