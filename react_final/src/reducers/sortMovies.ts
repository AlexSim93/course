import {SORT_MOVIES, SortTypes} from '../actions/index';

const sortType = (state = SortTypes.RELEASE_DATE, action: any) => {
    switch(action.type){
        case SORT_MOVIES:
            return action.sortType;
        default:
            return state;
    }
};

export default sortType;