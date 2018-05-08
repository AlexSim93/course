import {MOVIES_ARE_LOADING, MOVIES_HAVE_ERROR, MOVIES_FETCH_DATA_SUCCESS } from '../actions/index';

export const moviesHaveError = (state = false, action: any) => {
    switch (action.type) {
        case MOVIES_HAVE_ERROR:
            return action.hasError;
        default:
            return state;
    }
};

export const moviesAreLoading = (state = false, action: any) => {
    switch (action.type) {
        case MOVIES_ARE_LOADING:
            return action.isLoading;
        default:
            return state;
    }
};

export const movies = (state = [], action: any) => {
    switch (action.type) {
        case MOVIES_FETCH_DATA_SUCCESS:
            return action.movies;
        default:
            return state;
    }
};
