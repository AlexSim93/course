import * as React from 'react';
import {shallow} from 'enzyme';
import App from './index';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

describe('App component', () => {
    it(
        'Should render Header',
        () => {
            const app = shallow(<App history={{}} match={{}} resetMovies={jest.fn()} getFavourites={jest.fn()} resetMovie={jest.fn()}/>);
            expect(app.find(Header).exists()).toEqual(true);
        }
    );
    it(
        'Should render Main',
        () => {
            const app = shallow(<App history={{}} match={{}} resetMovies={jest.fn()} getFavourites={jest.fn()} resetMovie={jest.fn()}/>);
            expect(app.find(Main).exists()).toEqual(true);
        }
    );
    it(
        'Should render Footer',
        () => {
            const app = shallow(<App history={{}} match={{}} resetMovies={jest.fn()} getFavourites={jest.fn()} resetMovie={jest.fn()}/>);
            expect(app.find(Footer).exists()).toEqual(true);
        }
    );
});