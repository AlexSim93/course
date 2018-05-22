export const RESET_MOVIES = "RESET_MOVIES";
export const REMOVE_FROM_MOVIES = "REMOVE_FROM_MOVIES";
export const MOVIES_HAVE_ERROR = "MOVIES_HAVE_ERROR";
export const MOVIES_ARE_LOADING = "MOVIES_ARE_LOADING";
export const MOVIES_FETCH_DATA_SUCCESS = "MOVIES_FETCH_DATA_SUCCESS";
export const FILM_HAVE_ERROR = "FILM_HAVE_ERROR";
export const FILM_ARE_LOADING = "FILM_ARE_LOADING";
export const FILM_FETCH_DATA_SUCCESS = "FILM_FETCH_DATA_SUCCESS";
export const RESET_FILM = "RESET_FILM";
export const GET_FAVOURITES = "GET_FAVOURITES";
export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";
export const SORT_MOVIES = "SORT_MOVIES";
export const SET_SEARCH_TYPE = "SET_SEARCH_TYPE";
export const SortTypes = {
  RELEASE_DATE: "RELEASE_DATE",
  RATING: "RATING"
};
export const SearchTypes = {
  TITLE: "TITLE",
  TAGLINE: "TAGLINE"
};

export const resetMovies = () => ({
  type: RESET_MOVIES
});

export const removeFromMovies = (id: string | number) => ({
  type: REMOVE_FROM_MOVIES,
  payload: id
});

export const moviesAreLoading = (url: string) => ({
  type: MOVIES_ARE_LOADING,
  url
});

export const moviesHaveError = () => ({
  type: MOVIES_HAVE_ERROR
});

export const moviesFetchDataSuccess = (movies: any[]) => ({
  type: MOVIES_FETCH_DATA_SUCCESS,
  payload: movies
});

export const filmAreLoading = (url: string) => ({
  type: FILM_ARE_LOADING,
  url
});

export const filmHaveError = () => ({
  type: FILM_HAVE_ERROR
});

export const filmFetchDataSuccess = (film: any) => ({
  type: FILM_FETCH_DATA_SUCCESS,
  payload: film
});

export const resetFilm = () => ({
  type: RESET_FILM
});

export const sortMovies = (sortType: string) => ({
  type: SORT_MOVIES,
  sortType
});

export const setSearchType = (searchType: string) => ({
  type: SET_SEARCH_TYPE,
  searchType
});

export const getFavouritesFromStorage = (favouritesIds: any) => ({
  type: GET_FAVOURITES,
  payload: favouritesIds
});

export const toggleFavourite = (movieId: any) => ({
  type: TOGGLE_FAVOURITE,
  payload: movieId
});
