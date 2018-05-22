import { connect } from "react-redux";
import ChosenMovie from "../../components/ChosenMovie/index";
import { filmAreLoading } from "../../actions/index";

const mapStateToProps = (state: any, ownProps: any) => ({
  movie: state.chosenFilm.film,
  url: `http://localhost:3000/movies?title=${
    ownProps.match.params.film
  }&_limit=1`,
  hasError: state.chosenFilm.hasError,
  isLoading: state.chosenFilm.isFetching
});

const mapStateToDispatch = (dispatch: any) => ({
  fetchMovie: (url: string) => dispatch(filmAreLoading(url))
});

export default connect(mapStateToProps, mapStateToDispatch)(ChosenMovie);
