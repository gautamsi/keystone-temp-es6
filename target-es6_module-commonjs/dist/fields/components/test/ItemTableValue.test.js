"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const demand = require("must");
const ItemsTableValue_1 = require("../ItemsTableValue");
describe('<ItemsTableValue/> tests', () => {
    it('should render <div> with default properties and css class', () => {
        const tableValue = enzyme_1.shallow(React.createElement(ItemsTableValue_1.ItemsTableValue, null));
        demand(tableValue.find('div').type()).eql('div');
        demand(tableValue.find('div').length).eql(1);
        demand(tableValue.find('.ItemList__value').length).eql(1);
        demand(tableValue.find('.ItemList__value--truncate').length).eql(1);
        demand(tableValue.prop('children')).to.be.undefined();
    });
    it('should render <div> with explicit properties and css class', () => {
        const tableValue = enzyme_1.shallow(React.createElement(ItemsTableValue_1.ItemsTableValue, { className: "mock-class", field: "mock-file-upload", interior: true, padded: true, truncate: false }));
        demand(tableValue.find('.ItemList__value--truncate').length).eql(0);
        demand(tableValue.find('.ItemList__value .ItemList__value--mock-file-upload .mock-class').length).eql(1);
    });
    it('should render <Link> with default properties and css class', () => {
        const actualUrl = 'http://hello.world';
        const tableValue = enzyme_1.shallow(React.createElement(ItemsTableValue_1.ItemsTableValue, { to: actualUrl }));
        demand(tableValue.name()).eql('Link');
        demand(tableValue.prop('href')).eql(actualUrl);
        demand(tableValue.find('.ItemList__value .ItemList__value--truncate').length).eql(1);
    });
    it('should render <Link> with explicit properties and css class', () => {
        const tableValue = enzyme_1.shallow(React.createElement(ItemsTableValue_1.ItemsTableValue, { href: "http://hello.world", field: "mock-file-upload", interior: true, padded: true, truncate: false }));
        demand(tableValue.name()).eql('Link');
        demand(tableValue.find('.ItemList__value--truncate').length).eql(0);
        demand(tableValue.find('.ItemList__value .ItemList__value--mock-file-upload .ItemList__link--interior .ItemList__link--padded').length).eql(1);
    });
    it('should render <div> with child', () => {
        const actualText = 'mock-span-text';
        const tableValue = enzyme_1.shallow(React.createElement(ItemsTableValue_1.ItemsTableValue, null,
            React.createElement("span", null, actualText)));
        const child = tableValue.prop('children');
        demand(tableValue.find('div').type()).eql('div');
        demand(tableValue.find('div').length).eql(1);
        demand(tableValue.find('.ItemList__value').length).eql(1);
        demand(tableValue.find('.ItemList__value--truncate').length).eql(1);
        demand(child.type).eql('span');
        demand(child.props.children).eql(actualText);
    });
});
