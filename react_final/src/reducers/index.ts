import { combineReducers } from "redux";
import {movies, moviesAreLoading, moviesHaveError } from "./fetch";

const reducers = combineReducers({
    moviesHaveError,
    moviesAreLoading,
    movies,
});

export default reducers;
