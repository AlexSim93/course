import { connect } from 'react-redux';
import StarIcon from '../../components/StarIcon/index';
import {addToFavouritesAreLoading, removeFromFavouritesAreLoading} from '../../actions/index';

const mapStateToDispatch = (dispatch: any) => ({
    addToFavourites: (id: number) => dispatch(addToFavouritesAreLoading(id)),
    removeFromFavourites: (id: number) => dispatch(removeFromFavouritesAreLoading(id))
});

const mapStateToProps = (state: any, ownProps: any) => ({
    isFavourite: state.favourites.favouritesIds.some((currentValue: any) => currentValue.id === ownProps.id)
});

export default connect(mapStateToProps, mapStateToDispatch)(StarIcon);