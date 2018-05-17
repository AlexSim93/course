import {SearchTypes, SET_SEARCH_TYPE} from '../actions/index';

const searchType = (state = SearchTypes.TITLE, action: any) => {
    switch(action.type){
        case SET_SEARCH_TYPE:
            return action.searchType;
        default:
            return state;
    }
};

export default searchType;