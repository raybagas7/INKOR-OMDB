"use client";
import { useAnimationControls, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import TopNavigation from "../TopNavigation/TopNavigation";
import styles from "./MobileSideBar.module.scss";
import ListNavigation from "../ListNavigation/ListNavigation";
import { RiListOrdered } from "react-icons/ri";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const MobileSideBar = ({ children }: Props) => {
  const [asideHide, setAsideHide] = useState<boolean | undefined>();
  const [activePage, setActivePage] = useState<string>();
  const pathName = usePathname();
  console.log(pathName);
  console.log(pathName === "/");

  const containerVariants = {
    close: {
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
    open: {
      opacity: 1,
      display: "block",
    },
  };

  const sideBar = {
    close: {
      x: "-300%",
    },
    open: {
      x: "0%",
    },
  };

  const containerAnimationControls = useAnimationControls();

  useEffect(() => {
    if (asideHide) {
      containerAnimationControls.start("open");
    } else {
      containerAnimationControls.start("close");
    }

    if (pathName === "/") setActivePage("home");
    if (pathName === "/movies") setActivePage("movie");
    if (pathName === "/series") setActivePage("series");
  }, [asideHide, pathName]);

  const toggleAside = () => {
    setAsideHide((prev) => !prev);
  };

  console.log(activePage);

  return (
    <>
      <TopNavigation toggleAside={toggleAside}>{children}</TopNavigation>
      <motion.div
        variants={containerVariants}
        animate={containerAnimationControls}
        initial="close"
        onClick={toggleAside}
        className={styles.backdrop_container}
      >
        <motion.div
          variants={sideBar}
          transition={{ type: "just" }}
          animate={containerAnimationControls}
          initial="close"
          onClick={(e) => e.stopPropagation()}
          className={styles.mobile_sidebar_container}
        >
          <nav className={styles.navigation}>
            <ul>
              <ListNavigation
                name="Home"
                to="/"
                onClick={() => setAsideHide(false)}
                icon={<RiListOrdered />}
                isActive={activePage === "home"}
              />
              <ListNavigation
                name="Movies"
                to="/movies"
                onClick={() => setAsideHide(false)}
                icon={<RiListOrdered />}
                isActive={activePage === "movie"}
              />
              <ListNavigation
                name="Series"
                to="/series"
                onClick={() => setAsideHide(false)}
                icon={<RiListOrdered />}
                isActive={activePage === "series"}
              />
            </ul>
          </nav>
        </motion.div>
      </motion.div>
    </>
  );
};

export default MobileSideBar;
