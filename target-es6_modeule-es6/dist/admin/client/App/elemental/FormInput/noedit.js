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
import { theme } from '../../../theme';
import { fade } from '../../../utils/color';
/* eslint quote-props: ["error", "as-needed"] */
export const FormInputNoedit = (_a) => {
    var { className, component: Component, cropText, multiline, noedit, // NOTE not used, just removed from props
    type } = _a, props = __rest(_a, ["className", "component", "cropText", "multiline", "noedit", "type"]);
    props['className'] = css(classes.noedit, cropText ? classes.cropText : null, multiline ? classes.multiline : null, (props.href || props.onClick) ? classes.anchor : null, className);
    return React.createElement(Component, Object.assign({}, props));
};
FormInputNoedit.defaultProps = {
    component: 'span',
};
const anchorHoverAndFocusStyles = {
    backgroundColor: fade(theme.color.link, 10),
    borderColor: fade(theme.color.link, 10),
    color: theme.color.link,
    outline: 'none',
    textDecoration: 'underline',
};
const classes = {
    noedit: {
        appearance: 'none',
        backgroundColor: theme.input.background.noedit,
        backgroundImage: 'none',
        borderColor: theme.input.border.color.noedit,
        borderRadius: theme.input.border.radius,
        borderStyle: 'solid',
        borderWidth: theme.input.border.width,
        color: theme.color.gray80,
        display: 'inline-block',
        height: theme.input.height,
        lineHeight: theme.input.lineHeight,
        padding: `0 ${theme.input.paddingHorizontal}`,
        transition: 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
        verticalAlign: 'middle',
        // prevent empty inputs from collapsing by adding content
        ':empty:before': {
            color: theme.color.gray40,
            content: '"(no value)"',
        },
    },
    cropText: undefined,
    multiline: {
        display: 'block',
        height: 'auto',
        lineHeight: '1.4',
        paddingBottom: '0.6em',
        paddingTop: '0.6em',
    },
    // indicate clickability when using an anchor
    anchor: {
        backgroundColor: fade(theme.color.link, 5),
        borderColor: fade(theme.color.link, 10),
        color: theme.color.link,
        marginRight: 5,
        minWidth: 0,
        textDecoration: 'none',
        ':hover': anchorHoverAndFocusStyles,
        ':focus': anchorHoverAndFocusStyles,
    },
};
