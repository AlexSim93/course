import {
  MOVIES_ARE_LOADING,
  MOVIES_FETCH_DATA_SUCCESS,
  MOVIES_HAVE_ERROR
} from "../actions";
import entities from "./fetchMovies";

describe("entities reducer testing", () => {
  it("Should start loading", () => {
    expect(
      entities(
        { movies: [], hasError: false, isFetching: false },
        { type: MOVIES_ARE_LOADING }
      )
    ).toEqual({ movies: [], hasError: false, isFetching: true });
  });
  it("Should return error", () => {
    expect(
      entities(
        { movies: [], hasError: false, isFetching: true },
        { type: MOVIES_HAVE_ERROR }
      )
    ).toEqual({ movies: [], hasError: true, isFetching: false });
  });
  it("Should return data", () => {
    expect(
      entities(
        { movies: [], isFetching: true, hasError: false },
        {
          type: MOVIES_FETCH_DATA_SUCCESS,
          payload: [{ id: 122, release_date: "1980-01-01" }]
        }
      )
    ).toEqual({
      movies: [{ id: 122, release_date: new Date("1980-01-01") }],
      hasError: false,
      isFetching: false
    });
  });
});
