import React from 'react';
import PropTypes from 'prop-types';
const themeContextTypes = {
    style: PropTypes.shape({})
};

export function theme(WrappedComponent, style) {
    return class extends React.Component {
        static displayName = 'theme';
        static childContextTypes = themeContextTypes;
        getChildContext() {
            return {
                style
            };
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}

export function themed(Tag) {
    return class extends React.Component {
        static contextTypes = themeContextTypes;

        render() {
            return (
                <Tag
                    style={this.context.style}
                    {...this.props}
                >
                    {this.props.children}
                </Tag>);
        }
    }
}