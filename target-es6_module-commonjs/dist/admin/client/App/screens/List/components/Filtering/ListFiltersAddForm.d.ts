/// <reference types="react" />
import * as React from 'react';
export interface Props {
    field: any;
    maxHeight?: number;
    onApply?: any;
    onCancel?: any;
    onHeightChange?: any;
    activeFilters?: any;
    onBack?: any;
    dispatch?: any;
}
export declare class ListFiltersAddForm extends React.Component<Props, any> {
    constructor(props: any);
    updateHeight: (bodyHeight: any) => void;
    updateValue: (filterValue: any) => void;
    handleFormSubmit: (e: any) => void;
    renderInvalidFilter(): JSX.Element;
    render(): JSX.Element;
}
