import {SearchTypes, SET_SEARCH_TYPE} from '../actions/index';

const searchType = (state = SearchTypes.TITLE, action: any) => {
    switch(action.type){
        case SET_SEARCH_TYPE:
            return SearchTypes.hasOwnProperty(action.searchType) ? action.searchType : state;
        default:
            return state;
    }
};

export default searchType;