import { GET_FAVOURITES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../actions';
import favourites from './favourites';

describe(
    'setting handling favourites',
    () => {
        it('Should return list of favourites from localstorage', () => {
            expect(favourites([], {type: GET_FAVOURITES, payload: [{id: 122}, {id: 123}, {id: 124}]})).toEqual([{id: 122}, {id: 123}, {id: 124}]);
        });
        it('Should add favourites to store', () => {
            expect(favourites([{id: 102}], {type: ADD_TO_FAVOURITES, payload: {id: 122}})).toEqual([{id: 102}, {id: 122}]);
        });
        it('Should remove favourites from store', () => {
            expect(favourites([{id: 102}, {id: 103}], {type: REMOVE_FROM_FAVOURITES, payload: {id: 103}})).toEqual([{id: 102}]);
        });
    }
);