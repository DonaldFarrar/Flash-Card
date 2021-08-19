import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck, deleteCard } from "../../utils/api";

function DeleteButton({ destroy, deckId, cardId = null, abortSignal }) {
  const history = useHistory();

  function deleteButton() {
    switch (destroy) {
      case "deleteDeck":
        if (
          window.confirm(
            `Delete this deck? \n\n You will not be able to recover it.`
          )
        ) {
          console.log(deckId, destroy);
          deleteDeck(deckId, abortSignal).then(() => {
            history.push("/");
            history.go(0);
          });
        }
        break;
      case "deleteCard":
        if (
          window.confirm(
            `Are you sure you want to delete? \n\n You will not be able to recover it.`
          )
        ) {
          deleteCard(cardId, abortSignal).then(() => {
            history.go(0);
          });
        }
        break;
      default:
        break;
    }
  }

  return (
    <button className="btn btn-danger" onClick={deleteButton}>
      <span className="oi oi-trash"></span>
    </button>
  );
}

export default DeleteButton;
