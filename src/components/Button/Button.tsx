import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="bg-red-300">{props.label}</button>;
};

export default Button;