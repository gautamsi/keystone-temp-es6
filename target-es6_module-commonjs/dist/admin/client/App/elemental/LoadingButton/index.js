"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const glamor_1 = require("glamor");
const Button_1 = require("../Button");
const Spinner_1 = require("../Spinner");
const theme_1 = require("../../../theme");
exports.LoadingButton = (_a) => {
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
    const spinner = loading && (React.createElement(Spinner_1.Spinner, { size: "small", color: formattedColor }));
    // slide the spinner in and out of view
    const spinnerStyles = {
        width: loading
            ? (theme_1.theme.spinner.size.small * 5 + theme_1.theme.spacing.small)
            : 0,
    };
    // render everything
    return (React.createElement(Button_1.Button, Object.assign({}, props),
        React.createElement("span", { className: `${glamor_1.css(classes.spinner)}`, style: spinnerStyles }, spinner),
        children));
};
exports.LoadingButton.defaultProps = {
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
