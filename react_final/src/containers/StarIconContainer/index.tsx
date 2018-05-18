import { connect } from 'react-redux';
import { some, filter } from 'lodash';
import StarIcon from '../../components/StarIcon';
import {addFavouritesToStorage, removeFavouritesFromStorage} from '../../actions';
import {loadFavourites} from '../../store';

const mapStateToDispatch = (dispatch: any) => ({
    addToFavourites: (id: number) => {
        localStorage.setItem('favourites', JSON.stringify({id}));
        return dispatch(addFavouritesToStorage({id}));
    },
    removeFromFavourites: (id: number) => {
        const favourites = loadFavourites();
        if(favourites){
            const favouritesWithoutRemovedItem = filter(favourites, !id);
            localStorage.setItem('favourites', JSON.stringify(favouritesWithoutRemovedItem));
        }
        return dispatch(removeFavouritesFromStorage({id}));
    }
});

const mapStateToProps = (state: any, ownProps: any) => ({
    isFavourite: some(state.favourites, {id: ownProps.id})
});

export default connect(mapStateToProps, mapStateToDispatch)(StarIcon);