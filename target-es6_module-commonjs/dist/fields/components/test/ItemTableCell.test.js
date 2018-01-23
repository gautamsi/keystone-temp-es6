"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const ItemsTableCell_1 = require("../ItemsTableCell");
describe('<ItemsTableCell/> tests', () => {
    it('should render <td> with default class and properties', () => {
        const cell = enzyme_1.shallow(React.createElement(ItemsTableCell_1.ItemsTableCell, null));
        demand(cell.find('td').type()).eql('td');
        demand(cell.find('td').length).eql(1);
        demand(cell.find('.ItemList__col').length).eql(1);
        demand(cell.prop('className')).eql('ItemList__col ');
    });
    it('should render <td> with properties p1, p2', () => {
        const cell = enzyme_1.shallow(React.createElement(ItemsTableCell_1.ItemsTableCell, { p1: "v1", p2: "v2" }));
        demand(cell.prop('p1')).eql('v1');
        demand(cell.prop('p2')).eql('v2');
    });
    it('should render <td> with css class mock-style', () => {
        const cell = enzyme_1.shallow(React.createElement(ItemsTableCell_1.ItemsTableCell, { className: "mock-style" }));
        demand(cell.find('.mock-style').length).eql(1);
        demand(cell.find('.ItemList__col').length).eql(1);
    });
});
