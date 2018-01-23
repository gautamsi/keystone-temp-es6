var objectAssign = require('object-assign');
var fieldTestObjectsPath = require('keystone-nightwatch-e2e').fieldTestObjectsPath;
var path = require('path');
var TextFieldTestObject = require(path.resolve(fieldTestObjectsPath, 'TextFieldTestObject'));

export = function TextModelTestConfig (config) {
	return {
		name: new TextFieldTestObject(objectAssign({}, config, {fieldName: 'name'})),
		fieldA: new TextFieldTestObject(objectAssign({}, config, {fieldName: 'fieldA'})),
		fieldB: new TextFieldTestObject(objectAssign({}, config, {fieldName: 'fieldB'})),
	};
};
