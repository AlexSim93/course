import { connect } from 'react-redux';
import StarIcon from '../../components/StarIcon/index';
import {addFavouritesToStorage, removeFavouritesFromStorage} from '../../actions/index';

const mapStateToDispatch = (dispatch: any) => ({
    addToFavourites: (id: number) => {
        localStorage.setItem('favourites', JSON.stringify({id}));
        return dispatch(addFavouritesToStorage({id}));
    },
    removeFromFavourites: (id: number) => {
        return dispatch(removeFavouritesFromStorage({id}));
    }
});

const mapStateToProps = (state: any, ownProps: any) => ({
    isFavourite: state.favourites.favouritesIds.some((currentValue: any) => currentValue.id === ownProps.id)
});

export default connect(mapStateToProps, mapStateToDispatch)(StarIcon);