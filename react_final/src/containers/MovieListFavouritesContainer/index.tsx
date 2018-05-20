import { connect } from 'react-redux';
import {map, join} from 'lodash';
import { moviesAreLoading, resetMovies } from '../../actions/index';
import MovieList from '../../components/MovieList/index';

const mapStateToProps = (state: any, ownProps: any) => ({
    movies: state.entities.movies,
    url: `${join(map(state.favourites, (favourite) => `id=${favourite.id}`), '&')}`
}); 

const mapStateToDispatch = (dispatch: any) => ({
    fetchMovies: (url: string) => dispatch(moviesAreLoading(url)),
    resetMovies: () => dispatch(resetMovies())
});

export default connect(mapStateToProps, mapStateToDispatch)(MovieList);