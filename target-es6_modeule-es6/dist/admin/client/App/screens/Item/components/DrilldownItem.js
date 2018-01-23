var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { css } from 'glamor';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Glyph } from '../../../elemental';
import { theme } from '../../../../theme';
export const DrilldownItem = (_a) => {
    var { href, label, separate, separator, style } = _a, props = __rest(_a, ["href", "label", "separate", "separator", "style"]);
    props.className = css(classes.item, props.className);
    // remove horizontal padding
    const styles = Object.assign({ paddingLeft: 0, paddingRight: 0 }, style);
    return (React.createElement("li", Object.assign({}, props),
        React.createElement(Button, { component: Link, style: styles, to: href, variant: "link" }, label),
        separate && (React.createElement("span", { className: `${css(classes.separator)}` }, separator))));
};
DrilldownItem.defaultProps = {
    separator: React.createElement(Glyph, { name: "chevron-right" }),
};
const classes = {
    item: {
        display: 'inline-block',
        margin: 0,
        padding: 0,
        verticalAlign: 'middle',
    },
    separator: {
        color: theme.color.gray40,
        marginLeft: '0.5em',
        marginRight: '0.5em',
    },
};
