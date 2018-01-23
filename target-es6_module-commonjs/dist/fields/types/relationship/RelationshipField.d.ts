/// <reference types="react" />
import { FieldBase, FieldPropsBase } from '../FieldBase';
export interface Props extends FieldPropsBase {
    many?: any;
    filters?: any[];
    createInline?: any;
    refList?: any;
}
export declare class RelationshipField extends FieldBase<Props> {
    _isMounted: boolean;
    _itemsCache: {};
    static displayName: string;
    static type: string;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: any): void;
    shouldCollapse(): boolean;
    buildFilters(): string;
    cacheItem(item: any): void;
    loadValue(values: any): void;
    loadOptionsCallback(...args: any[]): void;
    loadOptions: (input: any, callback: any) => void;
    valueChanged: (value: any) => void;
    openCreate: () => void;
    closeCreate: () => void;
    onCreate: (item: any) => void;
    renderSelect(noedit?: any): JSX.Element;
    renderInputGroup(): JSX.Element;
    renderValue(): JSX.Element;
    renderField(): JSX.Element;
}
