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
import * as PropTypes from 'prop-types';
import classes from './styles';
export const FormLabel = (_a, { formFieldId, formLayout, labelWidth, }) => {
    var { cssStyles, className, component: Component, cropText, htmlFor } = _a, props = __rest(_a, ["cssStyles", "className", "component", "cropText", "htmlFor"]);
    props['htmlFor'] = htmlFor || formFieldId;
    props['className'] = css(classes.FormLabel, formLayout ? classes['FormLabel--form-layout-' + formLayout] : null, cropText ? classes['FormLabel--crop-text'] : null, cssStyles);
    if (className) {
        props['className'] += (' ' + className);
    }
    if (labelWidth) {
        props.style = Object.assign({ width: labelWidth }, props.style);
    }
    return React.createElement(Component, Object.assign({}, props));
};
const stylesShape = {
    _definition: PropTypes.object,
    _name: PropTypes.string,
};
FormLabel.defaultProps = {
    component: 'label',
};
FormLabel.contextTypes = {
    formLayout: PropTypes.oneOf(['basic', 'horizontal', 'inline']),
    formFieldId: PropTypes.string,
    labelWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};
