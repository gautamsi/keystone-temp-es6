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
import { concatClassnames } from '../../../utils/concatClassnames';
import { FormInputNoedit } from './noedit';
import * as PropTypes from 'prop-types';
// NOTE must NOT be functional component to allow `refs`
export class FormInput extends React.Component {
    blur() {
        this.target.blur();
    }
    focus() {
        this.target.focus();
    }
    render() {
        const _a = this.props, { cssStyles, className, disabled, id, multiline, noedit, size } = _a, props = __rest(_a, ["cssStyles", "className", "disabled", "id", "multiline", "noedit", "size"]);
        // NOTE return a different component for `noedit`
        if (noedit)
            return React.createElement(FormInputNoedit, Object.assign({}, this.props));
        const { formFieldId, formLayout } = this.context;
        props['id'] = id || formFieldId;
        props['className'] = css(classes.FormInput, classes['FormInput__size--' + size], disabled ? classes['FormInput--disabled'] : null, formLayout ? classes['FormInput--form-layout-' + formLayout] : null, ...concatClassnames(cssStyles));
        if (className) {
            props['className'] += (' ' + className);
        }
        const setRef = (n) => (this.target = n);
        const Tag = multiline ? 'textarea' : 'input';
        return (React.createElement(Tag, Object.assign({ ref: setRef, disabled: disabled }, props)));
    }
    static get defaultProps() {
        return {
            size: 'default',
            type: 'text',
        };
    }
}
FormInput.contextTypes = {
    formLayout: PropTypes.oneOf(['basic', 'horizontal', 'inline']),
    formFieldId: PropTypes.string,
};
const stylesShape = {
    _definition: PropTypes.object,
    _name: PropTypes.string,
};
