import { connect } from 'react-redux';
import MovieList from '../../components/MovieList/index';

const mapStateToProps = (state: any, ownProps: any) => ({
    movies: state.entities.movies,
    hasError: state.entities.error,
    isLoading: state.entities.fetching
});


export default connect(mapStateToProps)(MovieList);