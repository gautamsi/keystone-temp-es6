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
import * as styles from './styles';
const commonClasses = styles.common;
const stylesheetCache = {};
function getStyleSheet(variant, color) {
    const cacheKey = `${variant}-${color}`;
    if (!stylesheetCache[cacheKey]) {
        const variantStyles = styles[variant](color);
        stylesheetCache[cacheKey] = variantStyles;
    }
    return stylesheetCache[cacheKey];
}
// NOTE must NOT be functional component to allow `refs`
export class Button extends React.Component {
    static get defaultProps() {
        return {
            cssStyles: [],
            color: 'default',
            variant: 'fill',
        };
    }
    render() {
        let _a = this.props, { active, cssStyles, block, className, color, component: Tag, disabled, size, variant } = _a, props = __rest(_a, ["active", "cssStyles", "block", "className", "color", "component", "disabled", "size", "variant"]);
        // get the styles
        const variantClasses = getStyleSheet(variant, color);
        props['className'] = css(commonClasses.base, commonClasses[size], variantClasses.base, block ? commonClasses.block : null, disabled ? commonClasses.disabled : null, active ? variantClasses.active : null, ...cssStyles);
        if (className) {
            props['className'] += (' ' + className);
        }
        // return an anchor or button
        if (!Tag) {
            Tag = props.href ? 'a' : 'button';
        }
        // Ensure buttons don't submit by default
        if (Tag === 'button' && !props.type) {
            props['type'] = 'button';
        }
        return React.createElement(Tag, Object.assign({}, props));
    }
}
