import * as React from "react";
import Poster from "../Poster";
import MovieInfo from "../MovieInfo";

import "./style.scss";

interface IMovieProps {
  movie: any;
}

const Movie = ({ movie }: IMovieProps): JSX.Element => (
  <div className="movie">
    <Poster movie={movie} />
    <MovieInfo movie={movie} />
  </div>
);

export default Movie;
