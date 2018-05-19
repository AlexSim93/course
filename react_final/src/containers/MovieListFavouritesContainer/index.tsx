import { connect } from 'react-redux';
import {map, join} from 'lodash';
import { moviesAreLoading } from '../../actions/index';
import MovieList from '../../components/MoviesList/index';

const mapStateToProps = (state: any, ownProps: any) => ({
    movies: state.entities.movies,
    url: `${join(map(state.favourites, (favourite) => `id=${favourite.id}`), '&')}`
}); 

const mapStateToDispatch = (dispatch: any) => ({
    fetchData: (url: string) => dispatch(moviesAreLoading(url)),
});

export default connect(mapStateToProps, mapStateToDispatch)(MovieList);