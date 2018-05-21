import * as React from 'react';
import {shallow} from 'enzyme';
import Searchbar from './index';

describe('Searchbar component', () => {
    it(
        'Should have class searchbar',
        () => {
            const searchbar = shallow(<Searchbar result={10} sortType='RELEASE_DATE' genre='Action' onSortByRating={()=>{}} onSortByDate={()=>{}}/>);
            expect(searchbar.hasClass('searchbar')).toEqual(true);
        }
    );
});