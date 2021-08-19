import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api";
import DeckForm from "./DeckForm";

function EditDeck() {
  const history = useHistory();
  const { deckId } = useParams();

  const [deck, setDeck] = useState({ name: "", description: "" });

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  function submitButton(updatedDeck) {
    updateDeck(updatedDeck).then((saveDeck) =>
      history.push(`/decks/${saveDeck.id}`)
    );
  }

  function cancel() {
    history.goBack();
  }

  const result = deck.id ? (
    <DeckForm onCancel={cancel} onSubmit={submitButton} initialState={deck} toEdit={true}/>
  ) : (
    <p>Loading...</p>
  );

  return (
    <>
      <h1>Edit Deck</h1>
      {result}
    </>
  );
}

export default EditDeck;
