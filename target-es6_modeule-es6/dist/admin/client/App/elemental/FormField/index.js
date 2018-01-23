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
import { FormLabel } from '../FormLabel';
export class FormField extends React.Component {
    constructor(props) {
        super(props);
        this.formFieldId = generateId();
    }
    getChildContext() {
        return {
            formFieldId: this.formFieldId,
        };
    }
    render() {
        const { formLayout = 'basic', labelWidth } = this.context;
        const _a = this.props, { cssStyles, children, className, cropLabel, htmlFor, label, offsetAbsentLabel } = _a, props = __rest(_a, ["cssStyles", "children", "className", "cropLabel", "htmlFor", "label", "offsetAbsentLabel"]);
        props['className'] = css(classes.FormField, classes['FormField--form-layout-' + formLayout], offsetAbsentLabel ? classes['FormField--offset-absent-label'] : null, cssStyles);
        if (className) {
            props['className'] += (' ' + className);
        }
        if (offsetAbsentLabel && labelWidth) {
            props['style'] = Object.assign({ paddingLeft: labelWidth }, props.style);
        }
        // elements
        const componentLabel = label ? (React.createElement(FormLabel, { htmlFor: htmlFor, cropText: cropLabel }, label)) : null;
        return (React.createElement("div", Object.assign({}, props, { htmlFor: htmlFor }),
            componentLabel,
            children));
    }
}
FormField.contextTypes = {
    formLayout: PropTypes.oneOf(['basic', 'horizontal', 'inline']),
    labelWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};
FormField.childContextTypes = {
    formFieldId: PropTypes.string,
};
function generateId() {
    return Math.random().toString(36).substr(2, 9);
}
