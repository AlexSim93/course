import * as React from 'react';

class App extends React.Component {
    componentDidMount(){
        this.props.fetchData('http://localhost:3000/movies');
    }
    render () {
        <ul>
            {this.props.movies.map(element => <li key={element.id}>{element.title}</li>)} 
        </ul>
    }
}


export default App;