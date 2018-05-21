import * as React from 'react';
import {shallow} from 'enzyme';
import Main from './index';


describe('Main component', () => {
    it(
        'Should render main',
        () => {
            const main = shallow(<Main />);
            expect(main.find('main').exists()).toEqual(true);
        }
    );
    it(
        'Should have class main',
        () => {
            const main = shallow(<Main />);
            expect(main.find('main').hasClass('main')).toEqual(true);
        }
    );
});