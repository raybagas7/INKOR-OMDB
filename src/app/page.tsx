"use client";
import MoviesList from "@/components/MovieList/MoviesList";
import styles from "./page.module.scss";
import { Virtuoso } from "react-virtuoso";
import Metadata from "@/libs/Metadata";

export default function Home() {
  const MovieCategories: SearchOptionalParameter[] = [
    {
      search: "Marvel",
      type: "movie",
    },
    {
      search: "Marvel",
      type: "series",
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
    {
      search: "The Boys",
      type: "series",
    },
    {
      search: "Girl",
      type: "series",
    },
  ];
  return (
    <>
      <Metadata seoTitle="Home" />
      <main className={styles.main_home_container}>
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
