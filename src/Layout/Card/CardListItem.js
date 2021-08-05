import React from "react";
import { Link } from "react-router-dom";

function CardListItem({ cards: { id, front, back, deckId }, index }) {
  return (
    <div>
      <form>
        <div className="title">{id}</div>
        <Link to={`/decks/${id}`} className="btn btn-secondary">
          <span className="oi oi-eye"></span> View
        </Link>
        <button>Edit</button>
        <Link to={`/decks/${id}/study`} className="btn btn-primary ml-2">
          <span className="oi oi-book"></span> Study
        </Link>
        <button>Add Cards</button>
      </form>
    </div>
  );
}

export default CardListItem;
