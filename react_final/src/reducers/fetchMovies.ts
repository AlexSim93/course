import {
  MOVIES_ARE_LOADING,
  MOVIES_HAVE_ERROR,
  MOVIES_FETCH_DATA_SUCCESS,
  RESET_MOVIES,
  REMOVE_FROM_MOVIES
} from "../actions/index";

const initialState = {
  movies: [],
  error: false,
  fetching: false
};

const entities = (state = initialState, action: any) => {
  switch (action.type) {
    case MOVIES_ARE_LOADING:
      return { ...state, fetching: true, error: false };
    case MOVIES_FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetching: false,
        movies: action.payload.map((element: any) => ({
          ...element,
          release_date: new Date(element.release_date)
        }))
      };
    case MOVIES_HAVE_ERROR:
      return { ...state, fetching: false, error: true };
    case RESET_MOVIES:
      return { movies: [], fetching: false, error: false };
    case REMOVE_FROM_MOVIES:
      return {
        fetching: false,
        error: false,
        movies: state.movies.filter((movie: any) => movie.id !== action.payload)
      };
    default:
      return state;
  }
};

export default entities;
