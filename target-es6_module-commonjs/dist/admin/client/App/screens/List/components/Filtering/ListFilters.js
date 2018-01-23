"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const elemental_1 = require("../../../../elemental");
const Filter_1 = require("./Filter");
const actions_1 = require("../../actions");
exports.ListFilters = ({ dispatch, filters }) => {
    if (!filters.length)
        return React.createElement("div", null);
    const dispatchClearAllFilters = function () {
        dispatch(actions_1.clearAllFilters());
    };
    // Generate the list of filter pills
    const currentFilters = filters.map((filter, i) => (React.createElement(Filter_1.Filter, { key: 'f' + i, filter: filter, dispatch: dispatch })));
    // When more than 1, append the clear button
    if (currentFilters.length > 1) {
        currentFilters.push(React.createElement(elemental_1.Chip, { key: "listFilters__clear", label: "Clear All", onClick: dispatchClearAllFilters }));
    }
    const styles = {
        marginBottom: '1em',
        marginTop: '1em',
    };
    return (React.createElement("div", { style: styles }, currentFilters));
};
