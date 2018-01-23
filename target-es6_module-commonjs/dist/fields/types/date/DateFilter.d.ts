/// <reference types="react" />
import * as React from 'react';
import DayPicker from 'react-day-picker';
export interface Props {
    filter?: {
        mode?: any;
        inverted?: boolean;
        value?: any;
        before?: any;
        after?: any;
    };
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
    _isMounted: boolean;
    static displayName: string;
    static getDefaultValue(): {
        mode: string;
        inverted: boolean;
        value: string;
        before: string;
        after: string;
    };
    static readonly defaultProps: {
        format: string;
        filter: {
            mode: string;
            inverted: boolean;
            value: string;
            before: string;
            after: string;
        };
        value: Date;
    };
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    updateFilter(value: any): void;
    toggleInverted: (value: any) => void;
    selectMode: (e: any) => void;
    setFocus(mode: any): void;
    handleInputChange: (e: any) => void;
    setActiveField: (field: any) => void;
    switchBetweenActiveInputFields: (e: any, day: any, modifiers: any) => void;
    selectDay: (e: any, day: any, modifiers: any) => void;
    showCurrentDate: () => void;
    renderToggle(): JSX.Element;
    renderControls(): any;
    render(): JSX.Element;
}