import {
  FILM_ARE_LOADING,
  FILM_HAVE_ERROR,
  FILM_FETCH_DATA_SUCCESS,
  RESET_FILM
} from "../actions/index";

const initialState = {
  film: {},
  hasError: false,
  isFetching: false
};

const chosenFilm = (state = initialState, action: any) => {
  switch (action.type) {
    case FILM_ARE_LOADING:
      return { ...state, isFetching: true, hasError: false };
    case FILM_FETCH_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        film: {
          ...action.payload,
          release_date: new Date(action.payload.release_date).getFullYear()
        }
      };
    case FILM_HAVE_ERROR:
      return { ...state, isFetching: false, hasError: true };
    case RESET_FILM:
      return { ...state, film: {} };
    default:
      return state;
  }
};

export default chosenFilm;
