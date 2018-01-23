"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const elemental_1 = require("../../../admin/client/App/elemental");
const DISTANCE_OPTIONS = [
    { label: 'Max distance (km)', value: 'max' },
    { label: 'Min distance (km)', value: 'min' },
];
class TextFilter extends React.Component {
    constructor() {
        super(...arguments);
        this.changeLat = (evt) => {
            this.updateFilter({ lat: evt.target.value });
        };
        this.changeLon = (evt) => {
            this.updateFilter({ lon: evt.target.value });
        };
        this.changeDistanceValue = (evt) => {
            this.updateFilter({
                distance: {
                    mode: this.props.filter.distance.mode,
                    value: evt.target.value,
                },
            });
        };
        this.changeDistanceMode = (mode) => {
            this.updateFilter({
                distance: {
                    mode,
                    value: this.props.filter.distance.value,
                },
            });
        };
    }
    static getDefaultValue() {
        return {
            lat: undefined,
            lon: undefined,
            distance: {
                mode: DISTANCE_OPTIONS[0].value,
                value: undefined,
            },
        };
    }
    static get defaultProps() {
        return {
            filter: this.getDefaultValue(),
        };
    }
    updateFilter(value) {
        this.props.onChange(Object.assign({}, this.props.filter, value));
    }
    render() {
        const { filter } = this.props;
        const distanceModeVerb = filter.distance.mode === 'max' ? 'Maximum' : 'Minimum';
        return (React.createElement("div", null,
            React.createElement(elemental_1.Grid.Row, { xsmall: "one-half", gutter: 10 },
                React.createElement(elemental_1.Grid.Col, null,
                    React.createElement(elemental_1.FormField, { label: "Latitude" },
                        React.createElement(elemental_1.FormInput, { autoFocus: true, onChange: this.changeLat, placeholder: 'Latitude', ref: "latitude", required: "true", step: 0.01, type: "number", value: filter.lat }))),
                React.createElement(elemental_1.Grid.Col, null,
                    React.createElement(elemental_1.FormField, { label: "Longitude" },
                        React.createElement(elemental_1.FormInput, { onChange: this.changeLon, placeholder: 'Longitude', ref: "longitude", required: "true", step: 0.01, type: "number", value: filter.lon })))),
            React.createElement(elemental_1.FormField, null,
                React.createElement(elemental_1.SegmentedControl, { equalWidthSegments: true, onChange: this.changeDistanceMode, options: DISTANCE_OPTIONS, value: this.props.filter.distance.mode })),
            React.createElement(elemental_1.FormInput, { onChange: this.changeDistanceValue, placeholder: distanceModeVerb + ' distance from point', ref: "distance", type: "number", value: filter.distance.value })));
    }
}
exports.TextFilter = TextFilter;
