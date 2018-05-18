import { connect } from 'react-redux';
import { moviesReset } from '../../actions/index';
import MovieList from '../../components/MoviesList/index';

const mapStateToProps = (state: any, ownProps: any) => ({
    movies: state.entities.movies
}); 

const mapStateToDispatch = (dispatch: any) => ({
    moviesReset: () => dispatch(moviesReset())
});

export default connect(mapStateToProps, mapStateToDispatch)(MovieList);