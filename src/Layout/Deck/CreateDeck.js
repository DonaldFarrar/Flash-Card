import React from "react";
import { useHistory, Link } from "react-router-dom";
import { createDeck } from "../../utils/api";
import DeckForm from "./DeckForm";

function CreateDeck() {
  const history = useHistory();

  function submitHandler(deck) {
    createDeck(deck).then((savedDeck) => {
      history.push(`/decks/${savedDeck.id}`);
    });
  }
  function cancel() {
    history.goBack();
  }
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            <Link to={"/"}>
              <span className="oi oi-home"> Home </span>
            </Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>

      <h1>Create Deck</h1>
      <DeckForm onCancel={cancel} onSubmit={submitHandler} toEdit={false}/>
    </>
  );
}

export default CreateDeck;
