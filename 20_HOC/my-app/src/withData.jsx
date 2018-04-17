import React, { Component } from 'react';
import { map, get } from 'lodash';

export const withData = (mapUrlsToProps) => (WrappedComponent) =>(
    class extends Component {
        state = {};
        static displayName = 'AppWithData';
        componentDidMount() {
            map(mapUrlsToProps, (propDef, key) => {
                fetch(propDef.url)
                    .then(response =>  response.json())
                    .then((data) => this.setState({ [key]: get(data, propDef.path , {origin: 'something'})}))
            });
        }
        render() {
            return (<WrappedComponent {...this.state} {...this.props}>{this.props.children}</WrappedComponent>);
        }
    }
);