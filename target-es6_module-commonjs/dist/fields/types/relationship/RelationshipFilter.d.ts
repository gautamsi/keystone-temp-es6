/// <reference types="react" />
import * as React from 'react';
export interface Props {
    field?: any;
    filter?: {
        inverted?: boolean;
        value?: Array<any>;
    };
    onHeightChange?: any;
    onChange?: any;
}
export declare class RelationshipFilter extends React.Component<Props, any> {
    refs: {
        [key: string]: (Element);
        container: (HTMLElement);
    };
    _itemsCache: {};
    static getDefaultValue(): {
        inverted: boolean;
        value: any[];
    };
    static readonly defaultProps: {
        filter: {
            inverted: boolean;
            value: any[];
        };
    };
    constructor(props: any);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    isLoading(): any;
    populateValue(value: any): void;
    cacheItem(item: any): void;
    buildFilters(): string;
    loadSearchResults(thenPopulateValue: any): void;
    updateHeight(): void;
    toggleInverted: (inverted: any) => void;
    updateSearch: (e: any) => void;
    selectItem: (item: any) => void;
    removeItem: (item: any) => void;
    updateFilter(value: any): void;
    renderItems(items: any, selected?: any): any;
    render(): JSX.Element;
}
