import { connect } from 'react-redux';
 import { some } from 'lodash';
import StarIcon from '../../components/StarIcon';
import {addFavouritesToStorage, removeFavouritesFromStorage} from '../../actions';

const mapStateToDispatch = (dispatch: any) => ({
    addToFavourites: (id: number) => {
        return dispatch(addFavouritesToStorage({id}));
    },
    removeFromFavourites: (id: number) => {
        return dispatch(removeFavouritesFromStorage({id}));
    }
});

const mapStateToProps = (state: any, ownProps: any) => ({
    isFavourite: some(state.favourites, {id: ownProps.id})
});

export default connect(mapStateToProps, mapStateToDispatch)(StarIcon);