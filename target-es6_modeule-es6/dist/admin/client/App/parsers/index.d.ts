export { filtersParser, filterParser, createFilterObject } from './filters';
/**
 * Returns an array of expanded columns object, given a list of columns and currentList object.
 *
 * @param { String } columns, a string representation of a list of columns.
 * @param { Object } the current instantiation of the List prototype used for the <List/> scene
 * @return { Array } of { Objects } as an expanded representation of the column values passed in.
 */
export declare function columnsParser(columns: any, currentList: any): any;
/**
 * Returns an expanded sort object, given a sort path and currentList object.
 *
 * @param { String } path, a string representation of a list of columns.
 * @param { Object } the current instantiation of the List prototype used for the <List/> scene
 * @return { Object } an expanded representation of the sort path passed in.
 */
export declare function sortParser(path: any, currentList: any): any;
