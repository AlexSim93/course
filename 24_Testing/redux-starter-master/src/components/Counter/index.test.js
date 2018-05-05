import React from 'react';
import { shallow } from 'enzyme';
import Counter from './index';
import Button from '../Button/index';

const setup = (value = 0) => { 
    const actions = {
        onIncrement: jest.fn(),
        onDecrement: jest.fn()
    };
    const component = shallow(<Counter displayText={value} {...actions}/>);
    return {
        component: component,
        actions: actions,
        buttons: component.find(Button)
    }
};

describe('Counter component', () => {
    it('first button should call onDecrement', () => {
        const { buttons, actions } = setup();
        buttons.at(0).simulate('click');
        expect(actions.onDecrement).toBeCalled();
    });
    it('second button should not call onDecrement', () => {
        const { buttons, actions } = setup();
        buttons.at(1).simulate('click');
        expect(actions.onDecrement).not.toBeCalled();
    });
    it('second button should call onIncrement', () => {
        const { buttons, actions } = setup();
        buttons.at(1).simulate('click');
        expect(actions.onIncrement).toBeCalled();
    });
    it('first button should not call onIncrement', () => {
        const { buttons, actions } = setup();
        buttons.at(0).simulate('click');
        expect(actions.onIncrement).not.toBeCalled();
    });
});