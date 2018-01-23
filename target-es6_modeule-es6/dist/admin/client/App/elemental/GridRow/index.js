import * as React from 'react';
import * as PropTypes from 'prop-types';
import { css } from 'glamor';
export class GridRow extends React.Component {
    getChildContext() {
        return {
            gutter: this.props.gutter,
            xsmall: this.props.xsmall,
            small: this.props.small,
            medium: this.props.medium,
            large: this.props.large,
        };
    }
    render() {
        const { children, className, gutter, styles = {} } = this.props;
        const componentClassName = `${css(classes.grid)}${className ? (' ' + className) : ''}`;
        const componentStyles = Object.assign(styles, {
            marginLeft: gutter / -2,
            marginRight: gutter / -2,
        });
        return (React.createElement("div", { className: componentClassName, style: componentStyles }, children));
    }
    static get defaultProps() {
        return {
            gutter: 0,
            xsmall: 'one-whole',
        };
    }
}
GridRow.childContextTypes = {
    gutter: PropTypes.number,
    xsmall: PropTypes.string,
    small: PropTypes.string,
    medium: PropTypes.string,
    large: PropTypes.string,
};
const classes = {
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
    },
};
