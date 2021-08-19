import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CardForm({
  toEdit,
  onSubmit,
  deckId,
  deckName = "Loading...",
  initialState,
  doneButtonLabel = "Done",
}) {
  const [card, setCard] = useState(initialState);
  const history = useHistory();

  function changeHandler(event) {
    event.preventDefault();
    setCard({
      ...card,
      [event.target.id]: event.target.value,
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    onSubmit(card);
    // onSubmit({ ...card });
    setCard({ front: "", back: "" });
    history.push(`/decks/${deckId}`);
    history.go(0);
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
                tabIndex="1"
                className="form-control"
                required={true}
                placeholder="Enter text to display on the front of the card"
                onChange={changeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="back">Back</label>
              <textarea
                id="back"
                name="back"
                tabIndex="2"
                className="form-control"
                required={true}
                placeholder="Enter text to display on the back of the card"
                onChange={changeHandler}
              />
            </div>

            <button className="btn btn-secondary mr-2" tabIndex="4">
              {doneButtonLabel}
            </button>
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
                tabIndex="1"
                className="form-control"
                required={true}
                //placeholder="Enter text to display on the front of the card"
                defaultValue={card.front}
                onChange={changeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="back">Back</label>
              <textarea
                id="back"
                name="back"
                tabIndex="2"
                className="form-control"
                required={true}
                //placeholder="Enter text to display on the back of the card"
                defaultValue={card.back}
                onChange={changeHandler}
              />
            </div>

            <button className="btn btn-secondary mr-2" tabIndex="4">
              {doneButtonLabel}
            </button>
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
