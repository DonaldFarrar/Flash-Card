import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../../utils/api";
import CardForm from "./CardForm";

function EditCard() {
  const history = useHistory();
  const { deckId, cardId } = useParams();

  const [card, setCard] = useState({ front: "", back: "" });
  const [deck, setDeck] = useState({ cards: [] });

  useEffect(() => {
    readDeck(deckId).then(setDeck);
    readCard(cardId).then(setCard);
  }, [deckId, cardId]);

  function submitButton(card) {
    updateCard(card).then(doneButton);
  }

  function doneButton() {
    history.push(`/decks/${deck.id}`);
  }

    const result = card.id ? (
      <CardForm
        onSubmit={submitButton}
        onDone={doneButton}
        deckName={deck.name}
        initialState={card}
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
