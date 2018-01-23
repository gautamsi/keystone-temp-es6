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
Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = require("glamor");
const React = require("react");
const DrilldownItem_1 = require("./DrilldownItem");
exports.Drilldown = (_a) => {
    var { items } = _a, props = __rest(_a, ["items"]);
    props.className = glamor_1.css(classes.drilldown, props.className);
    return (React.createElement("ul", Object.assign({}, props), items.map((item, idx) => (React.createElement(DrilldownItem_1.DrilldownItem, { href: item.href, key: idx, label: item.label, separate: idx < items.length - 1 })))));
};
const classes = {
    drilldown: {
        display: 'inline-block',
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
};
