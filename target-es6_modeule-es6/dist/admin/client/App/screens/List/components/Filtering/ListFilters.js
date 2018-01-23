import * as React from 'react';
import { Chip } from '../../../../elemental';
import { Filter } from './Filter';
import { clearAllFilters } from '../../actions';
export const ListFilters = ({ dispatch, filters }) => {
    if (!filters.length)
        return React.createElement("div", null);
    const dispatchClearAllFilters = function () {
        dispatch(clearAllFilters());
    };
    // Generate the list of filter pills
    const currentFilters = filters.map((filter, i) => (React.createElement(Filter, { key: 'f' + i, filter: filter, dispatch: dispatch })));
    // When more than 1, append the clear button
    if (currentFilters.length > 1) {
        currentFilters.push(React.createElement(Chip, { key: "listFilters__clear", label: "Clear All", onClick: dispatchClearAllFilters }));
    }
    const styles = {
        marginBottom: '1em',
        marginTop: '1em',
    };
    return (React.createElement("div", { style: styles }, currentFilters));
};
