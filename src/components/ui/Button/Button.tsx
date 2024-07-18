import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "base" | "large";
  variant?: "primary" | "secondary" | "destructive" | "outline";
}

const Button = ({ children, variant, size, type }: Props) => {
  console.log(children, variant, size, type);

  return <div>Button</div>;
};

export default Button;
