import { MOVIES_ARE_LOADING, MOVIES_HAVE_ERROR, MOVIES_FETCH_DATA_SUCCESS } from '../actions/index';

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
          return { ...state, fetching: false, movies: action.payload };
        case MOVIES_HAVE_ERROR:
          return { ...state, fetching: false, error: true };
        default:
          return state;
    }
}; 

export default entities;
