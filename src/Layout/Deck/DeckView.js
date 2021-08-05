import React from "react";
import { useRouteMatch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import DeckView from "./Deck/DeckView";
//import CardList from "../Card/CardList";

function DeckView() {
  const { params } = useRouteMatch();
  console.log(params);
  return <div>Hello Worlds</div>;
}

export default DeckView;
