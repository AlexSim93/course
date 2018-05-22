import * as React from "react";
import * as classNames from "classnames";
import { Switch, Route } from "react-router-dom";
import TextDisplay from "../TextDisplay";
import Sortbar from "../Sortbar";

import "./style.scss";

interface ISearchbar {
  result: number;
  sortType: string;
  genre: string;
  onSortByDate(): void;
  onSortByRating(): void;
}

const Searchbar = ({
  result,
  sortType,
  genre,
  onSortByDate,
  onSortByRating
}: ISearchbar) => (
  <div className={classNames("searchbar")}>
    <Switch>
      <Route
        exact
        path="/search/:searchValue?"
        render={() => (
          <Sortbar
            result={result}
            sortType={sortType}
            onSortByDate={onSortByDate}
            onSortByRating={onSortByRating}
          />
        )}
      />
      <Route
        exact
        path="/film/:film"
        render={(): JSX.Element => (
          <TextDisplay text={`genre of movies: ${genre}`} />
        )}
      />
      <Route
        exact
        path="/favourites"
        render={(): JSX.Element => (
          <TextDisplay text={"Your favourite movies"} />
        )}
      />
    </Switch>
  </div>
);

export default Searchbar;
