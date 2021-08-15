import React, { useState } from "react";
import StudyCard from "./StudyCard";

function Study({ decks }) {
  const initialState = {
    cardNumber: 0,
    flipped: false,
    hasBeenFlipped: false,
  };

  const [state, setState] = useState({...initialState});

  const updateState = (key, value) =>
  setState((current) => ({ ...current, [key]: value }));

  if(decks) {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <h1>Study: {decks.name}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <StudyCard
              deckId={decks.id}
              card={decks.cards[state.cardNumber]}
              total={decks.cards.length}
              state={state}
              updateState={updateState}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return "Loading...!";
  }
}

export default Study;
