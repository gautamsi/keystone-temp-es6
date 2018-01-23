var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from 'react';
import { Button } from '../../../admin/client/App/elemental';
import { ImageThumbnail } from '../../components/ImageThumbnail';
export const CloudinaryImagesThumbnail = (_a) => {
    var { isDeleted, imageSourceLarge, imageSourceSmall, inputName, isQueued, openLightbox, shouldRenderActionButton, toggleDelete, value } = _a, props = __rest(_a, ["isDeleted", "imageSourceLarge", "imageSourceSmall", "inputName", "isQueued", "openLightbox", "shouldRenderActionButton", "toggleDelete", "value"]);
    // render icon feedback for intent
    let mask;
    if (isQueued)
        mask = 'upload';
    else if (isDeleted)
        mask = 'remove';
    // action button
    const actionButton = (shouldRenderActionButton && !isQueued) ? (React.createElement(Button, { variant: "link", color: isDeleted ? 'default' : 'cancel', block: true, onClick: toggleDelete }, isDeleted ? 'Undo' : 'Remove')) : null;
    const input = (!isQueued && !isDeleted && value) ? (React.createElement("input", { type: "hidden", name: inputName, value: JSON.stringify(value) })) : null;
    // provide gutter for the images
    const imageStyles = {
        float: 'left',
        marginBottom: 10,
        marginRight: 10,
    };
    return (React.createElement("div", { style: imageStyles },
        React.createElement(ImageThumbnail, { component: imageSourceLarge ? 'a' : 'span', href: !!imageSourceLarge && imageSourceLarge, onClick: !!imageSourceLarge ? openLightbox : undefined, mask: mask, target: !!imageSourceLarge && '__blank' },
            React.createElement("img", { src: imageSourceSmall, style: { height: 90 } })),
        actionButton,
        input));
};
