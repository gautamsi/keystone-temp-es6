"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const Portal_1 = require("../Portal");
describe('<Portal />', () => {
    it('should return null', () => {
        const component = enzyme_1.shallow(React.createElement(Portal_1.Portal, null));
        demand(component.type()).eql(null);
    });
});
