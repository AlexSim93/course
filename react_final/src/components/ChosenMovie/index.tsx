import * as React from "react";
import * as classNames from "classnames";
import Poster from "../Poster";
import ChosenMovieInfo from "../ChosenMovieInfo";
import Loader from "../Loader";

import "./style.scss";

interface IChosenMovie {
  url?: string;
  movie: any;
  isLoading: boolean;
  hasError: boolean;
  fetchMovie(url?: string): void;
}

class ChosenMovie extends React.Component<IChosenMovie> {
  public componentDidMount(): void {
    this.props.fetchMovie(this.props.url);
  }
  public componentDidUpdate(prevProps: any) {
    if (this.props.url !== prevProps.url) {
      this.props.fetchMovie(this.props.url);
    }
  }
  public render(): JSX.Element {
    if (this.props.hasError) {
      throw new Error("Cannot load chosen movie");
    }
    if (this.props.isLoading) {
      return <Loader />;
    }
    return (
      <div className={classNames("chosen-movie")}>
        <Poster movie={this.props.movie} />
        <ChosenMovieInfo movie={this.props.movie} />
      </div>
    );
  }
}

export default ChosenMovie;
