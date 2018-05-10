export const MOVIES_HAVE_ERROR = 'MOVIES_HAVE_ERROR';
export const MOVIES_ARE_LOADING = 'MOVIES_ARE_LOADING';
export const MOVIES_FETCH_DATA_SUCCESS = 'MOVIES_FETCH_DATA_SUCCESS';

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


