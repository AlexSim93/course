import {SearchTypes, SET_SEARCH_TYPE} from '../actions';
import searchType from './setSearchType';

describe(
    'searchType testing',
    () => {
        it('Should return search by tagline', () => {
            expect(searchType(SearchTypes.TITLE, {type: SET_SEARCH_TYPE, searchType: SearchTypes.TAGLINE})).toEqual(SearchTypes.TAGLINE);
        });
        it('Should return search by title', () => {
            expect(searchType(SearchTypes.TAGLINE, {type: SET_SEARCH_TYPE, searchType: SearchTypes.TITLE})).toEqual(SearchTypes.TITLE);
        });
    }
);