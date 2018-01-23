import { FieldTypeBase } from '../FieldTypeBase';
/**
 * Geo FieldType Constructor
 * @extends Field
 * @api public
 */
export declare class GeoPointType extends FieldTypeBase {
    constructor(list: any, path: any, options: any);
    protected init(): void;
    static properName: string;
    /**
     * Registers the field on the List's Mongoose Schema.
     * Adds a 2dsphere indexed lat/lng pair
     */
    addToSchema(schema: any): void;
    /**
     * Gets the field's data from an Item, as used by the React components
     */
    getData(item: any): any;
    /**
     * Formats the field value
     */
    format(item: any): any;
    /**
     * Asynchronously confirms that the provided value is valid
     */
    validateInput(data: any, callback: any): void;
    /**
     * Asynchronously confirms that the a value is present
     */
    validateRequiredInput(item: any, data: any, callback: any): void;
    /**
     * Validates that a value for this field has been provided in a data object
     *
     * Deprecated
     */
    inputIsValid(data: any, required: any, item: any): boolean;
    /**
     * Filters geopoints based on distance to a center point
     *
     * @param {Object} filter 				 The data from the frontend
     * @param {Number} filter.lat			 The latitude of the center point
     * @param {Number} filter.lon			 The longitude of the center point
     * @param {String} filter.distance.mode  The distance mode, either "max" or "min"
     * @param {Number} filter.distance.value The distance value
     */
    addFilterToQuery(filter: any): {};
    /**
     * Updates the value for this field in the item from a data object
     */
    updateItem(item: any, data: any, callback: any): void;
}
