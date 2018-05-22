import * as React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";
import MovieList from "./index";
import Loader from "../Loader";
import Movie from "../Movie";

const movies = [{ id: 11 }, { id: 12 }, { id: 13 }];

describe("MovieList component", () => {
  it("Should render Loader", () => {
    const movieList = shallow(
      <MovieList
        isLoading
        hasError={false}
        movies={[]}
        fetchMovies={jest.fn()}
      />
    );
    expect(movieList.find(Loader).exists()).toEqual(true);
  });
  it("Should be 3 Links", () => {
    const movieList = shallow(
      <MovieList
        isLoading={false}
        hasError={false}
        movies={movies}
        fetchMovies={jest.fn()}
      />
    );
    expect(movieList.find(Link)).toHaveLength(movies.length);
  });
  it("Should be 3 Movie", () => {
    const movieList = shallow(
      <MovieList
        isLoading={false}
        hasError={false}
        movies={movies}
        fetchMovies={jest.fn()}
      />
    );
    expect(movieList.find(Movie)).toHaveLength(movies.length);
  });
});
