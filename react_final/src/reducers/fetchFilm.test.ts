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
        { film: {}, error: false, fetching: false },
        { type: FILM_ARE_LOADING }
      )
    ).toEqual({ film: {}, error: false, fetching: true });
  });
  it("Should return error", () => {
    expect(
      chosenFilm(
        { film: {}, error: false, fetching: false },
        { type: FILM_HAVE_ERROR }
      )
    ).toEqual({ film: {}, error: true, fetching: false });
  });
  it("Should return data", () => {
    expect(
      chosenFilm(
        { film: {}, error: false, fetching: false },
        {
          type: FILM_FETCH_DATA_SUCCESS,
          payload: { id: 122, release_date: "1980-01-01" }
        }
      )
    ).toEqual({
      film: { id: 122, release_date: new Date("1980-01-01").getFullYear() },
      error: false,
      fetching: false
    });
  });
});
