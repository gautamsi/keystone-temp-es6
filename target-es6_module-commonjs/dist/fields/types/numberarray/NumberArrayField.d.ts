import { ArrayFieldBase, ArrayFieldPropsBase } from '../ArrayFieldBase';
export declare class NumberArrayField extends ArrayFieldBase<ArrayFieldPropsBase> {
    static displayName: string;
    static type: string;
    cleanInput: (input: any) => any;
}
