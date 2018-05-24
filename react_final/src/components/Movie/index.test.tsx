import * as React from "react";
import { shallow } from "enzyme";
import Movie from "./index";
import Poster from "../Poster";
import MovieInfo from "../MovieInfo";

describe("Movie component", () => {
  it("Should render Poster", () => {
    const movie = shallow(<Movie movie={{}}/>);
    expect(movie.find(Poster).exists()).toEqual(true);
  });
  it("Should render MovieInfo", () => {
    const movie = shallow(<Movie movie={{}}/>);
    expect(movie.find(MovieInfo).exists()).toEqual(true);
  });
});
