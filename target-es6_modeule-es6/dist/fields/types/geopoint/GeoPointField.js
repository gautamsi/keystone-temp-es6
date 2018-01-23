import * as React from 'react';
import { FormInput, Grid, } from '../../../admin/client/App/elemental';
import { FieldBase } from '../FieldBase';
export class GeoPointField extends FieldBase {
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
            return React.createElement(FormInput, { noedit: true },
                value[1],
                ", ",
                value[0]); // eslint-disable-line comma-spacing
        }
        return React.createElement(FormInput, { noedit: true }, "(not set)");
    }
    renderField() {
        const { value = [], path } = this.props;
        return (React.createElement(Grid.Row, { xsmall: "one-half", gutter: 10 },
            React.createElement(Grid.Col, null,
                React.createElement(FormInput, { autoComplete: "off", name: this.getInputName(path + '[1]'), onChange: this.handleLat, placeholder: "Latitude", ref: "lat", value: value[1] })),
            React.createElement(Grid.Col, { width: "one-half" },
                React.createElement(FormInput, { autoComplete: "off", name: this.getInputName(path + '[0]'), onChange: this.handleLong, placeholder: "Longitude", ref: "lng", value: value[0] }))));
    }
}
GeoPointField.displayName = 'GeopointField';
GeoPointField.type = 'Geopoint';
