import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
import MovieForm from './Containers/MovieForm';

class App extends React.Component {
    state = {
        movies: [],
        isFormOpened: false,
        formData: {
            id: 0,
            title: '',
            tagline: '',
            poster_path: '',
            isNewMovie: true
        }
    }
    
    componentDidMount(){
        fetch('https://react-cdp-api.herokuapp.com/movies')
        .then(response=>response.json())
        .then(arr=> this.setState({movies: arr.data}))
    }
/*
    Here is 2 handlers. onEdit and onAdd. Both of them should open the same form.
    It can be done with isFormOpened to true. I can create new state property(formData).
    If it is onEdit, then we pass data to that object. If it is onAdd then we set data to ''.

*/ 
    onAddMovie = () => {
        
    }

    onSubmitForm = (formData) => {    
        this.setState({
            movies: this.state.movies.map(element => element.id === formData.id ? formData : element),
            isFormOpened: false
        });
    }

    onEdit = (movie) => {
        const {id, title, tagline, poster_path} = movie;
        this.setState({
            formData: {
                id,
                title,
                tagline,
                poster_path,
                isNewMovie: false
            },
            isFormOpened: true
        });
    }

    onDelete= (movie) =>{
        this.setState({movies: this.state.movies.filter(element => element !== movie)});
    }

    render(){
        return (
        <div>
            <AddMovie onAdd={this.onAdd}/>
            {this.state.isFormOpened ? <MovieForm formData={this.state.formData} onSubmitForm={this.onSubmitForm}/> : null}
            <MovieList movies={this.state.movies} onEdit={this.onEdit} onDelete={this.onDelete}/>
        </div>
        );
    }

}

ReactDOM.render(<App />, document.getElementById('root'));