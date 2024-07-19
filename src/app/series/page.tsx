"use client";
import MoviesList from "@/components/MovieList/MoviesList";
import styles from "./page.module.scss";
import { Virtuoso } from "react-virtuoso";
import Metadata from "@/libs/Metadata";

export default function Movies() {
  const MovieCategories: SearchOptionalParameter[] = [
    {
      search: "Thriller",
      type: "series",
    },
    {
      search: "Comedy",
      type: "series",
    },
    {
      search: "Romance",
      type: "series",
    },
    {
      search: "Sport",
      type: "series",
    },
    {
      search: "Action",
      type: "series",
    },
    {
      search: "Marvel",
      type: "series",
    },
    {
      search: "Batman",
      type: "series",
    },
    {
      search: "James Bond",
      type: "series",
    },
    {
      search: "Cartoon",
      type: "series",
    },
    {
      search: "Fight",
      type: "series",
    },
    {
      search: "Spongebob",
      type: "series",
    },
  ];
  return (
    <>
      <Metadata seoTitle="Series" />
      <main className={styles.main_home_container}>
        <div className={styles.title_page_box}>
          <h1>Series List!</h1>
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
    </>
  );
}
