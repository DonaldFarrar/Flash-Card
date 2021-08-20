import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck } from "../../utils/api";
import StudyCard from "./StudyCard";

function Study() {
  const { deckId } = useParams();

  const [deck, setDeck] = useState([]);
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(-1);

  //grabs decks info and return it to a set deck variable
  useEffect(() => {
    const abortController = new AbortController();
    async function getDeck() {
      setDeck(await readDeck(deckId, abortController.signal));
    }
    getDeck();
  }, [deckId]);

  //deck info is set to state
  //variable containing the deck array
  useEffect(() => {
    const abortController = new AbortController();
    if (deck.cards) {
      setCards(deck.cards);
      setIndex(0);
    }
    return () => {
      abortController.abort();
    };
  }, [deck]);

  if (index >= 0) {
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
              Study
            </li>
          </ol>
        </nav>
        <div>
          <div className="row">
            <div className="col-12">
              <h1>Study: {deck.name}</h1>
            </div>
          </div>
          <div>
            <StudyCard
              cards={cards}
              index={index}
              setIndex={setIndex}
              deckId={deckId}
            />
          </div>
        </div>
      </>
    );
  } else {
    return "Loading...!";
  }
}

export default Study;
