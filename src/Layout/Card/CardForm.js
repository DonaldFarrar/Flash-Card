import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { createCard, updateCard } from "../../utils/api";

function CardForm({
  toEdit,
  deckName = "Loading...",
  front = "front side of card",
  back = "back side of card",
  doneButtonLabel = "Done",
  deckId,
  cardId = null,
}) {
  const [card, setCard] = useState({
    id: Number(cardId),
    front: front,
    back: back,
    deckId: Number(deckId),
  });
  const history = useHistory();
  const abortController = new AbortController().signal;

  function changeHandler(event) {
    event.preventDefault();
    console.log(event.target.value);
    setCard({
      ...card,
      [event.target.name]: event.target.value,
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(card);
    if (toEdit) {
      updateCard(card, abortController).then((response) => {
        console.log("response", response);
        history.push(`/decks/${response.deckId}`);
      });
    } else {
      createCard(deckId, card, abortController).then(() => {
        history.go(0);
      });
    }
  }

  if (toEdit === false) {
    return (
      <>
        <form onSubmit={submitHandler} className="card-form">
          <fieldset>
            <legend>{deckName}: Add Card</legend>

            <div className="form-group">
              <label htmlFor="front">Front</label>
              <textarea
                id="front"
                name="front"
                className="form-control"
                required={true}
                placeholder={front}
                onChange={changeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="back">Back</label>
              <textarea
                id="back"
                name="back"
                className="form-control"
                required={true}
                placeholder={back}
                onChange={changeHandler}
              />
            </div>

            <Link
              to={`/decks/${deckId}`}
              className="btn btn-secondary mr-2"
              tabIndex="4"
            >
              Done
            </Link>
            <div onClick={submitHandler} className="btn btn-primary">
              Save
            </div>
          </fieldset>
        </form>
      </>
    );
  } else {
    return (
      <>
        <form onSubmit={submitHandler} className="card-form">
          <fieldset>
            <legend>{deckName}: Add Card</legend>

            <div className="form-group">
              <label htmlFor="front">Front</label>
              <textarea
                id="front"
                name="front"
                className="form-control"
                required={true}
                defaultValue={front}
                onChange={changeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="back">Back</label>
              <textarea
                id="back"
                name="back"
                className="form-control"
                required={true}
                defaultValue={back}
                onChange={changeHandler}
              />
            </div>

            <Link
              to={`/decks/${deckId}`}
              className="btn btn-secondary mr-2"
              tabIndex="4"
            >
              Done
            </Link>
            <div onClick={submitHandler} className="btn btn-primary">
              Save
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default CardForm;
