import React, {Component} from 'react';
import classNames from 'classnames';
import Header from '../../Components/Header/Header.jsx';
import Movies from '../../Components/Movies/Movies.jsx';
import AddMovie from '../../Components/AddMovie/AddMovie.jsx';
import MovieForm from '../../Components/MovieForm/MovieForm.jsx';
import uniqid from 'uniqid';

import './App.scss';

export default class App extends Component {

    state = {
        movies: [],
        isFormOpened: false,
        isAddNewMovie: false,
        formData: {
            id: null,
            title: '',
            tagline: '',
            poster_path: '',
            overview: ''
        }
    }
    
    componentDidMount(){
        fetch('https://react-cdp-api.herokuapp.com/movies')
        .then(response=>response.json())
        .then(arr=> this.setState({movies: arr.data}))
    }
 
    onAdd = () => {
        this.setState({
            formData: {
                id:  null,
                title: '',
                tagline: '',
                poster_path: '',
                overview: ''
            },
            isAddNewMovie: true,
            isFormOpened: true
        });
    }

    onSubmitForm = (formData) => {
        const {title, tagline, poster_path, overview} = formData;
        if(this.state.isAddNewMovie){
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
        } else {
            this.setState({
                movies: this.state.movies.map(element => element.id === formData.id ? formData : element),
                isFormOpened: false
            });
        }
        
    }

    onCancelForm = () => {
        this.setState({isFormOpened: false});
    }

    onEdit = (movie) => {
        const {id, title, tagline, poster_path, overview} = movie;
        this.setState({
            formData: {
                id,
                title,
                tagline,
                poster_path,
                overview,
            },
            isAddNewMovie: false,
            isFormOpened: true
        });
    }

    onDelete = (movie) =>{
        this.setState({movies: this.state.movies.filter(element => element !== movie)});
    }

    render(){
        return (
        <div className={classNames('app')}>
            <Header />
            <AddMovie onAdd={this.onAdd}/>
            {this.state.isFormOpened ? <MovieForm 
                title={this.state.isAddNewMovie ? 'Adding movie' : 'Editing movie'} 
                formData={this.state.formData} 
                onSubmitForm={this.onSubmitForm} 
                onCancelForm={this.onCancelForm}/> : null}
            <Movies movies={this.state.movies} onEdit={this.onEdit} onDelete={this.onDelete}/>
        </div>
        );
    }

}