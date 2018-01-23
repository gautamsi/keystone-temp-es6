/// <reference types="react" />
import { FieldBase, FieldPropsBase } from '../FieldBase';
export interface Props extends FieldPropsBase {
    paths?: any;
    enableMapsAPI?: boolean;
}
/**
 * TODO:
 * - Remove dependency on underscore
 * - Custom path support
 */
export declare class LocationField extends FieldBase<Props> {
    static displayName: string;
    static type: string;
    constructor(props: any);
    componentWillMount(): void;
    shouldCollapse(): boolean;
    uncollapseFields: () => void;
    fieldChanged(fieldPath: any, event: any): void;
    makeChanger: (fieldPath: any) => any;
    geoChanged(i: any, event: any): void;
    makeGeoChanger: (fieldPath: any) => any;
    formatValue(): string;
    renderValue(): JSX.Element;
    renderField(fieldPath?: any, label?: any, collapse?: any, autoFocus?: any): JSX.Element;
    renderSuburbState(): JSX.Element;
    renderPostcodeCountry(): JSX.Element;
    renderGeo(): JSX.Element;
    updateGoogleOption(key: any, e: any): void;
    makeGoogler(key: any): any;
    renderGoogleOptions(): JSX.Element;
    renderNote(): JSX.Element;
    renderUI(): JSX.Element;
}
