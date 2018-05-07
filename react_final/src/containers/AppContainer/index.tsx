import { connect } from 'react-redux';
import { fetchData } from '../../actions/index';
import App from '../../components/App';

const mapStateToProps = (state) => ({
    movies: state.movies
}); 

const mapStateToDispatch = (dispatch) => ({
    fetchData: url => dispatch(fetchData(url))
});

export default connect(mapStateToProps, mapStateToDispatch)(App);