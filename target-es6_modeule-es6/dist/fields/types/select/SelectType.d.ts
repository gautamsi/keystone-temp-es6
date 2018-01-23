import { FieldTypeBase } from '../FieldTypeBase';
/**
 * Select FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class SelectType extends FieldTypeBase {
    numeric: boolean;
    ui: any;
    paths: {
        data: any;
        label: any;
        options: any;
        map: any;
    };
    ops: any;
    values: {}[];
    labels: string;
    map: any;
    emptyOption: boolean;
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    /**
     * Registers the field on the List's Mongoose Schema.
     *
     * Adds a virtual for accessing the label of the selected value,
     * and statics to the Schema for converting a value to a label,
     * and retrieving all of the defined options.
     */
    addToSchema(schema: any): void;
    /**
     * Returns a key value from the selected option
     */
    pluck(item: any, property: any, _default: any): any;
    /**
     * Retrieves a shallow clone of the options array
     */
    cloneOps(): {}[];
    /**
     * Retrieves a shallow clone of the options map
     */
    cloneMap(): any;
    /**
     * Add filters to a query
     */
    addFilterToQuery(filter: any): {};
    /**
     * Asynchronously confirms that the provided value is valid
     */
    validateInput(data: any, callback: any): void;
    /**
     * Asynchronously confirms that the provided value is present
     */
    validateRequiredInput(item: any, data: any, callback: any): void;
    /**
     * Validates that a valid option has been provided in a data object
     *
     * Deprecated
     */
    inputIsValid(data: any, required: any, item: any): boolean;
    /**
     * Formats the field value
     */
    format(item: any): string;
}
