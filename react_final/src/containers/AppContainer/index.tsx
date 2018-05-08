import { connect } from 'react-redux';
import { moviesAreLoading } from '../../actions/index';
import App from '../../components/App';

const mapStateToProps = (state: any) => ({
    movies: state.reducer.movies,
});

const mapStateToDispatch = (dispatch: any) => ({
    fetchData: (url: any) => dispatch(moviesAreLoading(url)),
});

export default connect(mapStateToProps, mapStateToDispatch)(App);
