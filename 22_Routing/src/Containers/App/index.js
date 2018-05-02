import React, { Component } from 'react';
import classNames from 'classnames';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../../Components/Header/index';
import Movies from '../../Components/Movies/index';
import AddMovie from '../../Components/AddMovie/index';
import MovieForm from '../MovieForm/index';
import Loader from '../../Components/Loader/index';
import ErrorBoundary from '../ErrorBoundary/index';
import uniqid from 'uniqid';

import default_poster from '../../images/default_poster.jpg';
import './style.scss';

export default class App extends Component {

    state = {
        movies: [],
        isFetched: false
    }

    componentDidMount() {
        fetch('https://react-cdp-api.herokuapp.com/movies')
            .then(response => response.json())
            .then(arr => this.setState({ movies: arr.data, isFetched: true }))

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
                <Switch>
                    <Redirect exact from='/' to='/list' />
                    <Route exact path='/list' render={()=>(
                        <div>
                            <Header />
                            <AddMovie />
                            <Movies 
                                movies={this.state.movies}
                                onErrorPoster={this.onErrorPoster}
                                onDelete={this.onDelete}
                            />
                        </div>)}/>
                    <Route exact path='/add'
                        render={({history, match})=>(<MovieForm history={history}
                            match={match}
                            formTitle='Adding movie'
                            movies={this.state.movies}
                            onSubmitForm={this.onSubmitNewMovie}
                        />)}/>
                    <Route exact path='/edit/:id'
                        render={({history, match})=>
                            (this.state.isFetched ? 
                            <ErrorBoundary>
                                <MovieForm 
                                    history={history}
                                    match={match}
                                    isEdit
                                    formTitle='Editing movie'
                                    movies={this.state.movies}
                                    onSubmitForm={this.onSubmitEditMovie}
                                />
                            </ErrorBoundary> : <Loader />)}

                    />
                </ Switch>
            </div>
        );
    }

}