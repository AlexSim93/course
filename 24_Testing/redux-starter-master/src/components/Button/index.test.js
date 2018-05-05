import React from 'react';
import {shallow} from 'enzyme';
import Button from './index';

describe('Button component', () => {
    test(
        'Rendering Button',
        () => {
            const button = shallow(<Button text='+'/>);
            expect(button.text()).toEqual('+');
        }
    );
});
