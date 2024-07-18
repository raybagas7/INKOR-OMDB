import classNames from "classnames";
import React from "react";
import style from "./ListNavigation.module.scss";
import Link from "next/link";

export interface Props {
  name: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  to: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const ListNavigation = ({ name, icon, isActive, to, onClick }: Props) => {
  const linkContainerClasses = classNames(style.linkContainer, {
    [style.unactiveList]: !isActive,
    [style.activeList]: isActive,
  });
  return (
    <li className={style.linkContainer}>
      {isActive && <div className={style.active_mark}></div>}
      <Link
        onClick={onClick && onClick}
        className={linkContainerClasses}
        href={to}
      >
        {icon}
        <p>{name}</p>
      </Link>
    </li>
  );
};

export default ListNavigation;
