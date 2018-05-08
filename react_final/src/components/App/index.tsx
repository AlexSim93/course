import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component<any, any, any> {
    public componentDidMount() {
        this.props.fetchData('http://localhost:3000/movies');
    }
    public render() {
        return (
            <Switch>
                <Redirect exact from='/' to='/movies' />
                <Route exact path='/movies'/>
                <Route exact path='/favourites' />
                <Route exact path='/search/:searchQuery' />
                <Route exact path='/film/:film-title' />
            </Switch>
        );
    }
}

export default App;
