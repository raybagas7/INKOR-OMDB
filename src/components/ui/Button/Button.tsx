import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "base" | "large";
  variant?: "primary" | "secondary" | "destructive" | "outline";
}

const Button = ({
  children,
  variant = "primary",
  size = "base",
  type = "button",
  ...props
}: Props) => {
  const variantClasses = {
    primary: [styles.button_primary, styles.text_white],
    secondary: [styles.button_secondary, styles.text_black],
    destructive: [styles.button_error, styles.text_white],
    outline: [styles.button_outline, styles.text_primary],
  };

  const sizeClasses = {
    small: [styles.button_sm],
    base: [styles.button_base],
    large: [styles.button_lg],
  };

  const buttonContainerClass = classNames(
    styles.button,
    variantClasses[`${variant}`],
    sizeClasses[`${size}`],
  );

  return (
    <button type={type} {...props} className={`${buttonContainerClass}`}>
      {children}
    </button>
  );
};

export default Button;
