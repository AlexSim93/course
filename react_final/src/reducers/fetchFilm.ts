import { FILM_ARE_LOADING, FILM_HAVE_ERROR, FILM_FETCH_DATA_SUCCESS } from '../actions/index';

const initialState = {
    film: {},
    error: false,
    fetching: false
};

const chosenFilm = (state = initialState, action: any) => {
    switch (action.type) {
        case FILM_ARE_LOADING:
          return { ...state, fetching: true, error: false };
        case FILM_FETCH_DATA_SUCCESS:
          return { ...state, fetching: false, film: {...action.payload, release_date: new Date(action.payload.release_date).getFullYear()} };
        case FILM_HAVE_ERROR:
          return { ...state, fetching: false, error: true };
        default:
          return state;
    }
}; 

export default chosenFilm;