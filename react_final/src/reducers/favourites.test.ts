import { GET_FAVOURITES, TOGGLE_FAVOURITE} from '../actions';
import favourites from './favourites';

describe(
    'favourites reducer testing',
    () => {
        it('Should return list of favourites from localstorage', () => {
            expect(favourites([], {type: GET_FAVOURITES, payload: [{id: 122}, {id: 123}, {id: 124}]})).toEqual([{id: 122}, {id: 123}, {id: 124}]);
        });
        it('Should add favourites to store', () => {
            expect(favourites([{id: 102}], {type: TOGGLE_FAVOURITE, payload: {id: 122}})).toEqual([{id: 102}, {id: 122}]);
        });
        it('Should remove favourites from store', () => {
            expect(favourites([{id: 102}, {id: 103}], {type: TOGGLE_FAVOURITE, payload: {id: 103}})).toEqual([{id: 102}]);
        });
    }
);