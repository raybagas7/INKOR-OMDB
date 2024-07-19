"use client";
import React, { ReactNode } from "react";
import styles from "./TopNavigation.module.scss";
import { IoPersonCircle } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";
import { usePopup } from "@/store/usePopUp";
import PopUp from "@/components/ui/PopUp/PopUp";
import SearchField from "../SearchField/SearchField";
import ListNavigation from "../ListNavigation/ListNavigation";

interface Props {
  children: ReactNode;
  toggleAside: () => void;
}

const TopNavigation = ({ children, toggleAside }: Props) => {
  const { showPopup } = usePopup();

  const onPopSearchBox = () => {
    showPopup(<SearchField />);
  };

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.top_nav_container}>
        <PopUp backDropClose />
        <GiHamburgerMenu
          onClick={toggleAside}
          className={styles.icon_hamburger}
        />
        <Link className={styles.web_name} href={"/"}>
          Inkor Movie
        </Link>
        <nav>
          <ul>
            <ListNavigation name="Home" to="/" />
            <ListNavigation name="Movie" to="/movies" />
            <ListNavigation name="Series" to="/series" />
          </ul>
        </nav>
        <div className={styles.right_box}>
          <button className={styles.search_button}>
            <BiSearch className={styles.icon} onClick={onPopSearchBox} />
          </button>
          <IoPersonCircle className={styles.icon} />
        </div>
      </div>
      {children}
    </QueryClientProvider>
  );
};

export default TopNavigation;
