export { sortable } from './schemaPlugins/sortable';
export { autokey } from './schemaPlugins/autokey';
export { track } from './schemaPlugins/track';
export { history } from './schemaPlugins/history';
export declare const methods: {
    getRelated: (paths: any, callback: any, nocollapse: any) => void;
    populateRelated: (rel: any, callback: any) => void;
};
export declare const options: {
    transform: (doc: any, ret: any) => void;
};
