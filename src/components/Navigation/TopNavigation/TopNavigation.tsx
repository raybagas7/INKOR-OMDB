"use client";
import React, { ReactNode } from "react";
import styles from "./TopNavigation.module.scss";
import { IoPersonCircle } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";

interface Props {
  children: ReactNode;
}

const TopNavigation = ({ children }: Props) => {
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
        <GiHamburgerMenu className={styles.icon} />
        <Link href={"/"}>Inkor Movie</Link>
        <div className={styles.right_box}>
          <BiSearch className={styles.icon} />
          <Link href={"/profile"}>
            <IoPersonCircle className={styles.icon} />
          </Link>
        </div>
      </div>
      {children}
    </QueryClientProvider>
  );
};

export default TopNavigation;
