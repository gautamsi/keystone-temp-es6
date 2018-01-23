"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const React = require("react");
const CollapsedFieldLabel_1 = require("../../components/CollapsedFieldLabel");
const NestedFormField_1 = require("../../components/NestedFormField");
const elemental_1 = require("../../../admin/client/App/elemental");
const FieldBase_1 = require("../FieldBase");
/**
 * TODO:
 * - Remove dependency on underscore
 * - Custom path support
 */
class LocationField extends FieldBase_1.FieldBase {
    constructor(props) {
        super(props);
        this.uncollapseFields = () => {
            this.setState({
                collapsedFields: {},
            });
        };
        this.makeChanger = (fieldPath) => {
            return this.fieldChanged.bind(this, fieldPath);
        };
        this.makeGeoChanger = (fieldPath) => {
            return this.geoChanged.bind(this, fieldPath);
        };
        this.state = Object.assign({ collapsedFields: {}, improve: false, overwrite: false }, this.state);
    }
    componentWillMount() {
        const { value = [] } = this.props;
        let collapsedFields = {};
        _.forEach(['number', 'name', 'street2', 'geo'], (i) => {
            if (!value[i]) {
                collapsedFields[i] = true;
            }
        });
        this.setState({ collapsedFields });
    }
    shouldCollapse() {
        return this.props.collapse && !this.formatValue();
    }
    fieldChanged(fieldPath, event) {
        const { value = {}, path, onChange } = this.props;
        onChange({
            path,
            value: Object.assign({}, value, { [fieldPath]: event.target.value }),
        });
    }
    geoChanged(i, event) {
        const { value = {}, path, onChange } = this.props;
        const newVal = event.target.value;
        const geo = [
            i === 0 ? newVal : value.geo ? value.geo[0] : '',
            i === 1 ? newVal : value.geo ? value.geo[1] : '',
        ];
        onChange({
            path,
            value: Object.assign({}, value, { geo }),
        });
    }
    formatValue() {
        const { value = {} } = this.props;
        return _.compact([
            value.number,
            value.name,
            value.street1,
            value.street2,
            value.suburb,
            value.state,
            value.postcode,
            value.country,
        ]).join(', ');
    }
    renderValue() {
        return React.createElement(elemental_1.FormInput, { noedit: true }, this.formatValue() || '');
    }
    renderField(fieldPath, label, collapse, autoFocus) {
        if (this.state.collapsedFields[fieldPath]) {
            return null;
        }
        const { value = {}, path } = this.props;
        return (React.createElement(NestedFormField_1.NestedFormField, { label: label, "data-field-location-path": path + '.' + fieldPath },
            React.createElement(elemental_1.FormInput, { autoFocus: autoFocus, name: this.getInputName(path + '.' + fieldPath), onChange: this.makeChanger(fieldPath), placeholder: label, value: value[fieldPath] || '' })));
    }
    renderSuburbState() {
        const { value = {}, path } = this.props;
        return (React.createElement(NestedFormField_1.NestedFormField, { label: "Suburb / State", "data-field-location-path": path + '.suburb_state' },
            React.createElement(elemental_1.Grid.Row, { gutter: 10 },
                React.createElement(elemental_1.Grid.Col, { small: "two-thirds", "data-field-location-path": path + '.suburb' },
                    React.createElement(elemental_1.FormInput, { name: this.getInputName(path + '.suburb'), onChange: this.makeChanger('suburb'), placeholder: "Suburb", value: value.suburb || '' })),
                React.createElement(elemental_1.Grid.Col, { small: "one-third", "data-field-location-path": path + '.state' },
                    React.createElement(elemental_1.FormInput, { name: this.getInputName(path + '.state'), onChange: this.makeChanger('state'), placeholder: "State", value: value.state || '' })))));
    }
    renderPostcodeCountry() {
        const { value = {}, path } = this.props;
        return (React.createElement(NestedFormField_1.NestedFormField, { label: "Postcode / Country", "data-field-location-path": path + '.postcode_country' },
            React.createElement(elemental_1.Grid.Row, { gutter: 10 },
                React.createElement(elemental_1.Grid.Col, { small: "one-third", "data-field-location-path": path + '.postcode' },
                    React.createElement(elemental_1.FormInput, { name: this.getInputName(path + '.postcode'), onChange: this.makeChanger('postcode'), placeholder: "Post Code", value: value.postcode || '' })),
                React.createElement(elemental_1.Grid.Col, { small: "two-thirds", "data-field-location-path": path + '.country' },
                    React.createElement(elemental_1.FormInput, { name: this.getInputName(path + '.country'), onChange: this.makeChanger('country'), placeholder: "Country", value: value.country || '' })))));
    }
    renderGeo() {
        if (this.state.collapsedFields.geo) {
            return null;
        }
        const { value = {}, path, paths } = this.props;
        const geo = value.geo || [];
        return (React.createElement(NestedFormField_1.NestedFormField, { label: "Lat / Lng", "data-field-location-path": path + '.geo' },
            React.createElement(elemental_1.Grid.Row, { gutter: 10 },
                React.createElement(elemental_1.Grid.Col, { small: "one-half", "data-field-location-path": "latitude" },
                    React.createElement(elemental_1.FormInput, { name: this.getInputName(paths.geo + '[1]'), onChange: this.makeGeoChanger(1), placeholder: "Latitude", value: geo[1] || '' })),
                React.createElement(elemental_1.Grid.Col, { small: "one-half", "data-field-location-path": "longitude" },
                    React.createElement(elemental_1.FormInput, { name: this.getInputName(paths.geo + '[0]'), onChange: this.makeGeoChanger(0), placeholder: "Longitude", value: geo[0] || '' })))));
    }
    updateGoogleOption(key, e) {
        let newState = {};
        newState[key] = e.target.checked;
        this.setState(newState);
    }
    makeGoogler(key) {
        return this.updateGoogleOption.bind(this, key);
    }
    renderGoogleOptions() {
        const { paths, enableMapsAPI } = this.props;
        if (!enableMapsAPI)
            return null;
        let replace = this.state.improve ? (React.createElement(elemental_1.LabelledControl, { checked: this.state.overwrite, label: "Replace existing data", name: this.getInputName(paths.overwrite), onChange: this.makeGoogler('overwrite'), type: "checkbox" })) : null;
        return (React.createElement(elemental_1.FormField, { offsetAbsentLabel: true },
            React.createElement(elemental_1.LabelledControl, { checked: this.state.improve, label: "Autodetect and improve location on save", name: this.getInputName(paths.improve), onChange: this.makeGoogler('improve'), title: "When checked, this will attempt to fill missing fields. It will also get the lat/long", type: "checkbox" }),
            replace));
    }
    renderNote() {
        const { note } = this.props;
        if (!note)
            return null;
        return (React.createElement(elemental_1.FormField, { offsetAbsentLabel: true },
            React.createElement(elemental_1.FormNote, { note: note })));
    }
    renderUI() {
        if (!this.shouldRenderField()) {
            return (React.createElement(elemental_1.FormField, { label: this.props.label }, this.renderValue()));
        }
        /* eslint-disable no-script-url */
        let showMore = !_.isEmpty(this.state.collapsedFields)
            ? React.createElement(CollapsedFieldLabel_1.CollapsedFieldLabel, { onClick: this.uncollapseFields }, "(show more fields)")
            : null;
        /* eslint-enable */
        const { label, path } = this.props;
        return (React.createElement("div", { "data-field-name": path, "data-field-type": "location" },
            React.createElement(elemental_1.FormField, { label: label, htmlFor: path }, showMore),
            this.renderField('number', 'PO Box / Shop', true, true),
            this.renderField('name', 'Building Name', true),
            this.renderField('street1', 'Street Address'),
            this.renderField('street2', 'Street Address 2', true),
            this.renderSuburbState(),
            this.renderPostcodeCountry(),
            this.renderGeo(),
            this.renderGoogleOptions(),
            this.renderNote()));
    }
}
LocationField.displayName = 'LocationField';
LocationField.type = 'Location';
exports.LocationField = LocationField;
