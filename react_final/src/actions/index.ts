export const MOVIES_HAVE_ERROR = 'MOVIES_HAVE_ERROR';
export const MOVIES_RESET = 'MOVIES_RESET';
export const MOVIES_ARE_LOADING = 'MOVIES_ARE_LOADING';
export const MOVIES_FETCH_DATA_SUCCESS = 'MOVIES_FETCH_DATA_SUCCESS';
export const FILM_HAVE_ERROR = 'FILM_HAVE_ERROR';
export const FILM_ARE_LOADING = 'FILM_ARE_LOADING';
export const FILM_FETCH_DATA_SUCCESS = 'FILM_FETCH_DATA_SUCCESS';
export const FAVOURITES_HAVE_ERROR = 'FAVOURITES_HAVE_ERROR';
export const FAVOURITES_ARE_LOADING = 'FAVOURITES_ARE_LOADING';
export const FAVOURITES_FETCH_DATA_SUCCESS = 'FAVOURITES_FETCH_DATA_SUCCESS';
export const ADD_TO_FAVOURITES_ARE_LOADING = 'ADD_TO_FAVOURITES_ARE_LOADING';
export const REMOVE_FROM_FAVOURITES_ARE_LOADING = 'REMOVE_FROM_FAVOURITES_ARE_LOADING';
export const ADD_REMOVE_FAVOURITES_HAVE_ERROR = 'ADD_REMOVE_FAVOURITES_HAVE_ERROR';
export const ADD_REMOVE_FAVOURITES_SUCCESS = 'ADD_REMOVE_FAVOURITES_SUCCESS';
export const SORT_MOVIES = 'SORT_MOVIES';
export const SortTypes = {
    RELEASE_DATE: 'RELEASE_DATE',
    RATING: 'RATING'
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

interface IAddToFavouritesAreLoading {
    type: string;
    id: number | string;
};

interface IRemoveFromFavouritesAreLoading {
    type: string;
    id: number | string;
};

interface IAddRemoveFavouritesHaveError {
    type: string;
};

interface IAddRemoveFavouritesSuccess {
    type: string;
};

export const moviesAreLoading = (url: string): IDataAreLoading => ({
    type: MOVIES_ARE_LOADING,
    url
});

export const moviesHaveError = () : IDataHaveError => (
    {
        type: MOVIES_HAVE_ERROR,
    }
);

export const moviesReset = () => (
    {
        type: MOVIES_RESET
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

export const favouritesAreLoading = (url: string) : IDataAreLoading => ({
    type: FAVOURITES_ARE_LOADING,
    url
});

export const favouritesHaveError = () : IDataHaveError => (
    {
        type: FAVOURITES_HAVE_ERROR,
    }
);

export const favouritesFetchDataSuccess = (favourites: any) => (
    {
        type: FAVOURITES_FETCH_DATA_SUCCESS,
        payload: favourites,
    }
);

export const sortMovies = (sortType: string) : ISortMovies => (
    {
        type: SORT_MOVIES,
        sortType
    }
);

export const addToFavouritesAreLoading = (id: number | string) : IAddToFavouritesAreLoading => (
    {
        type: ADD_TO_FAVOURITES_ARE_LOADING,
        id
    }
);

export const removeFromFavouritesAreLoading = (id: number | string) : IRemoveFromFavouritesAreLoading => (
    {
        type: REMOVE_FROM_FAVOURITES_ARE_LOADING,
        id
    }
);

export const addRemoveFavouritesHaveError = () : IAddRemoveFavouritesHaveError => ({
    type: ADD_REMOVE_FAVOURITES_HAVE_ERROR
});

export const addRemoveFavouritesSuccess = () : IAddRemoveFavouritesSuccess => ({
    type: ADD_REMOVE_FAVOURITES_SUCCESS
});

