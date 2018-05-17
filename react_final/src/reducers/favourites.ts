import  { ADD_TO_FAVOURITES, GET_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../actions';

const favourites = (state=[], action: any) => {
    switch(action.type){
        case GET_FAVOURITES:
            return [...action.payload];
        case ADD_TO_FAVOURITES:
            return [...state, action.payload];
        case REMOVE_FROM_FAVOURITES:
            return [...state.filter((element: any)=> element.id !== action.payload.id)];
        default:
            return state;
    }
};

export default favourites;