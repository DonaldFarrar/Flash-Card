import React from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import DeckForm from "./DeckForm";

function CreateDeck() {
  const history = useHistory();

  function submitHandler(deck) {
    createDeck(deck).then((savedDeck) => {
      history.push(`/decks/${savedDeck.id}`);
    });
  }
  function cancel() {
    history.goBack();
  }
  return (
    <>
      Create Deck
      <h1>Create Deck</h1>
      <DeckForm onCancel={cancel} onSubmit={submitHandler} />
    </>
  );
}

export default CreateDeck;
