import MoviesList from "@/components/MovieList/MoviesList";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main_container}>
      <MoviesList />
      <MoviesList movieSearch="Batman" />
      <MoviesList movieSearch="James Bond" />
      <MoviesList movieSearch="Cartoon" />
    </main>
  );
}
