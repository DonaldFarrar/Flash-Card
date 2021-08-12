import React from "react";
import CardListItem from "./CardListItem";

function CardList({ cards }) {
  //console.log(cards);
  let result = cards.map((card, index) => {
    return <CardListItem card={card} key={index} />;
  });
  return result;
}

export default CardList;
