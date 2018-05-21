import * as React from 'react';
import {shallow} from 'enzyme';
import ErrorBoundary from './index';
import TextDisplay from '../TextDisplay';

describe('ErrorBoundary component', () => {
    test(
        'Should render ErrorBoundary',
        () => {
            const errorBoundary = shallow(<ErrorBoundary/>);
            errorBoundary.setState({hasError: true});
            expect(errorBoundary.find(TextDisplay).exists()).toEqual(true);
        }
    )
});