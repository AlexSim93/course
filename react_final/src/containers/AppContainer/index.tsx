import { connect } from 'react-redux';
import App from '../../components/App/index';
import {getFavouritesFromStorage} from '../../actions/index';

const mapStateToProps = (state: any, ownProps: any) => ({
    favourites: state.favourites.favouritesIds,
    url: 'http://localhost:3000/favourites'
});

const mapStateToDispatch = (dispatch: any) => ({
    fetchFavourites: (item: any) => dispatch(getFavouritesFromStorage(item)),
});

export default connect(mapStateToProps, mapStateToDispatch)(App);