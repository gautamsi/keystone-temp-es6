"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demand = require("must");
const getRelatedIconClass_1 = require("../getRelatedIconClass");
describe('getRelatedIconClass', () => {
    it('should return "octicon-primitive-dot" by default', () => {
        demand(getRelatedIconClass_1.getRelatedIconClass('')).eql('octicon octicon-primitive-dot');
    });
    it('should return a related icon class', () => {
        demand(getRelatedIconClass_1.getRelatedIconClass('times')).eql('octicon octicon-clock');
    });
});
//# sourceMappingURL=getRelatedIconClass.test.js.map