/// <reference types="mongoose" />
import * as mongoose from 'mongoose';
import { Path } from '../../lib/path';
import { List } from '../../lib/list';
/**
 * Field Constructor
 * =================
 *
 * Extended by fieldType Classes, should not be used directly.
 *
 * @api public
 */
export declare abstract class FieldTypeBase {
    protected _underscoreMethods: any[];
    protected _nativeType: any;
    _fixedSize: any;
    _defaultSize: string;
    __size: any;
    _properties: any[];
    __options: any;
    defaults: any;
    typeDescription: any;
    label: any;
    options: any;
    type: string;
    path: string;
    _path: Path;
    list: List<any>;
    readonly size: any;
    readonly initial: any;
    readonly required: any;
    readonly note: any;
    readonly col: any;
    readonly noedit: any;
    readonly nocol: any;
    readonly nosort: any;
    readonly collapse: any;
    readonly hidden: any;
    readonly dependsOn: any;
    constructor(list: List<any>, path: string, options: any);
    protected init(): void;
    addFilterToQuery(filter: any): void;
    getProperties(): void;
    /**
     * Gets the options for the Field, as used by the React components
     */
    getOptions(): any;
    /**
     * Validates and returns the size of the field.
     * Defaults to deprecated 'width' option.
     */
    getSize(): any;
    /**
     * Gets default value for the field, based on the option or default for the type
     */
    getDefaultValue(): any;
    /**
     * Gets the field's data from an Item, as used by the React components
     */
    getData(item: any): any;
    /**
     * Field watching implementation
     */
    getPreSaveWatcher(): (next: any) => any;
    /**
     * Default method to register the field on the List's Mongoose Schema.
     * Overridden by some fieldType Classes
     */
    addToSchema(schema: mongoose.Schema): void;
    /**
     * Binds the methods specified by the _underscoreMethods property
     * Must be called by the field type's `addToSchema` method
     * Always includes the `update` method
     */
    bindUnderscoreMethods(): void;
    /**
     * Adds a method to the underscoreMethods collection on the field's list,
     * with a path prefix to match this field's path and bound to the document
     */
    underscoreMethod(path: any, fn: Function): void;
    /**
     * Default method to format the field value for display
     * Overridden by some fieldType Classes
     *
     * @api public
     */
    format(item: any, ...args: any[]): any;
    /**
     * Default method to detect whether the field has been modified in an item
     * Overridden by some fieldType Classes
     *
     * @api public
     */
    isModified(item: any): any;
    /**
     * Checks whether a provided value for the field is in a valid format
     * Overridden by some fieldType Classes
     *
     * @api public
     */
    validateInput(data: any, callback: any): void;
    /**
     * Validates that a value for this field has been provided in a data object,
     * taking into account existing data in an item
     * Overridden by some fieldType Classes
     *
     * @api public
     */
    validateRequiredInput(item: any, data: any, callback: any): void;
    /**
     * Validates that a value for this field has been provided in a data object
     * Overridden by some fieldType Classes
     *
     * Not a reliable public API; use inputIsValid, which is async, instead.
     * This method has been deprecated.
     */
    inputIsValid(data: any, required?: any, item?: any): boolean;
    /**
     * Updates the value for this field in the item from a data object
     * Overridden by some fieldType Classes
     *
     * @api public
     */
    updateItem(item: any, data: any, callback: any, ...rest: any[]): void;
    /**
     * Retrieves the value from an object, whether the path is nested or flattened
     *
     * @api public
     */
    getValueFromData(data: any, subpath?: any): any;
}
