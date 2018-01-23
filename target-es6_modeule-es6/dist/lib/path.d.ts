/**
 * Path Class
 */
export declare class Path {
    str: string;
    last: string;
    parts: string[];
    constructor(str: string);
    addTo(obj: object, val: any): object;
    get(obj: object, subpath?: string): any;
}
