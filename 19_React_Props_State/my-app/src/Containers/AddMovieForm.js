import React from 'react';

class AddMovieForm extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <form onSubmit={this.props.onAdd}>
                <input type='text' />
            </form>
        );
    } 
}

