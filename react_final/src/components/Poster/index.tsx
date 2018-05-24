import * as React from "react";
import "./style.scss";
import default_poster from "../../images/poster_none.png";

interface IPosterProps {
  movie: any;
}

const Poster = ({ movie }: IPosterProps): JSX.Element => (
  <div className="poster">
    <img
      className="poster__img"
      src={movie.poster_path}
      alt={movie.title}
      onError={(evt: any) => (evt.target.src = default_poster)}
    />
  </div>
);

export default Poster;
