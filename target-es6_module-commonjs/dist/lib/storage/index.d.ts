import { FSAdapter } from './adapters/fs';
/**
    # Storage Prototype

    Creates a new Keystone Storage instance, and validates and initialises the
    specified adapter. Storage schema is configured from the adapter or default.
*/
export declare class Storage {
    adapter: any;
    schema: any;
    constructor(options: any);
    uploadFile(file: any, callback: any): any;
    /**
        Removes a stored file by passing the field value to the adapter.
    */
    removeFile(value: any, callback: any): void;
    static Adapters: {
        FS: typeof FSAdapter;
    };
}
