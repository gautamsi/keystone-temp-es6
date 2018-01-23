import { FieldTypeBase } from '../FieldTypeBase';
/**
 * password FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class PasswordType extends FieldTypeBase {
    paths: {
        confirm: any;
        hash: any;
    };
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    /**
     * Registers the field on the List's Mongoose Schema.
     *
     * Adds ...
     *
     * @api public
     */
    addToSchema(schema: any): void;
    /**
     * Add filters to a query
     */
    addFilterToQuery(filter: any): {};
    /**
     * Retrieves the field value
     *
     * Password fields  values are returned as booleans to indicate whether a value
     * has been set or not, so that we don't leak hashed passwords via API
     *
     * @api public
     */
    getData(item: any): boolean;
    /**
     * Formats the field value
     *
     * Password fields are always formatted as a random no. of asterisks,
     * because the saved hash should never be displayed nor the length
     * of the actual password hinted at.
     *
     * @api public
     */
    format(item: any): string;
    /**
     * Compares
     *
     * @api public
     */
    compare(item: any, candidate: any, callback: any): any;
    /**
     * Asynchronously confirms that the provided password is valid
     */
    validateInput(data: any, callback: any): void;
    static validate(pass: any, confirm: any, min: any, max: any, complexity: any, rejectCommon: any): {
        result: boolean;
        detail: string;
    };
    /**
     * Asynchronously confirms that the provided password is valid
     */
    validateRequiredInput(item: any, data: any, callback: any): void;
    /**
     * If password fields are required, check that either a value has been
     * provided or already exists in the field.
     *
     * Otherwise, input is always considered valid, as providing an empty
     * value will not change the password.
     *
     * Deprecated
     */
    inputIsValid(data: any, required: any, item: any): boolean;
    /**
     * Updates the value for this field in the item from a data object
     *
     * Will accept either the field path, or paths.hash to bypass bcrypt
     *
     * @api public
     */
    updateItem(item: any, data: any, callback: any): void;
}
