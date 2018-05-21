import * as React from 'react';
import {shallow} from 'enzyme';
import {SortTypes} from '../../actions';
import Sortbar from './index';
import TextDisplay from '../TextDisplay';
import Button from '../Button';

const setup = (sortType = SortTypes.RELEASE_DATE, result = 0) => { 
    const actions = {
        onSortByDate: jest.fn(),
        onSortByRating: jest.fn()
    };
    const component = shallow(<Sortbar result={result} sortType={sortType} {...actions}/>);
    return {
        component: component,
        actions: actions,
        buttons: component.find(Button),
        textDisplay: component.find(TextDisplay)
    }
};


describe('Sortbar component', () => {
    test(
        'Should render TextDisplay',
        () => {
            const {textDisplay} = setup(SortTypes.RATING ,10)
            expect(textDisplay.prop('text')).toEqual('10 movies found');
        }
    );
    test('first button should call onSortByDate', () => {
        const { buttons, actions } = setup();
        buttons.at(0).simulate('click');
        expect(actions.onSortByDate).toBeCalled();
    });
    test('second button should call onSortByRating', () => {
        const { buttons, actions } = setup();
        buttons.at(1).simulate('click');
        expect(actions.onSortByRating).toBeCalled();
    });
    test('second button should be inactive by default', () => {
        const { buttons } = setup();
        expect(buttons.at(1).prop('withoutBGInactive')).toEqual(true);
    });
    test('first button should be inactive if sort type is RATING', () => {
        const { buttons } = setup(SortTypes.RATING ,10);
        expect(buttons.at(0).prop('withoutBGInactive')).toEqual(true);
    });
});