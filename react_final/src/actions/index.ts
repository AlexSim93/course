export const MOVIES_HAVE_ERROR = 'MOVIES_HAVE_ERROR';
export const MOVIES_ARE_LOADING = 'MOVIES_ARE_LOADING';
export const MOVIES_FETCH_DATA_SUCCESS = 'MOVIES_FETCH_DATA_SUCCESS';
export const FILM_HAVE_ERROR = 'FILM_HAVE_ERROR';
export const FILM_ARE_LOADING = 'FILM_ARE_LOADING';
export const FILM_FETCH_DATA_SUCCESS = 'FILM_FETCH_DATA_SUCCESS';
export const FAVOURITES_HAVE_ERROR = 'FAVOURITES_HAVE_ERROR';
export const FAVOURITES_ARE_LOADING = 'FAVOURITES_ARE_LOADING';
export const FAVOURITES_FETCH_DATA_SUCCESS = 'FAVOURITES_FETCH_DATA_SUCCESS';
export const SORT_MOVIES = 'SORT_MOVIES';
export const SortTypes = {
    RELEASE_DATE: 'RELEASE_DATE',
    RATING: 'RATING'
};

export const moviesAreLoading = (url: string) => ({
    type: MOVIES_ARE_LOADING,
    url
});

export const moviesHaveError = () => (
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

export const filmAreLoading = (url: string) => ({
    type: FILM_ARE_LOADING,
    url
});

export const filmHaveError = () => (
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

export const favouritesAreLoading = (url: string) => ({
    type: FAVOURITES_ARE_LOADING,
    url
});

export const favouritesHaveError = () => (
    {
        type: FAVOURITES_HAVE_ERROR,
    }
);

export const favouritesFetchDataSuccess = (favourites: any) => (
    {
        type: FILM_FETCH_DATA_SUCCESS,
        payload: favourites,
    }
);

export const sortMovies = (sortType: string) => (
    {
        type: SORT_MOVIES,
        sortType
    }
);

