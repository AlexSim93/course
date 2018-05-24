import * as React from "react";
import * as classNames from "classnames";
import * as img from "../../images/loader.png";

import "./style.scss";

const Loader = (): JSX.Element => (
  <div className={classNames("loader")}>
    <img src={img} alt="Loading" className={classNames("loader__image")} />
  </div>
);

export default Loader;
