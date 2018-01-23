"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const elemental_1 = require("../../../admin/client/App/elemental");
const FieldBase_1 = require("../FieldBase");
class GeoPointField extends FieldBase_1.FieldBase {
    constructor() {
        super(...arguments);
        this.handleLat = (event) => {
            const { value = [], path, onChange } = this.props;
            const newVal = event.target.value;
            onChange({
                path,
                value: [value[0], newVal],
            });
        };
        this.handleLong = (event) => {
            const { value = [], path, onChange } = this.props;
            const newVal = event.target.value;
            onChange({
                path,
                value: [newVal, value[1]],
            });
        };
    }
    renderValue() {
        const { value } = this.props;
        if (value && value[1] && value[0]) {
            return React.createElement(elemental_1.FormInput, { noedit: true },
                value[1],
                ", ",
                value[0]); // eslint-disable-line comma-spacing
        }
        return React.createElement(elemental_1.FormInput, { noedit: true }, "(not set)");
    }
    renderField() {
        const { value = [], path } = this.props;
        return (React.createElement(elemental_1.Grid.Row, { xsmall: "one-half", gutter: 10 },
            React.createElement(elemental_1.Grid.Col, null,
                React.createElement(elemental_1.FormInput, { autoComplete: "off", name: this.getInputName(path + '[1]'), onChange: this.handleLat, placeholder: "Latitude", ref: "lat", value: value[1] })),
            React.createElement(elemental_1.Grid.Col, { width: "one-half" },
                React.createElement(elemental_1.FormInput, { autoComplete: "off", name: this.getInputName(path + '[0]'), onChange: this.handleLong, placeholder: "Longitude", ref: "lng", value: value[0] }))));
    }
}
GeoPointField.displayName = 'GeopointField';
GeoPointField.type = 'Geopoint';
exports.GeoPointField = GeoPointField;
