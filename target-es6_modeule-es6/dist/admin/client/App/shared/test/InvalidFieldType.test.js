"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const InvalidFieldType_1 = require("../InvalidFieldType");
describe('<InvalidFieldType />', () => {
    it('should render a message saying that a field type is invalid', () => {
        const type = 'txt';
        const path = 'some/path';
        const component = enzyme_1.shallow(React.createElement(InvalidFieldType_1.InvalidFieldType, { type: type, path: path }));
        demand(component.text()).eql(`Invalid field type ${type} at path ${path}`);
    });
});
