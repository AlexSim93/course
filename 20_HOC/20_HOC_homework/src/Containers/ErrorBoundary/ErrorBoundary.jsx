import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
    
    state = {
        hasError: false,
        error: null,
        info: null
    }

    componentDidCatch(error, info){
        this.setState({
            hasError: true,
            error,
            info
        });
    }

    render(){
        if(this.state.hasError){
            console.log(this.state);
            return (
                <div>
                    <h2>Something went wrong!</h2>
                    <div style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.info.componentStack}
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
};