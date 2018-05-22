import * as React from "react";
import "./style.scss";
import default_poster from "../../images/poster_none.png";

const Poster = ({ movie }: any) => (
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
