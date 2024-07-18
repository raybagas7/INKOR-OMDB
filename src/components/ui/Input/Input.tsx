import React, { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  variant?: "base";
}
const Input: FC<InputProps> = ({
  icon,
  name,
  type,
  variant = "base",
  ...rest
}) => {
  const inputStyle = classNames({
    [styles.input_container_base]: variant === "base",
  });

  return (
    <div className={inputStyle}>
      {name && <label htmlFor={name}> {name}</label>}
      <input type={type} id={name} name={name} {...rest} />
      <div className={styles.icon}>{icon}</div>
    </div>
  );
};

export default Input;
