import { connect } from 'react-redux';
import {moviesAreLoading} from '../../actions';
import Navbar from '../../components/Navbar';

const mapStateToProps = (state: any, ownProps: any ) => ({
    favourites: state.favourites
});

const mapStateToDispatch = (dispatch: any) => ({
    fetchMovies: (url: string) => dispatch(moviesAreLoading(url)) 
});

export default connect(mapStateToProps, mapStateToDispatch)(Navbar);