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
export const ModalFooter = (_a) => {
    var { align, className } = _a, props = __rest(_a, ["align", "className"]);
    return (React.createElement("div", Object.assign({}, props, { className: `${css(classes.footer, classes['align__' + align], className)}` })));
};
ModalFooter.defaultProps = {
    align: 'left',
};
const classes = {
    footer: {
        borderTop: `2px solid ${theme.color.gray10}`,
        display: 'flex',
        paddingBottom: theme.modal.padding.footer.vertical,
        paddingLeft: theme.modal.padding.footer.horizontal,
        paddingRight: theme.modal.padding.footer.horizontal,
        paddingTop: theme.modal.padding.footer.vertical,
    },
    // alignment
    align__left: {
        justifyContent: 'flex-start',
    },
    align__center: {
        justifyContent: 'center',
    },
    align__right: {
        justifyContent: 'flex-end',
    },
};
