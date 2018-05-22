import { connect } from "react-redux";
import { map, join } from "lodash";
import { moviesAreLoading } from "../../actions/index";
import MovieList from "../../components/MovieList/index";

const mapStateToProps = (state: any, ownProps: any) => ({
  movies: state.entities.movies,
  hasError: state.entities.hasError,
  isLoading: state.entities.isFetching,
  url: `${join(map(state.favourites, favourite => `id=${favourite.id}`), "&")}`
});

const mapStateToDispatch = (dispatch: any) => ({
  fetchMovies: (url: string) => dispatch(moviesAreLoading(url))
});

export default connect(mapStateToProps, mapStateToDispatch)(MovieList);
