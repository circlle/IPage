import React from "react";
import Card, { CardMeta } from "./Card";
import "./index.css";

export type CardState = {
  cardList: CardMeta[];
};
const CardList = (props: { cardState: CardState }) => {
  return (
    <div className="card-list">
      {props.cardState.cardList.map((card, index) => {
        return (
          <div className="card-wrapper" key={card.appId} >
            <Card card={card} />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
