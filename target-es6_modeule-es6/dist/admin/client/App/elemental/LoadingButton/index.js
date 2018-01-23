var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from 'react';
import { css } from 'glamor';
import { Button } from '../Button';
import { Spinner } from '../Spinner';
import { theme } from '../../../theme';
export const LoadingButton = (_a) => {
    var { children, loading } = _a, props = __rest(_a, ["children", "loading"]);
    // determine the correct variant for the spinner,
    // fill is the default variant on Button
    const variant = props.variant || 'fill';
    // determine the correct color for the spinner,
    // cancel and delete alias to "danger"
    let color;
    if (props.color === 'cancel' || props.color === 'delete')
        color = 'danger';
    // merge all the variant/color together
    const formattedColor = variant === 'fill' && props.color !== 'default'
        ? 'inverted'
        : color;
    // render the spinner if required
    const spinner = loading && (React.createElement(Spinner, { size: "small", color: formattedColor }));
    // slide the spinner in and out of view
    const spinnerStyles = {
        width: loading
            ? (theme.spinner.size.small * 5 + theme.spacing.small)
            : 0,
    };
    // render everything
    return (React.createElement(Button, Object.assign({}, props),
        React.createElement("span", { className: `${css(classes.spinner)}`, style: spinnerStyles }, spinner),
        children));
};
LoadingButton.defaultProps = {
    loading: false,
};
const classes = {
    spinner: {
        display: 'inline-block',
        overflow: 'hidden',
        textAlign: 'left',
        transition: 'width 200ms ease-out',
        verticalAlign: 'middle',
    },
};
