"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const _1 = require("../");
const Portal_1 = require("../../Portal");
describe('<Popout />', () => {
    it('should render a Portal', () => {
        const component = enzyme_1.shallow(React.createElement(_1.Popout, null));
        demand(component.find(Portal_1.Portal).length).eql(1);
    });
    describe('open', () => {
        it('should render a blockout', () => {
            const component = enzyme_1.shallow(React.createElement(_1.Popout, { isOpen: true }));
            demand(component.find('div.blockout').length).eql(1);
        });
        it('should render a popout', () => {
            const component = enzyme_1.shallow(React.createElement(_1.Popout, { isOpen: true }));
            demand(component.find('div.Popout').length).eql(1);
        });
        it('should render its children', () => {
            const children = (React.createElement("h1", null, "Hello World!"));
            const component = enzyme_1.shallow(React.createElement(_1.Popout, { isOpen: true }, children));
            demand(component.contains(children)).true();
        });
    });
});
