import { FieldTypeBase } from '../FieldTypeBase';
/**
 * Relationship FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class RelationshipType extends FieldTypeBase {
    paths: {
        refList: any;
    };
    createInline: boolean;
    filters: any;
    many: boolean;
    readonly isValid: boolean;
    readonly refList: any;
    readonly hasFilters: number;
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    /**
     * Get client-side properties to pass to react field.
     */
    getProperties(): {
        refList: {
            singular: any;
            plural: any;
            path: any;
            key: any;
        };
    };
    getExpandedData(item: any): any;
    /**
     * Registers the field on the List's Mongoose Schema.
     */
    addToSchema(schema: any): void;
    /**
     * Gets the field's data from an Item, as used by the React components
     */
    getData(item: any): any;
    /**
     * Add filters to a query
     */
    addFilterToQuery(filter: any): {};
    /**
     * Formats the field value
     */
    format(item: any): any;
    /**
     * Asynchronously confirms that the provided value is valid
     *
     * TODO: might be a good idea to check the value provided looks like a MongoID
     * TODO: we're just testing for strings here, so actual MongoID Objects (from
     * mongoose) would fail validation. not sure if this is an issue.
     */
    validateInput(data: any, callback: any): void;
    /**
     * Asynchronously confirms that the provided value is present
     */
    validateRequiredInput(item: any, data: any, callback: any): void;
    /**
     * Validates that a value for this field has been provided in a data object
     *
     * Deprecated
     */
    inputIsValid(data: any, required: any, item: any): boolean;
    /**
     * Updates the value for this field in the item from a data object.
     * Only updates the value if it has changed.
     * Treats an empty string as a null value.
     * If data object does not contain the path field, then leave the field untouched.
     * falsey values such as `null` or an empty string will reset the field
     */
    updateItem(item: any, data: any, callback: any): void;
}
