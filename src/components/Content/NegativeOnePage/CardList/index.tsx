import React from 'react'
import Card, { CardMeta } from './Card';
import "./index.css"

export type CardState = {
  cardList: CardMeta[];
};
const CardList = (props: { cardState: CardState }) => {
  return <div className="card-list">
    {props.cardState.cardList.map(card => {
      return <Card key={card.appId} card={card}/>
    })}
  </div>
}

export default CardList