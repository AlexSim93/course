import * as React from "react";
import * as classNames from "classnames";

import "./style.scss";

interface ITextDisplayProps {
  text: string;
  sizeLg?: boolean;
  light?: boolean;
}

const TextDisplay = ({ text, light, sizeLg }: ITextDisplayProps): JSX.Element => (
  <div className={classNames("text-display")}>
    <span
      className={classNames("text-display__text", {
        "text-display__text_size_lg": sizeLg,
        "text-display__text_light": light
      })}
    >
      {text}
    </span>
  </div>
);

export default TextDisplay;
