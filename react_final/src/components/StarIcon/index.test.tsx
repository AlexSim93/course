import * as React from 'react';
import {shallow} from 'enzyme';
import StarIcon from './index';

const setup = (isFavourite = false) => { 
    const actions = {
        toggleFavourite: jest.fn(),
        removeFromMovieList: jest.fn()
    };
    const component = shallow(<StarIcon isFavourite={isFavourite} id={1} match={{path: ''}} {...actions}/>);
    return {
        component,
        actions,
        icon: component.find('div')
    }
};


describe('StarIcon component', ()=> {
    it(
        'click on icon should call toggleFavourite',
        ()=> {
            const {icon, actions} = setup(true);
            icon.simulate('click', {preventDefault: jest.fn(), stopPropagation: jest.fn()});
            expect(actions.toggleFavourite).toBeCalled();
        }
    );
    
    it(
        'click on icon should not call removeFromMovieList',
        ()=> {
            const {icon, actions} = setup(true);
            icon.simulate('click', {preventDefault: jest.fn(), stopPropagation: jest.fn()});
            expect(actions.removeFromMovieList).not.toBeCalled();
        }
    );
});