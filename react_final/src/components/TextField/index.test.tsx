import * as React from 'react';
import {shallow} from 'enzyme';
import TextField from './index';

describe('TextField component', ()=> {
    test(
        'input should be in component',
        ()=> {
            const textField = shallow(<TextField value='example' id='120'/>);
            expect(textField.find('input').exists()).toEqual(true);
        }
    );
    test(
        'input value should be equal to prop value',
        ()=> {
            const textField = shallow(<TextField value='example' id='120'/>);
            expect(textField.find('input').props().value).toEqual('example');
        }
    )
});