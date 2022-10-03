import React from "react";
import "./Card.scss";
import Button from "../Button/Button";

export interface CardProps {
  header: string;
  text: string;
  imgAlt: string;
  imgSrc: string;
  link: string;
  linkText: string;
  color: string;
  backgroundColor: string;
}

const Card = (props: CardProps) => {
  return (
    <div className={"rcl-card"}>
      <img src={props.imgSrc} alt={props.imgAlt} />
      <div className={"rcl-card--container"}>
        <h4>{props.header}</h4>
        <p>{props.text}</p>
      </div>
      {props.link &&
        <a href={props.link}
          className={"rcl-card__button"}
        >
          <Button
            backgroundColor={props.backgroundColor}
            color={props.color}
            label={props.linkText}></Button>
        </a>
      }
    </div>
  );
};

export default Card;
