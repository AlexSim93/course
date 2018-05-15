import { connect } from 'react-redux';
import MovieInfo from '../../components/MovieInfo/index';
import {addToFavouritesAreLoading, removeFromFavouritesAreLoading} from '../../actions/index';

const mapStateToDispatch = (dispatch: any) => ({
    addToFavourites: (id: number) => dispatch(addToFavouritesAreLoading(id)),
    removeFromFavourites: (id: number) => dispatch(removeFromFavouritesAreLoading(id))
});

const mapStateToProps = (state: any, ownProps: any) => ({
    favourites: state.favourites.favouritesIds
});

export default connect(mapStateToProps, mapStateToDispatch)(MovieInfo);