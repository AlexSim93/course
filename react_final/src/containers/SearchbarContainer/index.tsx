import { connect } from "react-redux";
import { isArray } from "lodash";
import Searchbar from "../../components/Searchbar";
import { sortMovies, SortTypes } from "../../actions/index";

const mapStateToProps = (state: any) => ({
  result: state.entities.movies.length,
  sortType: state.sortType,
  genre: isArray(state.chosenFilm.film.genres)
    ? state.chosenFilm.film.genres[0]
    : state.chosenFilm.film.genres
});

const mapDispatchToProps = (dispatch: any) => ({
  onSortByDate: () => dispatch(sortMovies(SortTypes.RELEASE_DATE)),
  onSortByRating: () => dispatch(sortMovies(SortTypes.RATING))
});

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar) as any;
