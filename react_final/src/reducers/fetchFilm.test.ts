import {
  FILM_ARE_LOADING,
  FILM_FETCH_DATA_SUCCESS,
  FILM_HAVE_ERROR
} from "../actions";
import chosenFilm from "./fetchFilm";

describe("chosenFilm reducer testing", () => {
  it("Should start loading", () => {
    expect(
      chosenFilm(
        { film: {}, isFetching: true, hasError: false },
        { type: FILM_ARE_LOADING }
      )
    ).toEqual({ film: {}, hasError: false, isFetching: true });
  });
  it("Should return error", () => {
    expect(
      chosenFilm(
        { film: {}, hasError: false, isFetching: false },
        { type: FILM_HAVE_ERROR }
      )
    ).toEqual({ film: {}, hasError: true, isFetching: false });
  });
  it("Should return data", () => {
    expect(
      chosenFilm(
        { film: {}, hasError: false, isFetching: false },
        {
          type: FILM_FETCH_DATA_SUCCESS,
          payload: { id: 122, release_date: "1980-01-01" }
        }
      )
    ).toEqual({
      film: { id: 122, release_date: new Date("1980-01-01").getFullYear() },
      hasError: false,
      isFetching: false
    });
  });
});
