import React from "react";
import DeckListItem from "./DeckListItem";

function DeckList({ decks }) {
  //console.log(decks);

  let result = decks.map((deck, index) => {
    //console.log("deck from decklist:", deck);
    return <DeckListItem deck={deck} key={index} />;
  });
  return result;
}

export default DeckList;
