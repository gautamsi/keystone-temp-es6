"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BooleanType_1 = require("./boolean/BooleanType");
const CloudinaryImageType_1 = require("./cloudinaryimage/CloudinaryImageType");
const CloudinaryImagesType_1 = require("./cloudinaryimages/CloudinaryImagesType");
const CodeType_1 = require("./code/CodeType");
const ColorType_1 = require("./color/ColorType");
const DateType_1 = require("./date/DateType");
const DateArrayType_1 = require("./datearray/DateArrayType");
const DatetimeType_1 = require("./datetime/DatetimeType");
const EmailType_1 = require("./email/EmailType");
const EmbedlyType_1 = require("./embedly/EmbedlyType");
const FileType_1 = require("./file/FileType");
const GeoPointType_1 = require("./geopoint/GeoPointType");
const HtmlType_1 = require("./html/HtmlType");
const KeyType_1 = require("./key/KeyType");
const LocationType_1 = require("./location/LocationType");
const MarkdownType_1 = require("./markdown/MarkdownType");
const MoneyType_1 = require("./money/MoneyType");
const NameType_1 = require("./name/NameType");
const NumberType_1 = require("./number/NumberType");
const NumberArrayType_1 = require("./numberarray/NumberArrayType");
const PasswordType_1 = require("./password/PasswordType");
const RelationshipType_1 = require("./relationship/RelationshipType");
const SelectType_1 = require("./select/SelectType");
const TextType_1 = require("./text/TextType");
const TextareaType_1 = require("./textarea/TextareaType");
const TextArrayType_1 = require("./textarray/TextArrayType");
const UrlType_1 = require("./url/UrlType");
var FieldTypeBase_1 = require("./FieldTypeBase");
exports.FieldTypeBase = FieldTypeBase_1.FieldTypeBase;
var FieldBase_1 = require("./FieldBase");
exports.FieldBase = FieldBase_1.FieldBase;
var ArrayFieldBase_1 = require("./ArrayFieldBase");
exports.ArrayFieldBase = ArrayFieldBase_1.ArrayFieldBase;
exports.FieldTypes = {
    Boolean: BooleanType_1.BooleanType,
    CloudinaryImage: CloudinaryImageType_1.CloudinaryImageType,
    CloudinaryImages: CloudinaryImagesType_1.CloudinaryImagesType,
    Code: CodeType_1.CodeType,
    Color: ColorType_1.ColorType,
    Date: DateType_1.DateType,
    DateArray: DateArrayType_1.DateArrayType,
    Datetime: DatetimeType_1.DatetimeType,
    Email: EmailType_1.EmailType,
    Embedly: EmbedlyType_1.EmbedlyType,
    File: FileType_1.FileType,
    GeoPoint: GeoPointType_1.GeoPointType,
    Html: HtmlType_1.HtmlType,
    Key: KeyType_1.KeyType,
    Location: LocationType_1.LocationType,
    Markdown: MarkdownType_1.MarkdownType,
    Money: MoneyType_1.MoneyType,
    Name: NameType_1.NameType,
    Number: NumberType_1.NumberType,
    NumberArray: NumberArrayType_1.NumberArrayType,
    Password: PasswordType_1.PasswordType,
    Relationship: RelationshipType_1.RelationshipType,
    Select: SelectType_1.SelectType,
    Text: TextType_1.TextType,
    Textarea: TextareaType_1.TextareaType,
    TextArray: TextArrayType_1.TextArrayType,
    Url: UrlType_1.UrlType
};
