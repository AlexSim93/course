import React from 'react';

function log(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends React.Component {
    static displayName = `log(${WrappedComponent.displayName})`

    componentDidMount() {
      // ... that takes care of the subscription...
      console.log('component has been created');
    }

    componentWillUnmount() {
      console.log('component has been deleted');
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default log;