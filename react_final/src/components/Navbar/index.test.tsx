import * as React from 'react';
import {shallow} from 'enzyme';
import Navbar from './index';
import Logo from '../Logo';


describe('Navbar component', () => {
    it(
        'Should render Logo',
        () => {
            const navbar = shallow(<Navbar />);
            expect(navbar.find(Logo).exists()).toEqual(true);
        }
    );
    it(
        'Should have class navbar',
        () => {
            const navbar = shallow(<Navbar />);
            expect(navbar.find('nav').hasClass('navbar')).toEqual(true);
        }
    );
});