import { connect } from 'react-redux';
import { resetMovies } from '../../actions';
import MovieList from '../../components/MovieList/index';

const mapStateToProps = (state: any, ownProps: any) => ({
    movies: state.entities.movies
});

const mapStateToDispatch = (dispatch: any) => ({
    resetMovies: () => dispatch(resetMovies())
});


export default connect(mapStateToProps, mapStateToDispatch)(MovieList);