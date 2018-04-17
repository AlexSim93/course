import React, { Component } from 'react';
import { map } from 'lodash';

export const withData = (mapUrlsToProps) => (WrappedComponent) =>(
    class extends Component {
        state = {};
        static displayName = 'AppWithData';
        componentDidMount() {
            map(mapUrlsToProps, (url, key) => {
                fetch(url)
                    .then(response => response.json())
                    .then((data) => this.setState({ [key]: data }))
            });
        }
        render() {
            return (<WrappedComponent {...this.state} {...this.props}>{this.props.children}</WrappedComponent>);
        }
    }
);