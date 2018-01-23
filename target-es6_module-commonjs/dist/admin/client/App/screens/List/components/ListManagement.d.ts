/// <reference types="react" />
import * as React from 'react';
export declare const ListManagement: React.SFC<Props>;
export interface Props {
    checkedItems?: number;
    handleDelete: any;
    handleSelect: any;
    handleToggle: any;
    isOpen?: boolean;
    itemCount?: number;
    itemsPerPage?: number;
    nodelete?: boolean;
    noedit?: boolean;
    selectAllItemsLoading?: boolean;
    checkedItemCount?: any;
}
