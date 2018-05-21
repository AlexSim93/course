import * as React from 'react';
import {shallow} from 'enzyme';
import SwitchField from './index';

describe('SwitchField component', ()=> {
    test(
        'Checking text in label',
        ()=> {
            const switchField = shallow(<SwitchField label='sort by' children={null}/>);
            expect(switchField.find('.switchfield__label').text()).toEqual('sort by');
        }
    )
});