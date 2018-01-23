import { DateInput } from '../../components/DateInput';
import { ArrayFieldBase, ArrayFieldPropsBase } from '../ArrayFieldBase';
export interface Props extends ArrayFieldPropsBase {
    formatString?: string;
    inputFormat?: string;
}
export declare class DateArrayField extends ArrayFieldBase<Props> {
    static displayName: string;
    static type: string;
    static readonly defaultProps: {
        adminPath: any;
        inputProps: {};
        labelProps: {};
        valueProps: {};
        size: string;
        formatString: string;
        inputFormat: string;
    };
    processInputValue: (value: any) => any;
    formatValue: (value: any) => string;
    getInputComponent: () => typeof DateInput;
}
