export declare const TOKEN_KEY = "_csrf";
export declare const LOCAL_KEY = "csrf_token_key";
export declare const LOCAL_VALUE = "csrf_token_value";
export declare const SECRET_KEY: string;
export declare const SECRET_LENGTH = 10;
export declare const CSRF_HEADER_KEY = "x-csrf-token";
export declare const XSRF_HEADER_KEY = "x-xsrf-token";
export declare const XSRF_COOKIE_KEY = "XSRF-TOKEN";
export declare function createSecret(): string;
export declare function getSecret(req: any): any;
export declare function createToken(req: any): string;
export declare function getToken(req: any, res: any): any;
export declare function requestToken(req: any): any;
export declare function validate(req: any, token?: any): any;
export declare const middleware: {
    init: (req: any, res: any, next: any) => void;
    validate: (req: any, res: any, next: any) => any;
};
