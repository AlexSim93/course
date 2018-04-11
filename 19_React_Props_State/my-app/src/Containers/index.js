import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from '../Components/MovieList';
import AddMovie from '../Components/AddMovie';
import AddMovieForm from './AddMovieForm';

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
    onAddMovie(evt){
        evt.preventDefault();
        
    }

    onAdd(){
        this.setState({movies: this.state.movies.push(filmData)});
    }

    render(){
        return 
        (<div>
            <AddMovie onAdd={this.onAdd}/>
            {this.state.isFormOpened : <AddMovieForm onAddMovie={}/>}
            <MovieList movies={this.state.movies}/>
        </div>);
    }

}

ReactDOM.render(<App />, document.getElementById('root'));