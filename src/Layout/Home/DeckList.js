import React from "react";
import DeckListItem from "./DeckListItem";

function DeckList({ decks }) {
  let result = decks.map((deck, index) => {
    return <DeckListItem deck={deck} key={index} />;
  });
  return result;
}

export default DeckList;
