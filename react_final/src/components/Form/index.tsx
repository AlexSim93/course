import * as React from "react";
import * as classNames from "classnames";
import TextField from "../TextField";
import SwitchField from "../SwitchField";
import Button from "../Button";
import { SearchTypes } from "../../actions";

import "./style.scss";

interface IFormProps {
  history: any;
  searchValue: string;
  searchType: string;
  fetchMovies(url: string): void;
  setSearchByTitle(): void;
  setSearchByTagline(): void;
}

interface IFormState {
  searchValue: string;
}

class Form extends React.Component<IFormProps, IFormState> {
  public static defaultProps: Partial<IFormProps> = {
    searchValue: ""
  };

  public state = {
    searchValue: this.props.searchValue
  };

  public onChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchValue: evt.target.value });
  };

  public render(): JSX.Element {
    return (
      <form
        className={classNames("form")}
        onSubmit={(evt: React.SyntheticEvent<HTMLElement>): void => {
          evt.preventDefault();
          this.props.history.push(`/search/${this.state.searchValue}`);
        }}
      >
        <TextField
          value={this.state.searchValue}
          onChange={this.onChange}
          id="search"
        />
        <div className={classNames("form__switchfield-container")}>
          <SwitchField darkTheme uppercased label="search by">
            <Button
              inactive={this.props.searchType !== SearchTypes.TITLE}
              sizeSm
              type="button"
              text="title"
              onClick={(): void => this.props.setSearchByTitle()}
            />
            <Button
              inactive={this.props.searchType !== SearchTypes.TAGLINE}
              sizeSm
              type="button"
              text="tagline"
              onClick={(): void => this.props.setSearchByTagline()}
            />
          </SwitchField>
        </div>
        <Button sizeLg type="submit" text="search" />
      </form>
    );
  }
}

export default Form;
