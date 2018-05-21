import { MOVIES_ARE_LOADING, MOVIES_FETCH_DATA_SUCCESS, MOVIES_HAVE_ERROR } from '../actions';
import entities from './fetchMovies';


describe(
    'setting handling film loading',
    () => {
        it('Should start loading', () => {
            expect(entities({movies: [], error: false, fetching: false}, {type: MOVIES_ARE_LOADING})).toEqual({movies: [], error: false, fetching: true});
        });
        it('Should return error', () => {
            expect(entities({movies: [], error: false, fetching: true}, {type: MOVIES_HAVE_ERROR})).toEqual({movies: [], error: true, fetching: false});
        });
        it('Should fetch data ', () => {
            expect(entities({movies: [], error: false, fetching: true}, {type: MOVIES_FETCH_DATA_SUCCESS, payload: [{id: 122, release_date: '1980-01-01'}]})).toEqual({movies: [{id: 122, release_date: new Date('1980-01-01')}], error: false, fetching: false});
        });
    }
);