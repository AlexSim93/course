import { connect } from "react-redux";
import { moviesAreLoading, SortTypes } from "../../actions/index";
import MovieList from "../../components/MovieList/index";

const getOrderedMovies = (movies: any, sortType: any) => {
  switch (sortType) {
    case SortTypes.RATING:
      return movies
        .slice()
        .sort((a: any, b: any) => b.vote_average - a.vote_average);
    case SortTypes.RELEASE_DATE:
      return movies
        .slice()
        .sort((a: any, b: any) => b.release_date - a.release_date);
    default:
      return movies;
  }
};

const mapStateToProps = (state: any, ownProps: any) => ({
  movies: getOrderedMovies(state.entities.movies, state.sortType),
  hasError: state.entities.error,
  isLoading: state.entities.fetching,
  url:
    ownProps.match.params.searchValue &&
    `${state.searchType.toLowerCase()}_like=${
      ownProps.match.params.searchValue
    }`
});

const mapStateToDispatch = (dispatch: any) => ({
  fetchMovies: (url: string) => dispatch(moviesAreLoading(url))
});

export default connect(mapStateToProps, mapStateToDispatch)(MovieList);
