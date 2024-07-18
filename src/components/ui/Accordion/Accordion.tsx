"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiArrowRightSLine } from "react-icons/ri";
import styles from "./Accordion.module.scss";

interface Props {
  title: React.ReactNode;
  itemContent: React.ReactNode;
  initialOpen?: boolean;
}

const Accordion = ({ title, itemContent, initialOpen = false }: Props) => {
  const [hideDetail, setHideDetail] = useState<boolean | undefined>(
    initialOpen,
  );

  const toggleDetail = () => {
    setHideDetail((prev) => (prev === undefined ? false : !prev));
  };

  const detailVariants = {
    close: {
      opacity: 0,
      height: 0,
      marginTop: 0,
    },
    open: {
      opacity: 1,
      height: "auto",
      paddingBottom: 8,
    },
  };

  return (
    <div className={styles.accordion_box}>
      <button onClick={toggleDetail} className={styles.collapse_button}>
        <div className={styles.title}>{title}</div>
        <motion.div animate={{ rotate: hideDetail ? 90 : 0 }}>
          <RiArrowRightSLine className={styles.icon} />
        </motion.div>
      </button>
      <motion.div
        variants={detailVariants}
        initial="close"
        animate={hideDetail ? "open" : "close"}
      >
        {itemContent}
      </motion.div>
    </div>
  );
};

export default Accordion;
