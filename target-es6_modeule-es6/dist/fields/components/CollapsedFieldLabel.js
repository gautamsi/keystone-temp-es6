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
import { Button } from '../../admin/client/App/elemental';
// NOTE marginBottom of 1px stops things jumping around
// TODO find out why this is necessary
export const CollapsedFieldLabel = (_a) => {
    var { style } = _a, props = __rest(_a, ["style"]);
    const __style__ = Object.assign({ marginBottom: 1, paddingLeft: 0, paddingRight: 0 }, style);
    return (React.createElement(Button, Object.assign({ variant: "link", style: __style__ }, props)));
};
