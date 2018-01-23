"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
const glamor_1 = require("glamor");
const react_1 = require("react");
const styles_1 = require("./styles");
// NOTE: Inline Group Section accepts a single child
function InlineGroupSection(_a) {
    var { active, cssStyles, children, className, contiguous, grow, position } = _a, props = __rest(_a, ["active", "cssStyles", "children", "className", "contiguous", "grow", "position"]);
    // evaluate position
    const separate = position === 'last' || position === 'middle';
    // A `contiguous` section must manipulate it's child directly
    // A separate (default) section just wraps the child
    return contiguous ? react_1.cloneElement(children, Object.assign({ cssStyles: [
            styles_1.default.contiguous,
            styles_1.default['contiguous__' + position],
            active ? styles_1.default.active : null,
            grow ? styles_1.default.grow : null,
            cssStyles,
        ] }, props)) : (react_1.default.createElement("div", Object.assign({ className: glamor_1.css(!!grow && styles_1.default.grow, !!separate && styles_1.default.separate, cssStyles) }, props), children));
}
InlineGroupSection.propTypes = {
    active: react_1.PropTypes.bool,
    children: react_1.PropTypes.element.isRequired,
    contiguous: react_1.PropTypes.bool,
    grow: react_1.PropTypes.bool,
    position: react_1.PropTypes.oneOf(['first', 'last', 'middle', 'only']),
};
module.exports = InlineGroupSection;
//# sourceMappingURL=index.js.map