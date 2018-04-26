import React, { Component } from 'react';
import classNames from 'classnames';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../../Components/Header/Header.jsx';
import Movies from '../../Components/Movies/Movies.jsx';
import AddMovie from '../../Components/AddMovie/AddMovie.jsx';
import MovieForm from '../MovieForm/MovieForm.jsx';
import uniqid from 'uniqid';

import default_poster from '../../images/default_poster.jpg';
import './App.scss';

export default class App extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        fetch('https://react-cdp-api.herokuapp.com/movies')
            .then(response => response.json())
            .then(arr => this.setState({ movies: arr.data }))

    }

    onSubmitNewMovie = (formData) => {
        const { title, tagline, poster_path, overview } = formData;
        this.setState({
            movies: [
                ...this.state.movies,
                {
                    id: uniqid(),
                    title,
                    tagline,
                    poster_path,
                    overview
                }
            ]
        });
    }
    onSubmitEditMovie = (formData, id) => {
        this.setState({
            movies: this.state.movies.map(element => element.id.toString() === id.toString() ? Object.assign(element, formData) : element)
        });
    }

    onDelete = (movie) => {
        this.setState({ movies: this.state.movies.filter(element => element !== movie) });
    }

    onErrorPoster = (evt) => {
        evt.target.src = default_poster;
    }

    render() {
        return (
            <div className={classNames('app')}>
                <Header />
                <AddMovie />
                <Switch>
                    <Redirect exact from='/' to='/list' />
                    <Route exact path='/list' render={()=>(
                        <Movies 
                            movies={this.state.movies}
                            onErrorPoster={this.onErrorPoster}
                            onDelete={this.onDelete}
                        />)}/>
                    <Route exact path='/add'
                        render={({history, match})=>(<MovieForm history={history}
                            match={match}
                            formTitle='Adding movie'
                            movies={this.state.movies}
                            onSubmitForm={this.onSubmitNewMovie}
                        />)}/>
                    <Route exact path='/edit/:id'
                        render={({history, match})=>(<MovieForm history={history}
                            match={match}
                            formTitle='Editing movie'
                            movies={this.state.movies}
                            onSubmitForm={this.onSubmitEditMovie}
                        />)}

                    />
                </ Switch>
            </div>
        );
    }

}