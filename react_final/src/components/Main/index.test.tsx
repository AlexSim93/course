import * as React from 'react';
import {shallow} from 'enzyme';
import Main from './index';


describe('Movie component', () => {
    test(
        'Should render main',
        () => {
            const main = shallow(<Main />);
            expect(main.find('main').exists()).toEqual(true);
        }
    ),
    test(
        'Should have class main',
        () => {
            const main = shallow(<Main />);
            expect(main.find('main').hasClass('main')).toEqual(true);
        }
    )
});