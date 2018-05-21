import * as React from 'react';
import {mount} from 'enzyme';
import Button from './index';

describe('Button component', () => {
    it(
        'Should render button',
        () => {
            const button = mount(<Button text='TITLE' />);
            expect(button.prop('text')).toEqual('TITLE');
        }
    );
});