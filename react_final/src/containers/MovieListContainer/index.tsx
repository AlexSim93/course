import { connect } from 'react-redux';
import { moviesAreLoading } from '../../actions/index';
import MovieList from '../../components/MoviesList';

const mapStateToProps = (state: any) => ({
    movies: state.entities.movies,
    url: 'http://localhost:3000/movies'
});

const mapStateToDispatch = (dispatch: any) => ({
    fetchData: (url: string) => dispatch(moviesAreLoading(url)),
});

export default connect(mapStateToProps, mapStateToDispatch)(MovieList);