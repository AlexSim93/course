import { connect } from 'react-redux';
import App from '../../components/App/index';
import {getFavouritesFromStorage} from '../../actions/index';

const mapStateToProps = (state: any, ownProps: any) => ({
    favourites: state.favourites.favouritesIds
});

const mapStateToDispatch = (dispatch: any) => ({
    getFavourites: (item: any) => dispatch(getFavouritesFromStorage(item)),
});

export default connect(mapStateToProps, mapStateToDispatch)(App);