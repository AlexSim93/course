import * as React from "react";
import * as classNames from "classnames";
import TextDisplay from "../TextDisplay";

import "./style.scss";

interface IErrorBoundaryState {
  hasError: boolean;
  error: string;
}

interface IErrorBoundaryProps {
  children: JSX.Element[]|JSX.Element
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  public state = {
    hasError: false,
    error: ""
  };

  public componentDidCatch(error: any): void {
    this.setState({
      hasError: true,
      error
    });
  }

  public render(): JSX.Element|JSX.Element[] {
    if (this.state.hasError) {
      return (
        <div className={classNames("error-message")}>
          <TextDisplay
            sizeLg
            light
            text={this.state.error && this.state.error.toString()}
          />
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
