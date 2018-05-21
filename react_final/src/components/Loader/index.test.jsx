import * as React from 'react';
import {shallow} from 'enzyme';
import Loader from './index';

describe('Loader component', () => {
    test(
        'Rendering Loader',
        () => {
            const loader = shallow(<Loader />);
            expect(loader.find('img').exists()).toEqual(true);
        }
    );
});