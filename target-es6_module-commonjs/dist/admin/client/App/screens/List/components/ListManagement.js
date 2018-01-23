"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const elemental_1 = require("../../../elemental");
exports.ListManagement = (_a) => {
    var { checkedItemCount, handleDelete, handleSelect, handleToggle, isOpen, itemCount, itemsPerPage, nodelete, noedit, selectAllItemsLoading } = _a, props = __rest(_a, ["checkedItemCount", "handleDelete", "handleSelect", "handleToggle", "isOpen", "itemCount", "itemsPerPage", "nodelete", "noedit", "selectAllItemsLoading"]);
    // do not render if there's no results
    // or if edit/delete unavailable on the list
    if (!itemCount || (nodelete && noedit))
        return null;
    const buttonNoteStyles = { color: '#999', fontWeight: 'normal' };
    // delete button
    const actionButtons = isOpen && (React.createElement(elemental_1.InputGroupSection, null,
        React.createElement(elemental_1.GlyphButton, { color: "cancel", disabled: !checkedItemCount, glyph: "trashcan", onClick: handleDelete, position: "left", variant: "link" }, "Delete")));
    // select buttons
    const allVisibleButtonIsActive = checkedItemCount === itemCount;
    const pageVisibleButtonIsActive = checkedItemCount === itemsPerPage;
    const noneButtonIsActive = !checkedItemCount;
    const selectAllButton = itemCount > itemsPerPage && (React.createElement(elemental_1.InputGroupSection, null,
        React.createElement(elemental_1.Button, { active: allVisibleButtonIsActive, onClick: () => handleSelect('all'), title: "Select all rows (including those not visible)" },
            selectAllItemsLoading ? React.createElement(elemental_1.Spinner, null) : 'All',
            " ",
            React.createElement("small", { style: buttonNoteStyles },
                "(",
                itemCount,
                ")"))));
    const selectButtons = isOpen ? (React.createElement(elemental_1.InputGroupSection, null,
        React.createElement(elemental_1.InputGroup, { contiguous: true },
            selectAllButton,
            React.createElement(elemental_1.InputGroupSection, null,
                React.createElement(elemental_1.Button, { active: pageVisibleButtonIsActive, onClick: () => handleSelect('visible'), title: "Select all rows" },
                    itemCount > itemsPerPage ? 'Page ' : 'All ',
                    React.createElement("small", { style: buttonNoteStyles },
                        "(",
                        itemCount > itemsPerPage ? itemsPerPage : itemCount,
                        ")"))),
            React.createElement(elemental_1.InputGroupSection, null,
                React.createElement(elemental_1.Button, { active: noneButtonIsActive, onClick: () => handleSelect('none'), title: "Deselect all rows" }, "None"))))) : null;
    // selected count text
    const selectedCountText = isOpen ? (React.createElement(elemental_1.InputGroupSection, null,
        React.createElement("span", { style: { color: '#666', display: 'inline-block', lineHeight: '2.4em', margin: 1 } },
            checkedItemCount,
            " selected"))) : null;
    // put it all together
    return (React.createElement("div", null,
        React.createElement(elemental_1.InputGroup, { style: { float: 'left', marginRight: '.75em', marginBottom: 0 } },
            React.createElement(elemental_1.InputGroupSection, null,
                React.createElement(elemental_1.Button, { active: isOpen, onClick: () => handleToggle(!isOpen) }, "Manage")),
            selectButtons,
            actionButtons,
            selectedCountText)));
};
