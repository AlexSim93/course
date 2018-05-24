import * as React from "react";
import * as classNames from "classnames";
import * as uniqid from "uniqid";

import "./style.scss";

interface ISwitchFieldProps {
  label: string;
  children: JSX.Element[];
  darkTheme?: boolean;
  uppercased?: boolean;
}

const SwitchField = ({
  label,
  children,
  darkTheme,
  uppercased
}: ISwitchFieldProps): JSX.Element => (
  <div className={classNames("switchfield")}>
    <span
      className={classNames("switchfield__label", {
        switchfield__label_theme_dark: darkTheme,
        switchfield__label_uppercased: uppercased
      })}
    >
      {label}
    </span>
    <div className={classNames("switchfield__buttons-container")}>
      {children.map((child: JSX.Element) => (
        <div
          key={uniqid()}
          className={classNames("switchfield__button-container")}
        >
          {child}
        </div>
      ))}
    </div>
  </div>
);

export default SwitchField;
