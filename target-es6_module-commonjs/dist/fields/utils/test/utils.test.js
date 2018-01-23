"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demand = require("must");
const addPresenceToQuery_1 = require("../addPresenceToQuery");
const evalDependsOn_1 = require("../evalDependsOn");
function testUtils() {
    describe('addPresenceToQuery', function () {
        it('should add $elemMatch if the presence is some', function () {
            const someFilter = { somepath: 'somefilter' };
            const result = addPresenceToQuery_1.addPresenceToQuery('some', someFilter);
            demand(result).eql({
                $elemMatch: someFilter,
            });
        });
        it('should add $not if the presence is none', function () {
            const someFilter = { somepath: 'somefilter' };
            const result = addPresenceToQuery_1.addPresenceToQuery('none', someFilter);
            demand(result).eql({
                $not: someFilter,
            });
        });
        it('should not change anything if no presence is passed', function () {
            const someFilter = { somepath: 'somefilter' };
            const result = addPresenceToQuery_1.addPresenceToQuery('', someFilter);
            demand(result).eql(someFilter);
        });
        it('should not change anything if an invalid presence is passed', function () {
            const someFilter = { somepath: 'somefilter' };
            const result = addPresenceToQuery_1.addPresenceToQuery('invalidstuffhere', someFilter);
            demand(result).eql(someFilter);
        });
    });
    describe('evalDependsOn', function () {
        it('should return true if dependsOn is not an object', function () {
            demand(evalDependsOn_1.evalDependsOn()).be.true();
        });
        it('should return true if dependsOn is an empty object', function () {
            demand(evalDependsOn_1.evalDependsOn({})).be.true();
        });
        it('should return true if the current field depends on another field, and that field has the value we want', function () {
            demand(evalDependsOn_1.evalDependsOn({
                name: 'Max',
            }, {
                name: 'Max',
            })).be.true();
        });
        it('should return false if the current field depends on another field, and that field does not have the value we want', function () {
            demand(evalDependsOn_1.evalDependsOn({
                name: 'Max',
            }, {
                name: 'Jed',
            })).be.false();
        });
        it('should return false if the current field depends on another field, and that field is undefined', function () {
            demand(evalDependsOn_1.evalDependsOn({
                name: 'Max',
            }, {
                notname: 'Max',
            })).be.false();
        });
    });
}
exports.testUtils = testUtils;
//# sourceMappingURL=utils.test.js.map