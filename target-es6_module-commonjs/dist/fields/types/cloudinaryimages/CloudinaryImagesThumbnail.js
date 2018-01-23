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
const elemental_1 = require("../../../admin/client/App/elemental");
const ImageThumbnail_1 = require("../../components/ImageThumbnail");
exports.CloudinaryImagesThumbnail = (_a) => {
    var { isDeleted, imageSourceLarge, imageSourceSmall, inputName, isQueued, openLightbox, shouldRenderActionButton, toggleDelete, value } = _a, props = __rest(_a, ["isDeleted", "imageSourceLarge", "imageSourceSmall", "inputName", "isQueued", "openLightbox", "shouldRenderActionButton", "toggleDelete", "value"]);
    // render icon feedback for intent
    let mask;
    if (isQueued)
        mask = 'upload';
    else if (isDeleted)
        mask = 'remove';
    // action button
    const actionButton = (shouldRenderActionButton && !isQueued) ? (React.createElement(elemental_1.Button, { variant: "link", color: isDeleted ? 'default' : 'cancel', block: true, onClick: toggleDelete }, isDeleted ? 'Undo' : 'Remove')) : null;
    const input = (!isQueued && !isDeleted && value) ? (React.createElement("input", { type: "hidden", name: inputName, value: JSON.stringify(value) })) : null;
    // provide gutter for the images
    const imageStyles = {
        float: 'left',
        marginBottom: 10,
        marginRight: 10,
    };
    return (React.createElement("div", { style: imageStyles },
        React.createElement(ImageThumbnail_1.ImageThumbnail, { component: imageSourceLarge ? 'a' : 'span', href: !!imageSourceLarge && imageSourceLarge, onClick: !!imageSourceLarge ? openLightbox : undefined, mask: mask, target: !!imageSourceLarge && '__blank' },
            React.createElement("img", { src: imageSourceSmall, style: { height: 90 } })),
        actionButton,
        input));
};
