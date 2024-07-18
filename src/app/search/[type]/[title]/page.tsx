import React from "react";
import styles from "./page.module.scss";
import { Metadata } from "next";
import SearchedMovie from "@/components/SearchedMovie/SearchedMovie";

type MetadataProps = {
  params: { type: string; title: string };
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  return {
    title: `${params.title} - ${params.type}`,
  };
}

const SearchPage = ({
  params,
}: {
  params: { type: "movie" | "episode" | "series"; title: string };
}) => {
  return (
    <main className={styles.main_container}>
      <SearchedMovie title={params.title} type={params.type} />
    </main>
  );
};

export default SearchPage;
