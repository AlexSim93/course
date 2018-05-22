import * as React from "react";
import { shallow } from "enzyme";
import { SearchTypes } from "../../actions";
import Form from "./index";
import TextField from "../TextField";
import Button from "../Button";

const setup = (searchValue = "", searchType = SearchTypes.TITLE) => {
  const actions = {
    fetchMovies: jest.fn(),
    setSearchByTitle: jest.fn(),
    setSearchByTagline: jest.fn()
  };
  const component = shallow(
    <Form
      history={{}}
      searchType={searchType}
      searchValue={searchValue}
      {...actions}
    />
  );
  return {
    component,
    actions,
    buttons: component.find(Button),
    textField: component.find(TextField)
  };
};

describe("Form component", () => {
  it("Should render TextField", () => {
    const { textField } = setup();
    expect(textField.exists()).toEqual(true);
  });
  it("first button should call setSearchByTitle", () => {
    const { buttons, actions } = setup();
    buttons.at(0).simulate("click");
    expect(actions.setSearchByTitle).toBeCalled();
  });
  it("second button should call setSearchByTagline", () => {
    const { buttons, actions } = setup();
    buttons.at(1).simulate("click");
    expect(actions.setSearchByTagline).toBeCalled();
  });
  it("second button should be inactive by default", () => {
    const { buttons } = setup();
    expect(buttons.at(1).prop("inactive")).toEqual(true);
  });
  it("first button should be inactive if search type is tagline", () => {
    const { buttons } = setup("", SearchTypes.TAGLINE);
    expect(buttons.at(0).prop("inactive")).toEqual(true);
  });
  it("TextField should receive value", () => {
    const { textField } = setup("text", SearchTypes.TAGLINE);
    expect(textField.prop("value")).toEqual("text");
  });
});
