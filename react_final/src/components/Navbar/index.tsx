import * as React from "react";
import { Switch, Route, Link } from "react-router-dom";
import * as classNames from "classnames";
import Logo from "../Logo";
import Button from "../Button";

import "./style.scss";

interface INavbarProps {
  favourites: any;
}

const Navbar = ({ favourites }: INavbarProps): JSX.Element => (
  <nav className={classNames("navbar")}>
    <Link 
      to="/search/"
      className={classNames("navbar__logo-container")}
    >
      <Logo text="netflixroulette" />
    </Link>
    <Switch>
      <Route
        exact
        path="/search/:searchValue?"
        render={(): JSX.Element => (
          <Link to="/favourites/">
            <Button light text="Favourites" />
          </Link>
        )}
      />
      <Route
        exact
        path="/film/:film"
        render={(): JSX.Element => (
          <Link to="/search/">
            <Button light text="Search" />
          </Link>
        )}
      />
      <Route
        exact
        path="/favourites"
        render={(): JSX.Element => (
          <Link to="/search/">
            <Button light text="Search" />
          </Link>
        )}
      />
    </Switch>
  </nav>
);

export default Navbar;
