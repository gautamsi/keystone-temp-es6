/// <reference types="react" />
import * as React from 'react';
import DayPicker from 'react-day-picker';
export interface Props {
    filter?: {
        mode?: any;
        presence?: string;
        value?: any;
        after?: any;
        before?: any;
    };
    folder?: any;
    onChange?: any;
    field?: any;
    format?: any;
}
export declare class DateFilter extends React.Component<Props, any> {
    refs: {
        [key: string]: (Element);
        input: (HTMLInputElement);
        daypicker: (DayPicker);
    };
    static displayName: string;
    static getDefaultValue(): {
        mode: string;
        presence: string;
        value: string;
        before: string;
        after: string;
    };
    static readonly defaultProps: {
        format: string;
        filter: {
            mode: string;
            presence: string;
            value: string;
            before: string;
            after: string;
        };
        value: Date;
    };
    constructor(props: any);
    componentDidMount(): void;
    updateFilter(value: any): void;
    selectPresence: (e: any) => void;
    selectMode: (e: any) => void;
    handleInputChange: (e: any) => void;
    setActiveField: (field: any) => void;
    switchBetweenActiveInputFields: (e: any, day: any, modifiers: any) => void;
    selectDay: (e: any, day: any, modifiers: any) => void;
    showCurrentDate: () => void;
    renderControls(): any;
    render(): JSX.Element;
}
