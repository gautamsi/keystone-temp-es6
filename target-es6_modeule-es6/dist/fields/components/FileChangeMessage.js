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
import { FormInput } from '../../admin/client/App/elemental';
import { fade } from '../../admin/client/utils/color';
import { theme } from '../../admin/client/theme';
export const FileChangeMessage = (_a) => {
    var { style, color } = _a, props = __rest(_a, ["style", "color"]);
    const styles = Object.assign({ marginRight: 10, minWidth: 0 }, style);
    if (color !== 'default') {
        styles.backgroundColor = fade(theme.color[color], 10);
        styles.borderColor = fade(theme.color[color], 30);
        styles.color = theme.color[color];
    }
    return (React.createElement(FormInput, Object.assign({ noedit: true, style: styles }, props)));
};
FileChangeMessage.defaultProps = {
    color: 'default',
};
