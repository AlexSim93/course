import * as React from 'react';
import {shallow} from 'enzyme';
import Footer from './index';
import Logo from '../Logo';

describe('Footer component', () => {
    test(
        'Checking Logo in component',
        () => {
            const footer = shallow(<Footer />);
            expect(footer.find(Logo).exists()).toEqual(true);
        }
    )
});