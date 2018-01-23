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
export const ModalBody = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (React.createElement("div", Object.assign({ className: css(classes.body, className) }, props)));
};
const classes = {
    body: {
        paddingBottom: theme.modal.padding.body.vertical,
        paddingLeft: theme.modal.padding.body.horizontal,
        paddingRight: theme.modal.padding.body.horizontal,
        paddingTop: theme.modal.padding.body.vertical,
    },
};
