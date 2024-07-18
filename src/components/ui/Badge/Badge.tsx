import React, { ReactNode } from "react";
import style from "./Badge.module.scss";

interface Props {
  children: ReactNode;
}

const Bagde = ({ children }: Props) => {
  return <div className={style.badge_box}>{children}</div>;
};

export default Bagde;
