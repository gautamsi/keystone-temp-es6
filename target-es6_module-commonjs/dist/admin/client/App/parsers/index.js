"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filters_1 = require("./filters");
exports.filtersParser = filters_1.filtersParser;
exports.filterParser = filters_1.filterParser;
exports.createFilterObject = filters_1.createFilterObject;
/**
 * Returns an array of expanded columns object, given a list of columns and currentList object.
 *
 * @param { String } columns, a string representation of a list of columns.
 * @param { Object } the current instantiation of the List prototype used for the <List/> scene
 * @return { Array } of { Objects } as an expanded representation of the column values passed in.
 */
function columnsParser(columns, currentList) {
    if (!currentList) {
        throw new Error('No currentList selected');
    }
    if (!columns || columns.length === 0) {
        return currentList.expandColumns(currentList.defaultColumns);
    }
    return currentList.expandColumns(columns);
}
exports.columnsParser = columnsParser;
/**
 * Returns an expanded sort object, given a sort path and currentList object.
 *
 * @param { String } path, a string representation of a list of columns.
 * @param { Object } the current instantiation of the List prototype used for the <List/> scene
 * @return { Object } an expanded representation of the sort path passed in.
 */
function sortParser(path, currentList) {
    if (!currentList) {
        throw new Error('No currentList selected');
    }
    if (!path)
        return currentList.expandSort(currentList.defaultSort);
    return currentList.expandSort(path);
}
exports.sortParser = sortParser;
