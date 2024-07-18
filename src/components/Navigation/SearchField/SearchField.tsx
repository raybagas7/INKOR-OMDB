"use client";
import Input from "@/components/ui/Input/Input";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import styles from "./SearchField.module.scss";
import { useRouter } from "next/navigation";
import { usePopup } from "@/store/usePopUp";

const SearchField = () => {
  const { hidePopup } = usePopup();
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
    hidePopup();
  };
  return (
    <form
      onSubmit={handleSubmitSearch}
      className={styles.search_form_container}
    >
      <Input
        onChange={handleChangeSearch}
        value={search}
        placeholder="Search By Title"
        type="search"
        icon={<BiSearch />}
      />
    </form>
  );
};

export default SearchField;
