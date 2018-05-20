export const RESET_MOVIES = 'RESET_MOVIES';
export const MOVIES_HAVE_ERROR = 'MOVIES_HAVE_ERROR';
export const MOVIES_ARE_LOADING = 'MOVIES_ARE_LOADING';
export const MOVIES_FETCH_DATA_SUCCESS = 'MOVIES_FETCH_DATA_SUCCESS';
export const FILM_HAVE_ERROR = 'FILM_HAVE_ERROR';
export const FILM_ARE_LOADING = 'FILM_ARE_LOADING';
export const FILM_FETCH_DATA_SUCCESS = 'FILM_FETCH_DATA_SUCCESS';
export const GET_FAVOURITES = 'GET_FAVOURITES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SORT_MOVIES = 'SORT_MOVIES';
export const SET_SEARCH_TYPE = 'SET_SEARCH_TYPE';
export const SortTypes = {
    RELEASE_DATE: 'RELEASE_DATE',
    RATING: 'RATING'
};
export const SearchTypes = {
    TITLE: 'title',
    TAGLINE: 'tagline'
};

interface IDataAreLoading {
    type: string;
    url: string;
};

interface IDataHaveError {
    type: string;
};

interface ISortMovies {
    type: string;
    sortType: string;
};

export const resetMovies = () => ({
    type: RESET_MOVIES
});

export const moviesAreLoading = (url: string): IDataAreLoading => ({
    type: MOVIES_ARE_LOADING,
    url
});

export const moviesHaveError = () : IDataHaveError => (
    {
        type: MOVIES_HAVE_ERROR,
    }
);

export const moviesFetchDataSuccess = (movies: any[]) => (
    {
        type: MOVIES_FETCH_DATA_SUCCESS,
        payload: movies,
    }
);

export const filmAreLoading = (url: string): IDataAreLoading => ({
    type: FILM_ARE_LOADING,
    url
});

export const filmHaveError = () : IDataHaveError => (
    {
        type: FILM_HAVE_ERROR,
    }
);

export const filmFetchDataSuccess = (film: any) => (
    {
        type: FILM_FETCH_DATA_SUCCESS,
        payload: film,
    }
);

export const sortMovies = (sortType: string) : ISortMovies => (
    {
        type: SORT_MOVIES,
        sortType
    }
);

export const setSearchType = (searchType: string) => ({
    type: SET_SEARCH_TYPE,
    searchType
});

export const getFavouritesFromStorage = (favouritesIds: any) => ({
    type: GET_FAVOURITES,
    payload: favouritesIds
});

export const addFavouritesToStorage = (movieId: any) => ({
    type: ADD_TO_FAVOURITES,
    payload: movieId
});

export const removeFavouritesFromStorage = (movieId: any) => ({
    type: REMOVE_FROM_FAVOURITES,
    payload: movieId
});

