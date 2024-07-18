"use client";
import Input from "@/components/ui/Input/Input";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import styles from "./SearchField.module.scss";
import { useRouter } from "next/navigation";
import { usePopup } from "@/store/usePopUp";
import classNames from "classnames";

type movieType = "movie" | "episode" | "series";

const SearchField = () => {
  const { hidePopup } = usePopup();
  const [search, setSearch] = useState("");
  const [type, setType] = useState<movieType>("movie");
  const router = useRouter();

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value as movieType);
  };

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/search/${type}/${search}`);
    hidePopup();
  };

  const movieStyle = classNames({
    [styles.radio_muted]: type !== "movie",
    [styles.radio_active]: type === "movie",
  });
  const episodeStyle = classNames({
    [styles.radio_muted]: type !== "episode",
    [styles.radio_active]: type === "episode",
  });
  const seriesStyle = classNames({
    [styles.radio_muted]: type !== "series",
    [styles.radio_active]: type === "series",
  });

  return (
    <form
      onSubmit={handleSubmitSearch}
      className={styles.search_form_container}
    >
      <div className={styles.radio_group_type}>
        <label className={movieStyle}>
          <p>Movie</p>
          <input
            type="radio"
            value="movie"
            checked={type === "movie"}
            onChange={handleTypeChange}
          />
        </label>
        <label className={seriesStyle}>
          <p>Series</p>
          <input
            type="radio"
            value="series"
            checked={type === "series"}
            onChange={handleTypeChange}
          />
        </label>
        <label className={episodeStyle}>
          <p>Episode</p>
          <input
            type="radio"
            value="episode"
            checked={type === "episode"}
            onChange={handleTypeChange}
          />
        </label>
      </div>
      <Input
        onChange={handleChangeSearch}
        value={search}
        placeholder={`Search ${type} by title`}
        type="search"
        icon={<BiSearch />}
      />
    </form>
  );
};

export default SearchField;
