import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
import CardForm from "./CardForm";

function AddCard() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ cards: [] });

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  function submitButton(card) {
    createCard(deckId, card);
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            <Link to={"/"}>
              <span className="oi oi-home"> Home </span>
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Card
          </li>
        </ol>
      </nav>
      <div>
        <h3>Add Card</h3>
      </div>
      <CardForm
        deckName={deck.name}
        onSubmit={submitButton}
        deckId={deckId}
        toEdit={false}
      />
    </>
  );
}

export default AddCard;
