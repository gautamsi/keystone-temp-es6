/// <reference types="react" />
import * as React from 'react';
import { FormInput } from '../../../../elemental';
export declare class ListFiltersAdd extends React.Component<{
    maxHeight?: number;
    dispatch?: any;
    activeFilters?: any;
    availableFilters?: any;
}, any> {
    static displayName: string;
    searchField: FormInput;
    static readonly defaultProps: {
        maxHeight: number;
    };
    refs: {
        searchField: HTMLInputElement;
    };
    constructor(props: any);
    updateSearch: (e: any) => void;
    openPopout: () => void;
    closePopout: () => void;
    setPopoutHeight: (height: any) => void;
    navigateBack: () => void;
    focusSearch(): void;
    selectField(field: any): void;
    applyFilter(value: any): void;
    renderList(): JSX.Element;
    renderForm(): JSX.Element;
    render(): JSX.Element;
}
