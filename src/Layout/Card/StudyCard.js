import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
//import { useHistory } from "react-router-dom";

function StudyCard({ cards, index, setIndex, deckId, deck }) {
  const [flip, setFlip] = useState(false);
  const [showCard, setShowCard] = useState(true);
  //const history = useHistory();

  const flipButton = (event) => {
    event.preventDefault();
    //false = Front of Card
    //true = Back of Card
    setFlip(!flip);
    setShowCard(!showCard);
  };

  const nextButton = (event) => {
    setFlip(!flip);
    setIndex(index + 1);
  };

  // function studyAgain() {
  //   if (
  //     window.confirm(
  //       `Restart cards? \n\n Clicking cancel will return you to the home page`
  //     )
  //   ) {
  //     setIndex(0);
  //     setFlip(false);
  //     setShowCard(true);
  //   } else {
  //     history.push("/");
  //   }
  // }

  const ShowStudyCards = () => {
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
  };

  return (
    <div>
      {cards.length >= 3 ? <ShowStudyCards /> : <p>Need more cards!</p>}
      <button className="btn btn-primary">
        <span className="oi oi-plus"></span>Add Cards
        {/* <Link to={`/decks/${deck.id}/cards/new`}></Link> */}
      </button>
    </div>
  );
}

export default StudyCard;
