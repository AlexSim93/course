import * as React from 'react';
import {shallow} from 'enzyme';
import Navbar from './index';
import Logo from '../Logo';


describe('Movie component', () => {
    test(
        'Should render Logo',
        () => {
            const navbar = shallow(<Navbar />);
            expect(navbar.find(Logo).exists()).toEqual(true);
        }
    ),
    test(
        'Should have class navbar',
        () => {
            const navbar = shallow(<Navbar />);
            expect(navbar.find('nav').hasClass('navbar')).toEqual(true);
        }
    )
});