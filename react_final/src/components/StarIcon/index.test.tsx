import * as React from 'react';
import {shallow} from 'enzyme';
import StarIcon from './index';

const setup = (isFavourite = false) => { 
    const actions = {
        addToFavourites: jest.fn(),
        removeFromFavourites: jest.fn(),
        removeFromMovieList: jest.fn()
    };
    const component = shallow(<StarIcon isFavourite={isFavourite} id={1} match={{path: ''}} {...actions}/>);
    return {
        component: component,
        actions: actions,
        icon: component.find('div')
    }
};


describe('TextField component', ()=> {
    it(
        'click on icon should call addToFavourites',
        ()=> {
            const {icon, actions} = setup(false);
            icon.simulate('click', { preventDefault() {}, stopPropagation() {} });
            expect(actions.addToFavourites).toBeCalled();
        }
    ),
    it(
        'click on icon should not call removeFromFavourites',
        ()=> {
            const {icon, actions} = setup(false);
            icon.simulate('click', { preventDefault() {}, stopPropagation() {} });
            expect(actions.removeFromFavourites).not.toBeCalled();
        }
    ),
    it(
        'click on icon should call removeFromFavourites',
        ()=> {
            const {icon, actions} = setup(true);
            icon.simulate('click', { preventDefault() {}, stopPropagation() {} });
            expect(actions.removeFromFavourites).toBeCalled();
        }
    ),
    it(
        'click on icon should not call addToFavourites',
        ()=> {
            const {icon, actions} = setup(true);
            icon.simulate('click', { preventDefault() {}, stopPropagation() {} });
            expect(actions.addToFavourites).not.toBeCalled();
        }
    ),
    it(
        'click on icon should not call removeFromMovieList',
        ()=> {
            const {icon, actions} = setup(true);
            icon.simulate('click', { preventDefault() {}, stopPropagation() {} });
            expect(actions.removeFromMovieList).not.toBeCalled();
        }
    )
});