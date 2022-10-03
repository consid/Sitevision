import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  color: string;
  backgroundColor: string;
}

const Button = (props: ButtonProps) => {
  return <button style={{
    backgroundColor: props.backgroundColor,
    color: props.color
  }} className="rcl-button">{props.label}</button>;
};

export default Button;
