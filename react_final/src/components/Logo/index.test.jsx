import * as React from 'react';
import {shallow} from 'enzyme';
import Logo from './index';

describe('Logo component', () => {
    test(
        'Rendering Logo',
        () => {
            const logo = shallow(<Logo text='Netflixroulette' />);
            expect(logo.find('.logo__text').text()).toEqual('Netflixroulette');
        }
    );
});