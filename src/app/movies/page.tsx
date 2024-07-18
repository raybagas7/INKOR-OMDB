"use client";
import MoviesList from "@/components/MovieList/MoviesList";
import styles from "./page.module.scss";
import { Virtuoso } from "react-virtuoso";

export default function Movies() {
  const MovieCategories: SearchOptionalParameter[] = [
    {
      search: "Thriller",
      type: "movie",
    },
    {
      search: "Comedy",
      type: "movie",
    },
    {
      search: "Romance",
      type: "movie",
    },
    {
      search: "Sport",
      type: "movie",
    },
    {
      search: "Action",
      type: "movie",
    },
    {
      search: "Marvel",
      type: "movie",
    },
    {
      search: "Batman",
      type: "movie",
    },
    {
      search: "James Bond",
      type: "movie",
    },
    {
      search: "Cartoon",
      type: "movie",
    },
    {
      search: "Fight",
      type: "movie",
    },
    {
      search: "Spongebob",
      type: "movie",
    },
  ];
  return (
    <main className={styles.main_home_container}>
      <div className={styles.title_page_box}>
        <h1>Movies List!</h1>
      </div>
      <Virtuoso
        data={MovieCategories}
        itemContent={(index, category) => {
          return (
            <MoviesList
              key={`${index}-${category.search}-${category.type}`}
              search={category.search}
              type={category.type}
            />
          );
        }}
        useWindowScroll
      />
    </main>
  );
}
