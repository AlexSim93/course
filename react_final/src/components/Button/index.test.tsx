import * as React from 'react';
import {mount} from 'enzyme';
import Button from './index';

describe('Button component', () => {
    test(
        'Check prop text',
        () => {
            const button = mount(<Button text='TITLE' />);
            expect(button.prop('text')).toEqual('TITLE');
        }
    );
});