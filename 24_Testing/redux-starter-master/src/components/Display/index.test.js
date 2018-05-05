import React from 'react';
import {shallow} from 'enzyme';
import Display from './index';

describe('Display component', () => {
    test(
        'Rendering Display',
        () => {
            const display = shallow(<Display text={10}/>);
            expect(display.text()).toEqual('10');
        }
    );
});
