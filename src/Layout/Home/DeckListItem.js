import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

function DeckListItem({ deck: { id, name, description, cards }, index }) {
  const abortSignal = new AbortController().signal;

  return (
    //create a card with view, study and delete buttons
    <div className="card container">
      <div className="card-body">
        <div className="row d-flex justify-content-between">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{`${cards.length} cards`}</p>
        </div>
        <div className="row">
          <p className="card-text">{description}</p>
        </div>
        <div className="row d-flex justify-content-between">
          <div className="col d-flex justify-content-start p-0">
            <Link to={`/decks/${id}`} className="btn btn-secondary">
              <span className="oi oi-eye"></span> View
            </Link>
            <Link to={`/decks/${id}/study`} className="btn btn-primary ml-2">
              <span className="oi oi-book"></span> Study
            </Link>
          </div>
          <div className="col d-flex justify-content-end p-0">
            <button className="btn btn-danger">
              <DeleteButton
                destroy="deleteDeck"
                deckId={id}
                abortSignal={abortSignal}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeckListItem;
