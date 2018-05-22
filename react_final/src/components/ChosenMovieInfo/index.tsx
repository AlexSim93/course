import * as React from "react";
import * as classNames from "classnames";
import { get } from "lodash";
import StarIconWithRouter from "../../containers/StarIconWithRouter";
import "./style.scss";

interface IChosenMovieInfo {
  movie: any;
}

const ChosenMovieInfo = ({ movie }: IChosenMovieInfo) => (
  <div className={classNames("chosen-movie-info")}>
    <div className={classNames("chosen-movie-info__title-container")}>
      <h2 className={classNames("chosen-movie-info__title")}>
        {get(movie, "title", "Unknown")}
      </h2>
      <span className={classNames("chosen-movie-info__rating")}>
        {get(movie, "vote_average", 0).toFixed(1)}
      </span>
    </div>
    <span className={classNames("chosen-movie-info__tagline")}>
      {get(movie, "tagline", "Unknown")}
    </span>
    <div className={classNames("chosen-movie-info__icons-container")}>
      <StarIconWithRouter id={movie.id} />
    </div>
    <div className={classNames("chosen-movie-info__year-runtime-container")}>
      <span className={classNames("chosen-movie-info__year")}>
        {get(movie, "release_date", "Unknown")}
      </span>
      <span className={classNames("chosen-movie-info__runtime")}>
        {get(movie, "runtime", "Unknown")} min.
      </span>
    </div>
    <span className={classNames("chosen-movie-info__overview")}>
      {get(movie, "overview", "Unknown")}
    </span>
  </div>
);

export default ChosenMovieInfo;
