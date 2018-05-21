import * as React from 'react';
import {shallow} from 'enzyme';
import Form from './index';
import TextField from '../TextField';
import Button from '../Button';

const setup = (searchValue = '', searchType='title') => { 
    const actions = {
        fetchMovies: jest.fn(),
        setSearchByTitle: jest.fn(),
        setSearchByTagline: jest.fn()
    };
    const component = shallow(<Form history={{}} searchType={searchType} searchValue={searchValue} {...actions}/>);
    return {
        component: component,
        actions: actions,
        buttons: component.find(Button),
        textField: component.find(TextField)
    }
};


describe('Form component', () => {
    test(
        'Should render TextField',
        () => {
            const {textField} = setup()
            expect(textField.exists()).toEqual(true);
        }
    ),
    test('first button should call setSearchByTitle', () => {
        const { buttons, actions } = setup();
        buttons.at(0).simulate('click');
        expect(actions.setSearchByTitle).toBeCalled();
    }),
    test('second button should call setSearchByTagline', () => {
        const { buttons, actions } = setup();
        buttons.at(1).simulate('click');
        expect(actions.setSearchByTagline).toBeCalled();
    }),
    test('second button should be inactive by default', () => {
        const { buttons } = setup();
        expect(buttons.at(1).prop('inactive')).toEqual(true);
    }),
    test('first button should be inactive if search type is tagline', () => {
        const { buttons } = setup('', 'tagline');
        expect(buttons.at(0).prop('inactive')).toEqual(true);
    }),
    test('TextField should receive value', () => {
        const { textField } = setup('text', 'tagline');
        expect(textField.prop('value')).toEqual('text');
    })
});