export declare const initList: (List: any) => void;
export declare const getTestItems: () => ({} | {
    loc: {
        number: number;
        street1: string;
        street2: string;
        city: string;
        postcode: string;
        country: string;
    };
} | {
    loc: {
        number: number;
        street1: string;
        state: string;
        suburb: string;
        postcode: number;
        country: string;
    };
} | {
    loc: {
        number: number;
        street1: string;
        state: string;
        suburb: string;
        postcode: string;
        country: string;
    };
} | {
    loc: {
        number: number;
        street1: string;
        state: string;
        city: string;
        postcode: string;
        country: string;
    };
})[];
export declare const testFilters: (List: any, filter: any) => void;
