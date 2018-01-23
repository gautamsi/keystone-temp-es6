/// <reference types="react" />
import DayPicker from 'react-day-picker';
import * as React from 'react';
import { Popout } from '../../admin/client/App/shared/Popout';
export interface Props {
    format?: string;
    name?: string;
    onChange: any;
    path?: string;
    value?: string;
}
export declare class DateInput extends React.Component<Props, any> {
    refs: {
        [key: string]: React.ReactInstance;
        picker: (DayPicker);
        popout: (Popout);
    };
    static displayName: string;
    static readonly defaultProps: {
        format: string;
    };
    constructor(props: any);
    componentDidMount(): void;
    componentWillReceiveProps(newProps: any): void;
    focus: () => void;
    handleInputChange: (e: any) => void;
    handleKeyPress: (e: any) => void;
    handleDaySelect: (e: any, date: any, modifiers: any) => void;
    showPicker(): void;
    showCurrentMonth(): void;
    handleFocus: (e: any) => void;
    handleCancel: () => void;
    handleBlur: (e: any) => void;
    render(): JSX.Element;
}
