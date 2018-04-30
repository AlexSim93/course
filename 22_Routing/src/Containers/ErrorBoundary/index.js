import React, {Component} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

import './style.scss';

export default class ErrorBoundary extends Component {
    
    state = {
        hasError: false,
        error: null
    }

    componentDidCatch(error, info){
        this.setState({
            hasError: true,
            error
        });
    }

    render(){
        if(this.state.hasError){
            return (
                <div className={classNames('error-boundary')}>
                    <div className={classNames('error-boundary__main-text')} >Something went wrong!</div>
                    <div className={classNames('error-boundary__error')}>
                        {this.state.error && this.state.error.toString()}
                    </div>
                    <Link className={classNames('error-boundary__link')} to='/'>Back to home page</Link>
                </div>
            );
        }
        return this.props.children;
    }
};
