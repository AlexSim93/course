import * as React from "react";
import { shallow } from "enzyme";
import Loader from "./index";

describe("Loader component", () => {
  it("should render img", () => {
    const loader = shallow(<Loader />);
    expect(loader.find("img").exists()).toEqual(true);
  });
});
