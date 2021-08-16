import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StudyCard from "./StudyCard";
import { readDeck } from "../utils/api";

function Study() {
  const { deckId } = useParams();

  const [deck, setDeck] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchData() {
      const response = await readDeck(deckId, abortController.signal);
      setDeck(response);
    }
    fetchData();
    return () => abortController.abort();
  }, [deckId]);

  //PSEUDO Code
  //frame work of the HTML
  //Bootstrap Card
  //Card X of Y
  //state variable of the view front or back of the card
  //managing the next button is visible
  //Call readDeck in useEffect
  //window.confirm for the restart prompt
  //breadcrumb navigation
  //flip button and a next button
  if (deck) {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <h1>Study: {deck.name}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <StudyCard />
          </div>
        </div>
      </div>
    );
  } else {
    return "Loading...!";
  }
}

export default Study;
