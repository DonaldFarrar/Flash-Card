import React, { useState, useEffect } from "react";
import { listDecks } from "../utils/api";
import DeckList from "./Deck/DeckList";

function Home() {
  const [allDecks, setAllDecks] = useState([]);

  function handleButtonClick(event) {
    event.preventDefault();
    console.log(event.target.name);
  }

  useEffect(() => {
    const abrtCtrl = new AbortController();

    async function showDecks() {
      setAllDecks(await listDecks(abrtCtrl.signal));
    }
    showDecks();
  }, []);

  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary mb-2"
        name="Create"
        onClick={handleButtonClick}
      >
        <span className="oi oi-plus"></span> Create Deck
      </button>

      <DeckList decks={allDecks} />
    </div>
  );
}

export default Home;
