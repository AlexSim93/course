import * as React from "react";
import { shallow } from "enzyme";
import MovieInfo from "./index";
import StarIconWithRouter from "../../containers/StarIconWithRouter";

describe("MovieInfo component", () => {
  it("Should render StarIconWithRouter", () => {
    const movieInfo = shallow(
      <MovieInfo movie={{ release_date: new Date("2020-01-01") }} />
    );
    expect(movieInfo.find(StarIconWithRouter).exists()).toEqual(true);
  });
  it("Should render title", () => {
    const movieInfo = shallow(
      <MovieInfo
        movie={{ title: "MOVIE TITLE", release_date: new Date("2020-01-01") }}
      />
    );
    expect(movieInfo.find(".movie-info__title").text()).toEqual("MOVIE TITLE");
  });
  it("Should render release date", () => {
    const movieInfo = shallow(
      <MovieInfo movie={{ release_date: new Date("2020-01-01") }} />
    );
    expect(movieInfo.find(".movie-info__year").text()).toEqual("2020");
  });
});
