import * as React from 'react';
const IMAGE_SIZE = 18;
const linkStyle = {
    marginRight: 8,
};
const boxStyle = {
    borderRadius: 3,
    display: 'inline-block',
    height: IMAGE_SIZE,
    overflow: 'hidden',
    verticalAlign: 'middle',
    width: IMAGE_SIZE,
};
const imageStyle = {
    display: 'block',
    height: IMAGE_SIZE,
    left: '50%',
    position: 'relative',
    WebkitTransform: 'translateX(-50%)',
    MozTransform: 'translateX(-50%)',
    msTransform: 'translateX(-50%)',
    transform: 'translateX(-50%)',
};
const textStyle = {
    color: '#888',
    display: 'inline-block',
    fontSize: '.8rem',
    marginLeft: 8,
    verticalAlign: 'middle',
};
export class CloudinaryImageSummary extends React.Component {
    renderLabel() {
        if (!this.props.label)
            return;
        const { label, image } = this.props;
        let text;
        if (label === 'dimensions') {
            text = `${image.width} × ${image.height}`;
        }
        else {
            text = `${image.public_id}.${image.format}`;
        }
        return (React.createElement("span", { style: textStyle }, text));
    }
    renderImageThumbnail() {
        if (!this.props.image)
            return;
        const startingUrl = this.props.secure ? this.props.image.secure_url : this.props.image.url;
        const url = startingUrl.replace(/image\/upload/, `image/upload/c_thumb,g_face,h_${IMAGE_SIZE},w_${IMAGE_SIZE}`);
        return React.createElement("img", { src: url, style: imageStyle, className: "img-load" });
    }
    render() {
        return (React.createElement("span", { style: linkStyle },
            React.createElement("span", { style: boxStyle }, this.renderImageThumbnail()),
            this.renderLabel()));
    }
}
CloudinaryImageSummary.displayName = 'CloudinaryImageSummary';
