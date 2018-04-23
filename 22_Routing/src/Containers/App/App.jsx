import React, { Component } from 'react';
import classNames from 'classnames';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../../Components/Header/Header.jsx';
import Movies from '../../Components/Movies/Movies.jsx';
import AddMovie from '../../Components/AddMovie/AddMovie.jsx';
import MovieForm from '../../Components/MovieForm/MovieForm.jsx';
import uniqid from 'uniqid';

import default_poster from '../../images/default_poster.jpg';
import './App.scss';

export default class App extends Component {

    state = {
        movies: [],
        formData: {
            id: null,
            title: '',
            tagline: '',
            poster_path: '',
            overview: ''
        }
    }

    componentDidMount() {
        fetch('https://react-cdp-api.herokuapp.com/movies')
            .then(response => response.json())
            .then(arr => this.setState({ movies: arr.data }))
    }

    onAdd = () => {
        this.setState({
            formData: {
                id: null,
                title: '',
                tagline: '',
                poster_path: '',
                overview: ''
            }
        });
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
    onSubmitEditMovie = (formData) => {
        // const { title, tagline, poster_path, overview } = formData;
        this.setState({
            movies: this.state.movies.map(element => element.id === formData.id ? formData : element)
        });
    }

    onEdit = (movie) => {
        const { id, title, tagline, poster_path, overview } = movie;
        this.setState({
            formData: {
                id,
                title,
                tagline,
                poster_path,
                overview,
            }
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
                <AddMovie onAdd={this.onAdd} />
                <Switch>
                    <Route exact path='/'>
                        <Redirect to='/list/' />
                    </Route>
                    <Route exact path='/list' render={()=>(
                        <Movies 
                            movies={this.state.movies}
                            onErrorPoster={this.onErrorPoster}
                            onEdit={this.onEdit}
                            onDelete={this.onDelete}
                        />)}/>
                    <Route exact path='/add'
                        render={({history})=>(<MovieForm history={history}
                            title='Adding movie'
                            formData={this.state.formData}
                            onSubmitForm={this.onSubmitNewMovie}
                        />)}/>
                    <Route exact path='/edit/:id'
                        render={({history})=>(<MovieForm history={history}
                            title='Editing movie'
                            formData={this.state.formData}
                            onSubmitForm={this.onSubmitEditMovie}
                        />)}

                    />
                </ Switch>
            </div>
        );
    }

}