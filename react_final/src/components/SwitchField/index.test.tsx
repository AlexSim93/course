import * as React from 'react';
import {shallow} from 'enzyme';
import SwitchField from './index';

describe('SwitchField component', ()=> {
    test(
        'Should render label',
        ()=> {
            const switchField = shallow(<SwitchField label='sort by' children={null}/>);
            expect(switchField.find('.switchfield__label').text()).toEqual('sort by');
        }
    );
});