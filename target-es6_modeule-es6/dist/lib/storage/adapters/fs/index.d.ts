export declare class FSAdapter {
    options: any;
    constructor(options: any, schema: any);
    static compatibilityLevel: number;
    static SCHEMA_TYPES: {
        filename: StringConstructor;
    };
    static SCHEMA_FIELD_DEFAULTS: {
        filename: boolean;
    };
    /**
        Inherit common prototype behaviours for generating and retrying filenames
        from the keystone-storage-namefunctions package
    */
    getFilename: any;
    retryFilename: any;
    /**
        Gets the public path of a stored file by combining the publicPath option
        with the filename in the field value
    */
    getFileURL(file: any): string;
    /**
        Private function for getting the on-disk filename
    */
    pathForFile(filename: any): string;
    /**
        Uploads a file at the specified path and returns the value to be stored
        in the field value. The file argument must be an object as per the [multer
        file information spec](https://github.com/expressjs/multer#file-information)
    */
    uploadFile(file: any, callback: any): void;
    removeFile(file: any, callback: any): void;
    fileExists(filename: any, callback: any): void;
}
