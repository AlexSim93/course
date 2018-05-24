import * as React from "react";
import * as classNames from "classnames";
import "./style.scss";

interface ILogoProps {
  text: string;
}

const Logo = ({ text }: ILogoProps): JSX.Element => (
  <div className={classNames("logo")}>
    <span className={classNames("logo__text")}>{text}</span>
  </div>
);

export default Logo;
