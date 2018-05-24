import * as React from "react";
import * as classNames from "classnames";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import ErrorBoundary from "../ErrorBoundary";
import { loadFavourites } from "../../store";

import "./style.scss";

interface IAppProps {
  history: any;
  match: any;
  getFavourites(item: any): void;
  resetMovies(): void;
  resetMovie(): void;
}

class App extends React.Component<IAppProps> {
  public componentDidMount(): void {
    this.props.getFavourites(loadFavourites());
  }

  public componentDidUpdate(prevProps: IAppProps): void {
    if (this.props.match.path !== prevProps.match.path) {
      this.props.resetMovies();
    }
    if (
      prevProps.match.path === "/film/:film" &&
      this.props.match.path !== "/film/:film"
    ) {
      this.props.resetMovie();
    }
  }

  public render(): JSX.Element {
    return (
      <div className={classNames("app", "root__app")}>
        <Header />
        <ErrorBoundary>
          <Main />
        </ErrorBoundary>
        <Footer />
      </div>
    );
  }
}

export default App;
