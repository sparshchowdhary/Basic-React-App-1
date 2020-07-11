import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FindEpisode from "../src/FindEpisode";
import EpisodeList from "../src/AllEpisodes";
import "./style.css";

export default function RickAndMorty() {
  return (
    <div className="RickAndMorty">
      <Router>
        <Switch>
          <Route exact path="/" component={EpisodeList} />
          <Route exact path="/search" component={FindEpisode} />
        </Switch>
      </Router>
    </div>
  );
}
