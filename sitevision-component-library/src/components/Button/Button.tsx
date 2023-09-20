import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  type: string;
}

const Button = (props: ButtonProps) => {
  const className = `rcl-button--${props.type}`;

  return (
    <button className={`rcl-button ${className}`}>
      {props.label}
    </button>
  );
};

export default Button;
