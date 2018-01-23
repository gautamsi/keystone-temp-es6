/// <reference types="react" />
import { FieldBase, FieldPropsBase } from '../FieldBase';
export declare class GeoPointField extends FieldBase<FieldPropsBase> {
    static displayName: string;
    static type: string;
    focusTargetRef: 'lat';
    handleLat: (event: any) => void;
    handleLong: (event: any) => void;
    renderValue(): JSX.Element;
    renderField(): JSX.Element;
}
