import { FieldTypeBase } from '../FieldTypeBase';
/**
 * Location FieldType Constructor
 */
export declare class LocationType extends FieldTypeBase {
    paths_improve_overwrite: any;
    paths_improve: any;
    paths: any;
    requiredPaths: any;
    enableMapsAPI: boolean;
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    /**
     * Registers the field on the List's Mongoose Schema.
     */
    addToSchema(schema: any): void;
    addFilterToQuery(filter: any): {};
    /**
     * Formats a list of the values stored by the field. Only paths that
     * have values will be included.
     *
     * Optionally provide a space-separated list of values to include.
     *
     * Delimiter defaults to `', '`.
     */
    format(item: any, values: any, delimiter: any): any;
    /**
     * Detects whether the field has been modified
     */
    isModified(item: any): any;
    getInputFromData(data: any): any;
    /**
     * Validates that a value for this field has been provided in a data object
     */
    validateInput(data: any, callback: any): void;
    /**
     * Validates that input has been provided
     * TODO: Needs test coverage
     */
    validateRequiredInput(item: any, data: any, callback: any): void;
    /**
     * Validates that a value for this field has been provided in a data object
     *
     * options.required specifies an array or space-delimited list of paths that
     * are required (defaults to street1, suburb)
     *
     * Deprecated
     */
    inputIsValid(data: any, required: any, item: any): boolean;
    /**
     * Updates the value for this field in the item from a data object
     */
    updateItem(item: any, data: any, callback: any): void;
    /**
     * Autodetect the full address and lat, lng from the stored value.
     *
     * Uses Google's Maps API and may only be used in conjunction with a Google map.
     * Geocoding results without displaying them on a map is prohibited.
     * Please make sure your Keystone app complies with the Google Maps API License.
     *
     * Internal status codes mimic the Google API status codes.
     */
    googleLookup(item: any, region: any, update: any, callback: any): any;
    /**
     * Returns the distance from a [lng, lat] point in kilometres
     */
    kmFrom(item: any, point: any): number;
    /**
     * Returns the distance from a [lng, lat] point in miles
     */
    milesFrom(item: any, point: any): number;
}
