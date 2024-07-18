import React from "react";
import { motion } from "framer-motion";
import styles from "./PopUp.module.scss";
import { usePopup } from "@/store/usePopUp";

interface Props {
  backDropClose?: boolean;
  component?: React.ReactNode;
}

const PopUp = ({ component, backDropClose }: Props) => {
  const { isShowPopup, content, hidePopup } = usePopup();

  if (!isShowPopup) {
    return null;
  }

  const clickOutSide = (e: any) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.3 }}
      onClick={backDropClose ? hidePopup : () => {}}
      className={styles.popup_backdrop}
    >
      <div onClick={(e) => clickOutSide(e)} className={styles.popup_content}>
        {component && component}
        {content}
      </div>
    </motion.div>
  );
};

export default PopUp;
