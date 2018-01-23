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
export class FormSelect extends React.Component {
    render() {
        const _a = this.props, { children, id, options } = _a, props = __rest(_a, ["children", "id", "options"]);
        const { formFieldId } = this.context;
        props['className'] = css(classes.select, props.disabled ? classes['select--disabled'] : null);
        props['id'] = id || formFieldId;
        // Property Violation
        if (options && children) {
            console.error('Warning: FormSelect cannot render `children` and `options`. You must provide one or the other.');
        }
        return (React.createElement("div", { className: `${css(classes.container)}` },
            options ? (React.createElement("select", Object.assign({}, props), options.map(opt => (React.createElement("option", { key: opt.value, value: opt.value }, opt.label))))) : React.createElement("select", Object.assign({}, props), children),
            React.createElement("span", { className: `${css(classes.arrows, props.disabled ? classes['arrows--disabled'] : null)}` },
                React.createElement("span", { className: `${css(classes.arrow, classes.arrowTop)}` }),
                React.createElement("span", { className: `${css(classes.arrow, classes.arrowBottom)}` }))));
    }
}
FormSelect.contextTypes = {
    formFieldId: PropTypes.string,
};
