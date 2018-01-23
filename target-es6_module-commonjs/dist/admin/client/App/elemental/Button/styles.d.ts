export declare const common: {
    base: {
        'appearance': string;
        'background': string;
        'borderWidth': number;
        'borderStyle': string;
        'borderColor': string;
        'borderRadius': string;
        'cursor': string;
        'display': string;
        'fontWeight': number;
        'height': string;
        'lineHeight': string;
        'marginBottom': number;
        'padding': string;
        'outline': number;
        'textAlign': string;
        'touchAction': string;
        'userSelect': string;
        'verticalAlign': string;
        'whiteSpace': string;
        ':hover': {
            color: string;
            textDecoration: string;
        };
        ':focus': {
            color: string;
            textDecoration: string;
        };
    };
    block: {
        display: string;
        width: string;
    };
    disabled: {
        opacity: number;
        pointerEvents: string;
    };
    large: {
        fontSize: string;
    };
    default: {
        fontSize: string;
    };
    small: {
        fontSize: string;
    };
    xsmall: {
        fontSize: string;
        lineHeight: string;
        paddingLeft: string;
        paddingRight: string;
    };
};
export declare const fill: (color: any) => {
    base: {
        'borderColor': string;
        'boxShadow': string;
        'color': any;
        'fontWeight': number;
        'textShadow': string;
        ':hover': {
            borderColor: string;
            boxShadow: string;
            color: any;
            outline: string;
            background: string;
        };
        ':focus': {
            borderColor: string;
            boxShadow: string;
            color: any;
            outline: string;
            background: string;
        };
        ':active': {
            backgroundColor: string;
            backgroundImage: string;
            borderColor: string;
            boxShadow: string;
        };
        background: string;
    };
    active: {
        backgroundColor: string;
        backgroundImage: string;
        borderColor: string;
        boxShadow: string;
    };
} | {
    base: {
        'borderColor': string;
        'color': string;
        'textShadow': string;
        ':hover': {
            borderColor: string;
            boxShadow: string;
            color: string;
            background: string;
        };
        ':focus': {
            borderColor: string;
            boxShadow: string;
            color: string;
            outline: string;
        };
        ':active': {
            background: string;
            borderColor: string;
            boxShadow: string;
            color: string;
        };
        background: string;
    };
    active: {
        ':hover': {
            background: string;
            borderColor: string;
            boxShadow: string;
            color: string;
        };
        ':focus': {
            boxShadow: string;
            borderColor: string;
            color: string;
            outline: string;
            background: string;
        };
        ':active': {
            background: string;
            borderColor: string;
            boxShadow: string;
            color: string;
        };
        background: string;
        borderColor: string;
        boxShadow: string;
        color: string;
    };
};
export declare const hollow: (color: any) => {
    base: {
        'background': string;
        'borderColor': any;
        'color': any;
        ':hover': {
            backgroundImage: string;
            backgroundColor: string;
            borderColor: string;
            boxShadow: string;
            color: any;
            outline: string;
        };
        ':focus ': {
            backgroundImage: string;
            backgroundColor: string;
            borderColor: string;
            boxShadow: string;
            color: any;
            outline: string;
        } & {
            boxShadow: string;
        };
        ':active': {
            backgroundColor: string;
            borderColor: string;
            boxShadow: string;
        };
    };
    active: {
        backgroundColor: string;
        borderColor: string;
        boxShadow: string;
    };
};
export declare const link: (color: any) => {
    base: {
        'background': string;
        'border': number;
        'boxShadow': string;
        'color': any;
        'fontWeight': string;
        'outline': string;
        ':hover': {
            color: any;
            textDecoration: string;
        };
        ':focus': {
            color: any;
            textDecoration: string;
        };
        ':active': {
            color: any;
            textDecoration: string;
        };
    };
    active: {
        color: any;
        textDecoration: string;
    };
} | {
    base: {
        ':hover': {
            backgroundColor: string;
            borderColor: string;
            boxShadow: string;
            color: string;
            textDecoration: string;
            background: string;
        };
        ':focus': {
            backgroundColor: string;
            borderColor: string;
            boxShadow: string;
            color: string;
            textDecoration: string;
            background: string;
        };
        ':active': {
            backgroundColor: string;
            backgroundImage: string;
            borderColor: string;
            boxShadow: string;
            color: string;
        };
        'background': string;
        'border': number;
        'boxShadow': string;
        'color': any;
        'fontWeight': string;
        'outline': string;
    };
    active: {
        backgroundColor: string;
        backgroundImage: string;
        borderColor: string;
        boxShadow: string;
        color: string;
    };
};
