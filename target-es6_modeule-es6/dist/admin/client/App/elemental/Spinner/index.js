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
import classes from './styles';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
export const Spinner = (_a) => {
    var { className, size, color } = _a, props = __rest(_a, ["className", "size", "color"]);
    props['className'] = css(classes.base, classes[size], className);
    return (React.createElement("div", Object.assign({}, props),
        React.createElement("span", { className: `${css(classes.dot, classes['size__' + size], classes['color__' + color], classes.dot__first)}` }),
        React.createElement("span", { className: `${css(classes.dot, classes['size__' + size], classes['color__' + color], classes.dot__second)}` }),
        React.createElement("span", { className: `${css(classes.dot, classes['size__' + size], classes['color__' + color], classes.dot__third)}` }),
        React.createElement(ScreenReaderOnly, null, "Loading...")));
};
Spinner.defaultProps = {
    size: 'medium',
    color: 'default',
};
