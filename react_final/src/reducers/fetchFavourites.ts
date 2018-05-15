import { FAVOURITES_ARE_LOADING, FAVOURITES_HAVE_ERROR, FAVOURITES_FETCH_DATA_SUCCESS } from '../actions/index';

const initialState = {
    favouritesIds: [],
    error: false,
    fetching: false
};

const favourites = (state = initialState, action: any) => {
    switch (action.type) {
        case FAVOURITES_ARE_LOADING:
          return { ...state, fetching: true, error: false };
        case FAVOURITES_FETCH_DATA_SUCCESS:
          return { ...state, fetching: false, favouritesIds: action.payload };
        case FAVOURITES_HAVE_ERROR:
          return { ...state, fetching: false, error: true };
        default:
          return state;
    }
}; 

export default favourites;