import { connect } from "react-redux";
import App from "../../components/App";
import {
  getFavouritesFromStorage,
  resetMovies,
  resetFilm
} from "../../actions";

const mapStateToProps = (state: any, ownProps: any) => ({
  favourites: state.favourites.favouritesIds
});

const mapStateToDispatch = (dispatch: any) => ({
  getFavourites: (item: any) => dispatch(getFavouritesFromStorage(item)),
  resetMovies: () => dispatch(resetMovies()),
  resetMovie: () => dispatch(resetFilm())
});

export default connect(mapStateToProps, mapStateToDispatch)(App);
