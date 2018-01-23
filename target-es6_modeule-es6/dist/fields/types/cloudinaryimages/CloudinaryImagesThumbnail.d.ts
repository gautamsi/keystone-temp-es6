/// <reference types="react" />
import * as React from 'react';
export declare const CloudinaryImagesThumbnail: React.SFC<Props>;
export interface Props {
    imageSourceLarge?: string;
    imageSourceSmall: string;
    isDeleted?: boolean;
    isQueued?: boolean;
    openLightbox: any;
    shouldRenderActionButton?: boolean;
    toggleDelete: any;
    inputName?: any;
    value?: any;
}
