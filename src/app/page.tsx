import MoviesList from "@/components/MovieList/MoviesList";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main_container}>
      <MoviesList />
      {/* <div>
        {data?.Search.map((movie) => <p key={movie.imdbID}>{movie.Title}</p>)}
      </div> */}
    </main>
  );
}
