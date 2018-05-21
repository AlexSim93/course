import {SORT_MOVIES, SortTypes} from '../actions';
import sortType from './sortMovies';

describe(
    'setting sort type',
    () => {
        it('Should return sort by rating', () => {
            expect(sortType(SortTypes.RELEASE_DATE, {type: SORT_MOVIES, sortType: SortTypes.RATING})).toEqual(SortTypes.RATING);
        });
        it('Should return sort by release date', () => {
            expect(sortType(SortTypes.RATING, {type: SORT_MOVIES, sortType: SortTypes.RELEASE_DATE})).toEqual(SortTypes.RELEASE_DATE);
        });
    }
);