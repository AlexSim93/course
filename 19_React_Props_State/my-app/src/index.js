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
            id: null,
            title: '',
            tagline: '',
            poster_path: '',
            overview: '',
            isNewMovie: true
        }
    }
    
    componentDidMount(){
        fetch('https://react-cdp-api.herokuapp.com/movies')
        .then(response=>response.json())
        .then(arr=> this.setState({movies: arr.data}))
    }
 
    onAdd = () => {
        this.setState({
            id:  null,
            title: '',
            tagline: '',
            poster_path: '',
            overview: '',
            isNewMovie: true
        });
    }

    onSubmitForm = (formData) => {    
        this.setState({
            movies: this.state.movies.map(element => element.id === formData.id ? formData : element),
            isFormOpened: false
        });
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
            {this.state.isFormOpened ? <MovieForm formData={this.state.formData} onSubmitForm={this.onSubmitForm} onCancelForm={this.onCancelForm}/> : null}
            <MovieList movies={this.state.movies} onEdit={this.onEdit} onDelete={this.onDelete}/>
        </div>
        );
    }

}

ReactDOM.render(<App />, document.getElementById('root'));