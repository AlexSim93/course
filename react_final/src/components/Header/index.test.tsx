import * as React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import NavbarWithRouter from "../../containers/NavbarWithRouter";
import SearchbarWithRouter from "../../containers/SearchbarWithRouter";

describe("Header component", () => {
  it("Should render NavbarWithRouter", () => {
    const header = shallow(<Header />);
    expect(header.find(NavbarWithRouter).exists()).toEqual(true);
  });
  it("Should render SearchbarWithRouter", () => {
    const header = shallow(<Header />);
    expect(header.find(SearchbarWithRouter).exists()).toEqual(true);
  });
});
