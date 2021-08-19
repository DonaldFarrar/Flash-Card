import React, { useState } from "react";

function DeckForm({
  onSubmit,
  onCancel,
  toEdit,
  initialState = { name: "", description: "" },
}) {
  const [deck, setDeck] = useState(initialState);

  function changeHandler(event) {
    event.preventDefault();
    console.log(event.target);
    setDeck({
      ...deck,
      [event.target.id]: event.target.value,
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    onSubmit(deck);
  }

  if (toEdit === false) {
    return (
      <>
        <form onSubmit={submitHandler} className="deck-create">
          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                required={true}
                placeholder="Deck Name"
                onChange={changeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                className="form-control"
                rows="4"
                required={true}
                placeholder="Description about this deck."
                onChange={changeHandler}
              />
            </div>
            <div className="btn btn-secondary mr-2" onClick={onCancel}>
              Cancel
            </div>
            <div onClick={submitHandler} className="btn btn-primary">
              Submit
            </div>
          </fieldset>
        </form>
      </>
    );
  } else {
    return (
      <>
        <form onSubmit={submitHandler} className="deck-create">
          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                required={true}
                defaultValue={deck.name}
                onChange={changeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                className="form-control"
                rows="4"
                required={true}
                defaultValue={deck.description}
                onChange={changeHandler}
              />
            </div>
            <div className="btn btn-secondary mr-2" onClick={onCancel}>
              Cancel
            </div>
            <div onClick={submitHandler} className="btn btn-primary">
              Submit
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default DeckForm;
