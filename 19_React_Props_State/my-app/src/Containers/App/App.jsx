import React, { Component } from 'react';
import classNames from 'classnames';
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
        isFormOpened: false,
        currentMovie: {}
    }

    componentDidMount() {
        fetch('https://react-cdp-api.herokuapp.com/movies')
            .then(response => response.json())
            .then(arr => this.setState({ movies: arr.data }))
    }

    onAdd = () => {
        this.setState({
            currentMovie: {},
            isFormOpened: true
        });
    }

    onSubmitForm = (formData) => {
        const { title, tagline, poster_path, overview } = formData;
        if (this.state.movies.some(movie => movie === this.state.currentMovie)) {
            this.setState({
                movies: this.state.movies.map(
                    element => element === this.state.currentMovie ?  
                    Object.assign(element, formData) : element),
                isFormOpened: false
            });
        } else {
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
                ],
                isFormOpened: false
            });
        }

    }

    onCancelForm = () => {
        this.setState({ isFormOpened: false });
    }

    onEdit = (movie) => {
        this.setState({
            currentMovie: movie,
            isFormOpened: true
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
                {this.state.isFormOpened && <MovieForm
                    formTitle={this.state.currentMovie.id ? 'Editing movie' : 'Adding movie'}
                    currentMovie={this.state.currentMovie}
                    onSubmitForm={this.onSubmitForm}
                    onCancelForm={this.onCancelForm} />}
                <Movies movies={this.state.movies}
                    onErrorPoster={this.onErrorPoster}
                    onEdit={this.onEdit}
                    onDelete={this.onDelete} />
            </div>
        );
    }

}