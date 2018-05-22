import * as React from "react";
import * as classNames from "classnames";

import "./style.scss";

interface IStarIconProps {
  isFavourite: boolean;
  id: number;
  match: any;
  toggleFavourite: (id: number) => void;
  removeFromMovieList: (id: string | number) => void;
}

const StarIcon = ({
  id,
  match,
  isFavourite,
  toggleFavourite,
  removeFromMovieList
}: IStarIconProps) => (
  <div
    className={classNames("star-icon")}
    onClick={(evt: React.SyntheticEvent<HTMLElement>) => {
      evt.preventDefault();
      evt.stopPropagation();
      toggleFavourite(id);
      if (match.path === "/favourites") {
        removeFromMovieList(id);
      }
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 252 252"
    >
      <g
        fill="none"
        strokeMiterlimit="10"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <path d="M0,252v-252h252v252z" />
        <g id="surface1">
          <path
            d="M37.8,229.95c-8.68711,0 -15.75,-7.06289 -15.75,-15.75v-176.4c0,-8.68711 7.06289,-15.75 15.75,-15.75h176.4c8.68711,0 15.75,7.06289 15.75,15.75v176.4c0,8.68711 -7.06289,15.75 -15.75,15.75z"
            fill="#ecf0f1"
          />
          <path
            d="M214.2,25.2c6.93985,0 12.6,5.66016 12.6,12.6v176.4c0,6.93985 -5.66015,12.6 -12.6,12.6h-176.4c-6.93984,0 -12.6,-5.66015 -12.6,-12.6v-176.4c0,-6.93984 5.66016,-12.6 12.6,-12.6h176.4M214.2,18.9h-176.4c-10.43437,0 -18.9,8.46562 -18.9,18.9v176.4c0,10.43438 8.46562,18.9 18.9,18.9h176.4c10.43438,0 18.9,-8.46562 18.9,-18.9v-176.4c0,-10.43437 -8.46562,-18.9 -18.9,-18.9z"
            fill="#bdc3c7"
          />
          <path
            d="M126,69.3l19.6875,38.43985l43.3125,5.66015l-32.23828,29.55586l7.6043,41.68828l-38.36602,-19.56445l-38.43984,19.56445l7.67812,-41.68828l-32.23828,-29.55586l45.05977,-5.66015z"
            fill={isFavourite ? "#f7cd0d" : "#bdc3c7"}
          />
        </g>
      </g>
    </svg>
  </div>
);

export default StarIcon;
