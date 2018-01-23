"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demand = require("must");
const dragdrop_1 = require("../dragdrop");
const constants_1 = require("../../constants");
describe('<List /> dragdrop actions', () => {
    describe('resetDragPage()', () => {
        it('should have a type of RESET_DRAG_PAGE', () => {
            demand(dragdrop_1.resetDragPage().type).eql(constants_1.RESET_DRAG_PAGE);
        });
    });
    describe('resetDragItems()', () => {
        it('should have a type of RESET_DRAG_ITEMS', () => {
            demand(dragdrop_1.resetDragItems().type).eql(constants_1.RESET_DRAG_ITEMS);
        });
    });
    describe('setDragItem()', () => {
        it('should have a type of SET_DRAG_ITEM', () => {
            demand(dragdrop_1.setDragItem().type).eql(constants_1.SET_DRAG_ITEM);
        });
        it('should pass on the item', () => {
            const item = { some: 'item' };
            demand(dragdrop_1.setDragItem(item).item).eql(item);
        });
    });
    describe('setDragIndex()', () => {
        it('should have a type of SET_DRAG_INDEX', () => {
            demand(dragdrop_1.setDragIndex().type).eql(constants_1.SET_DRAG_INDEX);
        });
        it('should pass on the index', () => {
            const index = 100;
            demand(dragdrop_1.setDragIndex(index).index).eql(index);
        });
    });
    describe('setRowAlert()', () => {
        it('should have a type of SET_ROW_ALERT', () => {
            demand(dragdrop_1.setRowAlert().type).eql(constants_1.SET_ROW_ALERT);
        });
        it('should pass on the data', () => {
            const data = 100;
            demand(dragdrop_1.setRowAlert(data).data).eql(data);
        });
    });
    describe('moveItem()', () => {
        it('should have a type of DRAG_MOVE_ITEM', () => {
            demand(dragdrop_1.moveItem().type).eql(constants_1.DRAG_MOVE_ITEM);
        });
        it('should pass on the previous index', () => {
            const prevIndex = 100;
            demand(dragdrop_1.moveItem(prevIndex).prevIndex).eql(prevIndex);
        });
        it('should pass on the new index', () => {
            const newIndex = 100;
            demand(dragdrop_1.moveItem(undefined, newIndex).newIndex).eql(newIndex);
        });
        it('should pass on the options', () => {
            const options = { some: 'options' };
            demand(dragdrop_1.moveItem(undefined, undefined, options).options).eql(options);
        });
    });
});
