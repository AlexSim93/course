import * as React from 'react';
import {shallow} from 'enzyme';
import App from './index';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

describe('App component', () => {
    test(
        'Check Header in App',
        () => {
            const app = shallow(<App history={{}} match={{}} resetMovies={()=>{}} getFavourites={()=> {}}/>);
            expect(app.find(Header).exists()).toEqual(true);
        }
    ),
    test(
        'Check Main in App',
        () => {
            const app = shallow(<App history={{}} match={{}} resetMovies={()=>{}} getFavourites={()=> {}}/>);
            expect(app.find(Main).exists()).toEqual(true);
        }
    ),
    test(
        'Check Footer in App',
        () => {
            const app = shallow(<App history={{}} match={{}} resetMovies={()=>{}} getFavourites={()=> {}}/>);
            expect(app.find(Footer).exists()).toEqual(true);
        }
    )
});