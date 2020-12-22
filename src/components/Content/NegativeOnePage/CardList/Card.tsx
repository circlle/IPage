import React from "react";
import CardInstanceList from "./CardInstance";

export type CardMeta = {
  appId: number;
  themeColor: string;
};

const Card = (props: { card: CardMeta }) => {
  const cardInstance = CardInstanceList.find(
    (cardInstance) => cardInstance.appId === props.card.appId
  );
  if (!cardInstance) return null;

  const Component = cardInstance.component;
  return (
    <div className="card" style={{transform: 'translateZ(10px)'}}>
      <Component />
    </div>
  );
};

export default Card;
