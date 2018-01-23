/// <reference types="react" />
import { FieldBase, FieldPropsBase } from '../FieldBase';
import * as moment from 'moment';
export interface Props extends FieldPropsBase {
    formatString?: string;
    inputFormat?: string;
    label?: string;
    note?: string;
    onChange?: any;
    path?: string;
    value?: string;
    isUTC?: boolean;
}
export declare class DateField extends FieldBase<Props> {
    static displayName: string;
    static type: string;
    static readonly defaultProps: any;
    valueChanged: ({value}: {
        value: any;
    }) => void;
    toMoment(value: any): moment.Moment;
    isValid(value: any): boolean;
    format(value: any): string;
    setToday: () => void;
    renderValue(): JSX.Element;
    renderField(): JSX.Element;
}
