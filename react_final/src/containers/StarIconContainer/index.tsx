import { connect } from 'react-redux';
 import { some } from 'lodash';
import StarIcon from '../../components/StarIcon';
import {addFavouritesToStorage, removeFavouritesFromStorage, removeFromMovies} from '../../actions';

const mapStateToDispatch = (dispatch: any) => ({
    addToFavourites: (id: number) => dispatch(addFavouritesToStorage({id})),
    removeFromFavourites: (id: number) => dispatch(removeFavouritesFromStorage({id})),
    removeFromMovieList: (id: number|string) => dispatch(removeFromMovies(id))
});

const mapStateToProps = (state: any, ownProps: any) => ({
    isFavourite: some(state.favourites, {id: ownProps.id})
});

export default connect(mapStateToProps, mapStateToDispatch)(StarIcon);