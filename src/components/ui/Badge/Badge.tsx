import React, { ReactNode } from "react";
import style from "./Badge.module.scss";

interface Props {
  children: ReactNode;
}

const Badge = ({ children }: Props) => {
  return <div className={style.badge_box}>{children}</div>;
};

export default Badge;
