import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck } from "../../utils/api";
import DeleteButton from "./DeleteButton";
import { useHistory } from "react-router-dom";

import CardList from "../Card/CardList";

function DeckView() {
  const history = useHistory();
  const [deck, setDeck] = useState([]);
  const { deckId } = useParams();
  console.log(deckId);

  useEffect(() => {
    const abrtCtrl = new AbortController();

    async function getDeck() {
      const deckToSet = await readDeck(deckId, abrtCtrl.signal);
      setDeck(deckToSet);
    }
    getDeck();
  }, [deckId]);

  if (deck.cards) {
    return (
      <div>
        {/* <BreadCrumb /> */}
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
                <Link to={`/decks/${deck.id}`} className="btn btn-secondary">
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
                  <span className="oi oi-trash"></span>
                  <DeleteButton
                    id={deck.id}
                    onComplete={() => history.push("/")}
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
