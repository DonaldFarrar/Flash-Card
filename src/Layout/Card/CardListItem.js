import React from "react";
import { Link } from "react-router-dom";

function CardListItem({ card: { id, front, back } }) {
  return (
    <div className="card container">
      <div className="card-body">
        <div className="row d-flex justify-content-between">
          <div className="col">{front}</div>
          <div className="col">{back}</div>
        </div>
        <div className="row d-flex justify-content-end">
          <Link to={`/decks/${id}`} className="btn btn-secondary mr-1">
            <span className="oi oi-eye"></span> Edit
          </Link>
          <button className="btn btn-danger">
            <span className="oi oi-trash"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardListItem;
