import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readCard, readDeck } from "../../utils/api";
import CardForm from "./CardForm";

function EditCard() {
  const { deckId, cardId } = useParams();

  const [card, setCard] = useState({ front: "", back: "" });
  const [deck, setDeck] = useState({ cards: [] });

  useEffect(() => {
    readDeck(deckId)
      .then(setDeck)
      .catch((error) => {
        console.log(error);
      });
  }, [deckId]);

  useEffect(() => {
    readCard(cardId)
      .then(setCard)
      .catch((error) => {
        console.log(error);
      });
  }, [cardId]);

  const result = card.id ? (
    <CardForm
      deckName={deck.name}
      front={card.front}
      back={card.back}
      toEdit={true}
      deckId={deckId}
      cardId={cardId}
      doneButtonLabel="Cancel"
    />
  ) : (
    <p>Loading...</p>
  );
  return (
    <>
      <h2>Edit Card</h2>
      {result}
    </>
  );
}

export default EditCard;
