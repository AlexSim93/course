import * as React from 'react';
import {shallow} from 'enzyme';
import Poster from './index';

describe('Poster component', () => {
    test(
        'Rendering Loader',
        () => {
            const poster = shallow(<Poster movie={{}}/>);
            expect(poster.find('img').exists()).toEqual(true);
        }
    );
});