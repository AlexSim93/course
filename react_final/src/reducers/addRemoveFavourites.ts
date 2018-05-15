import { ADD_TO_FAVOURITES_ARE_LOADING, REMOVE_FROM_FAVOURITES_ARE_LOADING, ADD_REMOVE_FAVOURITES_HAVE_ERROR, ADD_REMOVE_FAVOURITES_SUCCESS } from '../actions/index';

const initialState = {
    error: false,
    loading: false
};

const changingFavourites = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES_ARE_LOADING:
        case REMOVE_FROM_FAVOURITES_ARE_LOADING:
          return {loading: true, error: false };
        case ADD_REMOVE_FAVOURITES_SUCCESS:
          return { loading: false };
        case ADD_REMOVE_FAVOURITES_HAVE_ERROR:
          return { loading: false, error: true };
        default:
          return state;
    }
}; 

export default changingFavourites;