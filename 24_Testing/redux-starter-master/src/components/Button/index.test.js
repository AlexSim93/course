import React from 'react';
import {shallow} from 'enzyme';
import Button from './index';


test(
    'Rendering Button',
    () => {
        const button = shallow(<Button type='button' className='button' text='+'/>);
        expect(button.text()).toEqual('+');
    }
);