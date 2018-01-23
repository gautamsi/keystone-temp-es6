/// <reference types="react" />
import * as React from 'react';
export interface Props {
    image: any;
    label?: 'dimensions' | 'publicId';
    secure?: boolean;
}
export declare class CloudinaryImageSummary extends React.Component<Props> {
    static displayName: string;
    renderLabel(): JSX.Element;
    renderImageThumbnail(): JSX.Element;
    render(): JSX.Element;
}
