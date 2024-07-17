"use client";
import styles from "./page.module.scss";
import agent from "@/libs/agent";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isPending } = useQuery({
    queryKey: ["movie-list"],
    queryFn: async () =>
      agent.Movie.list(1, {
        type: "movie",
        s: "marvel",
        r: "json",
      }),
  });
  console.log(data);

  if (isPending) {
    return (
      <main className={styles.main_container_loading}>
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className={styles.main_container}>
      <div>
        {data?.Search.map((movie) => <p key={movie.imdbID}>{movie.Title}</p>)}
      </div>
    </main>
  );
}
