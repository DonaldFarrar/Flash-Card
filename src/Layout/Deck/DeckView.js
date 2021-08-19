import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck } from "../../utils/api";
import DeleteButton from "../Home/DeleteButton";
import CardList from "../Card/CardList";

function DeckView() {
  const [deck, setDeck] = useState([]);
  const [card, setCard] = useState([]);
  const { deckId } = useParams();
  const { cardId } = useParams();

  useEffect(() => {
    const abrtCtrl = new AbortController();

    async function getDeck() {
      const deckToSet = await readDeck(deckId, cardId, abrtCtrl.signal);
      setDeck(deckToSet);
      setCard(deckToSet);
    }
    getDeck();
  }, [deckId, cardId]);

  if (deck.cards) {
    return (
      <div>
        <div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">
                <Link to={"/"}>
                  <span className="oi oi-home"> Home </span>
                </Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
              </li>
            </ol>
          </nav>
        </div>
        <div className="card container mb-4">
          <div className="card-body">
            <div className="row d-flex justify-content-start">
              <h5 className="card-title">{deck.name}</h5>
            </div>
            <div className="row">
              <p className="card-text">{deck.description}</p>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="col d-flex justify-content-start p-0">
                <Link
                  to={`/decks/${deck.id}/edit`}
                  className="btn btn-secondary"
                >
                  <span className="oi oi-eye"></span> Edit
                </Link>
                <Link
                  to={`/decks/${deck.id}/study`}
                  className="btn btn-primary ml-2"
                >
                  <span className="oi oi-book"></span> Study
                </Link>
                <Link
                  to={`/decks/${deck.id}/cards/new`}
                  className="btn btn-primary ml-2"
                >
                  <span className="oi oi-plus"></span> Add Cards
                </Link>
              </div>
              <div className="col d-flex justify-content-end p-0">
                <button className="btn btn-danger">
                  <DeleteButton
                    destroy="deleteDeck"
                    deckId={deckId}
                    abortSignal={AbortSignal}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <h1>Cards</h1>
        <CardList cards={deck.cards} />
      </div>
    );
  } else {
    return "...Loading!";
  }
}
export default DeckView;
