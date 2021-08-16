import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home/Home";
import DeckView from "./Deck/DeckView";
import CreateDeck from "./Deck/CreateDeck";
import Study from "./Study";


function Layout() {
  return (
    <div className="container">
      <Header />
      {/* TODO: Implement the screen starting here */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/decks/new">
          <CreateDeck />
        </Route>
        <Route path="/decks/:deckId/study">
          <Study />
        </Route>
        <Route path="/decks/:deckId">
          <DeckView />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Layout;
