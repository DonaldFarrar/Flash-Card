import React from "react";
import { Link, useParams } from "react-router-dom";
import DeleteButton from "../Home/DeleteButton";

function CardListItem({ card: { id, front, back } }) {
  const abortSignal = new AbortController().signal;
  const { cardId, deckId } = useParams();
  return (
    <div className="card container">
      <div className="card-body">
        <div className="row d-flex justify-content-between">
          <div className="col">{front}</div>
          <div className="col">{back}</div>
        </div>
        <div className="row d-flex justify-content-end">
          <Link to={`/decks/${deckId}/cards/${id}/edit`} className="btn btn-secondary mr-1">
            <span className="oi oi-eye"></span> Edit
          </Link>
          <button className="btn btn-danger">
            <DeleteButton
              destroy="deleteCard"
              cardId={id}
              abortSignal={abortSignal}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardListItem;
