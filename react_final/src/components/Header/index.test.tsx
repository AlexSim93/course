import * as React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import NavbarWithRouter from '../../containers/NavbarWithRouter';
import SearchbarWithRouter from '../../containers/SearchbarWithRouter';

describe('Footer component', () => {
    test(
        'Should render NavbarWithRouter',
        () => {
            const footer = shallow(<Header />);
            expect(footer.find(NavbarWithRouter).exists()).toEqual(true);
        }
    ),
    test(
        'Should render SearchbarWithRouter',
        () => {
            const footer = shallow(<Header />);
            expect(footer.find(SearchbarWithRouter).exists()).toEqual(true);
        }
    )
});