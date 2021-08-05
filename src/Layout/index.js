import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import DeckView from "./Deck/DeckView";

function Layout() {
  const {
    url,
    params: { deckId },
  } = useRouteMatch();
  return (
    <div className="container">
      <Header />
      {/* TODO: Implement the screen starting here */}
      <Switch>
        {/* <Route exact path="/">
          <Home />
        </Route> */}
        <Route path="/">
          <DeckView />
        </Route>
        {/* <Route>
          <CreateDeck />
        </Route> */}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Layout;
