import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function DeleteButton() {
  //const result = window.confirm(message);
  const history = useHistory();
  const [deleteDeck, setDeleteDeck] = useState([]);
  const handleClick = (event) =>
    setDeleteDeck([...deleteDeck, event.target.value]);

  history.push("/");

  return (
    <section>
      <div>
        <button
          type="button"
          className="btn btn-danger btn-lg"
          name="Delete"
          onClick={handleClick}
        >
          <div>{}</div>
          Delete
        </button>
      </div>
    </section>
  );
}

export default DeleteButton;
