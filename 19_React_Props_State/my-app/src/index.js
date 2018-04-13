import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
import MovieForm from './Containers/MovieForm';

class App extends React.Component {
    state = {
        movies: [],
        isFormOpened: false
    }
    
    componentDidMount(){
        fetch('https://react-cdp-api.herokuapp.com/movies')
        .then(response=>response.json())
        .then(arr=> this.setState({movies: arr.data}))
    }
 
    onAddMovie = (evt) => {
        evt.preventDefault();
    }

    onDelete= (movie) =>{
        this.setState({movies: this.state.movies.filter(element => element !== movie)});
    }

    onSubmitNewMovie = (movie) => {
        this.setState({
            movies: this.state.movies.push(movie),
            isFormOpened: false
        });
    }

    render(){
        return (
        <div>
            <AddMovie onAdd={this.onAdd}/>
            {this.state.isFormOpened ? <MovieForm /> : null}
            <MovieList movies={this.state.movies} onDelete={this.onDelete}/>
        </div>
        );
    }

}

ReactDOM.render(<App />, document.getElementById('root'));