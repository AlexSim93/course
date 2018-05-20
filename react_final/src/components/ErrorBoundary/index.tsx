import * as React from 'react';
import * as classNames from 'classnames';
import TextDisplay from '../TextDisplay';

import './style.scss';

interface IErrorBoundaryState {
    hasError: boolean;
    error: string;
};

class ErrorBoundary extends React.Component<any, IErrorBoundaryState> {

    public state = {
        hasError: false,
        error: ''
    }

    public componentDidCatch(error: any) {
        this.setState({
            hasError: true,
            error
        });
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className={classNames('error-message')}>
                    <TextDisplay sizeLg light text={this.state.error && this.state.error.toString()}/>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
