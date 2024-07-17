"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import agent from "@/libs/agent";

export default function Home() {
  // const [movies, setMovies] = useState<any>([]);
  // useEffect(() => {
  //   agent.Movie.list({
  //     page: 1,
  //     type: "movie",
  //     s: "marvel",
  //   })
  //     .then((movies) => setMovies(movies))
  //     .catch((err) => console.log(err));
  // }, []);
  // console.log(movies);
  return (
    <main className={styles.main_container}>
      <div>TEST</div>
    </main>
  );
}
