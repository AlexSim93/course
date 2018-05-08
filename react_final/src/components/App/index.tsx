import * as React from 'react';

class App extends React.Component<any, any, any> {
    public componentDidMount() {
        this.props.fetchData('http://localhost:3000/movies');
    }
    public render() {
        return (
            <ul>
                {this.props.movies.map((element: {id: any, title: any}) => <li key={element.id}>{element.title}</li>)}
            </ul>
        );
    }
}

export default App;
