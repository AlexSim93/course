import * as React from 'react';
import {shallow} from 'enzyme';
import TextDisplay from './index';

describe('TextDisplay component', () => {
    test(
        'Rendering Display',
        () => {
            const textDisplay = shallow(<TextDisplay text='No movie found' />);
            expect(textDisplay.find('.text-display__text').text()).toEqual('No movie found');
        }
    );
});
