/// <reference types="react" />
import { FieldPropsBase, FieldBase } from '../FieldBase';
export interface Props extends FieldPropsBase {
    formatString?: string;
    paths?: {
        date?: any;
        time?: any;
        tzOffset?: any;
    };
    isUTC?: boolean;
}
export declare class DatetimeField extends FieldBase<Props> {
    static displayName: string;
    static type: string;
    focusTargetRef: string;
    dateInputFormat: string;
    timeInputFormat: string;
    tzOffsetInputFormat: string;
    parseFormats: ['YYYY-MM-DD', 'YYYY-MM-DD h:m:s a', 'YYYY-MM-DD h:m a', 'YYYY-MM-DD H:m:s', 'YYYY-MM-DD H:m'];
    constructor(props: any);
    static readonly defaultProps: {
        adminPath: any;
        inputProps: {};
        labelProps: {};
        valueProps: {};
        size: string;
        formatString: string;
    };
    moment(...args: any[]): any;
    isValid(value: any): any;
    format(value: any, format: any): any;
    handleChange: (dateValue: any, timeValue: any, tzOffsetValue?: any) => void;
    dateChanged: ({value}: {
        value: any;
    }) => void;
    timeChanged: (evt: any) => void;
    setNow: () => void;
    renderNote(): JSX.Element;
    renderUI(): JSX.Element;
}
