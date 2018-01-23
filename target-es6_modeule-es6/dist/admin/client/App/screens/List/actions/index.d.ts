/**
 * Select a list, and set it as the active list. Called whenever the main
 * List component mounts or the list changes.
 *
 * @param  {String} id The list ID, passed via this.props.match.params.listId
 */
export declare function selectList(id: any): (dispatch: any, getState: any) => void;
export declare function loadInitialItems(): {
    type: string;
};
/**
 * Set the current page
 *
 * @param {Number} index The page number we want to be on
 */
export declare function setCurrentPage(index?: any): {
    type: string;
    index: number;
};
import { setFilter, clearFilter, clearAllFilters, setActiveSearch, setActiveColumns, clearCachedQuery, setActiveSort } from './active';
import { loadItems, itemsLoaded, itemLoadingError, deleteItems, downloadItems } from './items';
import { setDragBase, resetItems, reorderItems, setRowAlert, moveItem } from './dragdrop';
export { setFilter, clearFilter, clearAllFilters, setActiveSearch, setActiveColumns, setActiveSort, clearCachedQuery, loadItems, itemsLoaded, itemLoadingError, deleteItems, setDragBase, resetItems, reorderItems, setRowAlert, moveItem, downloadItems };
