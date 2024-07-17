import React from "react";
import styles from "./TopNavigation.module.scss";
import { IoPersonCircle } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";

const TopNavigation = () => {
  return (
    <div className={styles.top_nav_container}>
      <GiHamburgerMenu className={styles.icon} />
      <div>Inkor Movie</div>
      <div className={styles.right_box}>
        <BiSearch className={styles.icon} />
        <IoPersonCircle className={styles.icon} />
      </div>
    </div>
  );
};

export default TopNavigation;
