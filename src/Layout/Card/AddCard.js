import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
import CardForm from "./CardForm";

function AddCard() {
  const history = useHistory();
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ cards: [] });

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  function submitButton(card) {
    createCard(deckId, card);
  }

  function doneButton() {
    history.push(`/decks/${deckId}`);
  }
  return (
    <>
      <nav aria-label="breadcrumb">c
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            <Link to={"/"}>
              <span className="oi oi-home"> Home </span>
            </Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Add Card
          </li>
        </ol>
      </nav>
      <div>
        <h3>Add Card</h3>
      </div>
      <CardForm
        deckName={deck.name}
        initialState={deck}
        onSubmit={submitButton}
        onDone={doneButton}
      />
    </>
  );
}

export default AddCard;
