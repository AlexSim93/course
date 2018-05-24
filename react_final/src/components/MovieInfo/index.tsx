import * as React from "react";
import { get } from "lodash";
import StarIconWithouter from "../../containers/StarIconWithRouter";

import "./style.scss";

interface IMovieInfoProps {
  movie: any;
}

const MovieInfo = ({ movie }: IMovieInfoProps) => (
  <div className="movie-info">
    <h2 className="movie-info__title">{get(movie, "title", "unknown")}</h2>
    <span className="movie-info__year">{movie.release_date.getFullYear()}</span>
    <span className="movie-info__genres">
      {Array.isArray(get(movie, "genres", "unknown"))
        ? movie.genres.join(" & ")
        : get(movie, "genres", "unknown")}
    </span>
    <StarIconWithouter id={movie.id} />
  </div>
);

export default MovieInfo;
