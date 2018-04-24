import React, { Component } from 'react';
import { map, get } from 'lodash';

export const withData = (mapUrlsToProps) => (WrappedComponent) =>(
    class extends Component {
        state = {}
        static displayName = 'AppWithData';

        fetchData = () => {
            map(mapUrlsToProps, (propDef, key) => {
                fetch(propDef.url)
                    .then(response =>  {
                        if(response.ok){
                            return response.json();
                        }
                        throw new Error(response.statusText);
                    })
                    .then((data) => this.setState({ 
                        [key]: get(data, propDef.path , {currently: {data: 'no data'}}),
                        time: new Date(get(data, 'currently.time', 0) * 1000)
                    }))
                    .catch(err => console.log('Error in AJAX request', err))
            });
        }
        updateData = () => {
            this.fetchData();
        }
        componentDidMount() {
            this.fetchData();
        }
        render() {     
            return (
                <WrappedComponent  
                    updateData={this.updateData} 
                    {...this.state} 
                    {...this.props}>
                        {this.props.children}
                </WrappedComponent>
            );
        }
    }
);