import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
//import { useHistory } from "react-router-dom";

function StudyCard({ cards, index, setIndex, deckId }) {
  const [flip, setFlip] = useState(false);
  const [showCard, setShowCard] = useState(true);
  const history = useHistory();

  const flipButton = (event) => {
    event.preventDefault();
    //false = Front of Card
    //true = Back of Card
    setFlip(!flip);
    setShowCard(!showCard);
  };

  const nextButton = (event) => {
    if (index + 1 >= cards.length) {
      studyAgain();
    } else {
      setFlip(!flip);
      setIndex(index + 1);
    }
  };

  function studyAgain() {
    if (
      window.confirm(
        `Restart cards? \n\n Clicking cancel will return you to the home page`
      )
    ) {
      setIndex(0);
      setFlip(false);
      setShowCard(true);
    } else {
      history.push("/");
    }
  }

  if (cards.length < 3) {
    return (
      <div>
        <p>Need more cards!</p>
        <Link className="btn btn-primary" to={`/decks/${deckId}/cards/new`}>
          <span className="oi oi-plus"></span> Add Cards
        </Link>
      </div>
    );
  } else {
    return (
      <div className="card container">
        <div className="card-body">
          <div className="row">
            <h3 className="col">
              Card {index + 1} of {cards.length}
            </h3>
          </div>
          {showCard === true ? (
            <div className="row pl-4">{cards[index].front}</div>
          ) : (
            <div className="row pl-4">{cards[index].back}</div>
          )}
          <div className="row">
            <div className="col-12">
              <div className="btn btn-secondary m-2" onClick={flipButton}>
                Flip
              </div>
              {flip && (
                <div className="btn btn-primary m-2" onClick={nextButton}>
                  Next
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudyCard;
