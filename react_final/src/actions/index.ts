export const MOVIES_HAVE_ERROR = 'MOVIES_HAVE_ERROR';
export const MOVIES_ARE_LOADING = 'MOVIES_ARE_LOADING';
export const MOVIES_FETCH_DATA_SUCCESS = 'MOVIES_FETCH_DATA_SUCCESS';

export const moviesHaveError = (bool: boolean) => (
    {
        type: MOVIES_HAVE_ERROR,
        hasError: bool
    }
);

export const moviesAreLoading = (bool: boolean) => (
    {
        type: MOVIES_ARE_LOADING,
        isLoading: bool
    }
);


export const moviesFetchDataSuccess = (movies: Object[]) => (
    {
        type: MOVIES_FETCH_DATA_SUCCESS,
        movies
    }
);

export const fetchData = (url: string) => (dispatch: any) => {
    fetch(url)
        .then((response) => {
            if (response.status !== 200) {
                throw Error(response.statusText);
            }

            dispatch(moviesAreLoading(false));

            return response.json();
        })
        .then(
            (response) => dispatch(moviesFetchDataSuccess(response))
        )
        .catch(() => dispatch(moviesHaveError(true)));
};