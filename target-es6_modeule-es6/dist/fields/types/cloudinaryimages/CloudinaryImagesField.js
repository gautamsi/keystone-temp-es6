/*
TODO: This component manages thumbnails using some wacky internal state.
It works, but would really benefit from a cleanup/rewrite. It may not behave
as expected in different situations (i.e. does not report updated value
to props.onChange correctly as the user interacts with it)
*/
import * as _ from 'lodash';
import * as async from 'async';
import * as React from 'react';
import { FieldBase } from '../FieldBase';
import { Button, FormField, FormNote } from '../../../admin/client/App/elemental';
import * as Lightbox from 'react-images';
import { cloudinaryResize } from '../../../admin/client/utils/cloudinaryResize';
import { CloudinaryImagesThumbnail as Thumbnail } from './CloudinaryImagesThumbnail';
import { HiddenFileInput } from '../../components/HiddenFileInput';
import { FileChangeMessage } from '../../components/FileChangeMessage';
const SUPPORTED_TYPES = ['image/*', 'application/pdf', 'application/postscript'];
const SUPPORTED_REGEX = new RegExp(/^image\/|application\/pdf|application\/postscript/g);
const RESIZE_DEFAULTS = {
    crop: 'fit',
    format: 'jpg',
};
let uploadInc = 1000;
export class CloudinaryImagesField extends FieldBase {
    constructor(props) {
        super(props);
        // ==============================
        // HELPERS
        // ==============================
        this.triggerFileBrowser = () => {
            this.refs.fileInput.clickDomNode();
        };
        this.openLightbox = (event, index) => {
            event.preventDefault();
            this.setState({
                lightboxIsVisible: true,
                lightboxImageIndex: index,
            });
        };
        this.closeLightbox = () => {
            this.setState({
                lightboxIsVisible: false,
                lightboxImageIndex: null,
            });
        };
        this.lightboxPrevious = () => {
            this.setState({
                lightboxImageIndex: this.state.lightboxImageIndex - 1,
            });
        };
        this.lightboxNext = () => {
            this.setState({
                lightboxImageIndex: this.state.lightboxImageIndex + 1,
            });
        };
        // ==============================
        // METHODS
        // ==============================
        this.removeImage = (index) => {
            const newThumbnails = [...this.state.thumbnails];
            const target = newThumbnails[index];
            // Use splice + clone to toggle the isDeleted prop
            newThumbnails.splice(index, 1, React.cloneElement(target, {
                isDeleted: !target.props.isDeleted,
            }));
            this.setState({ thumbnails: newThumbnails });
        };
        this.clearFiles = () => {
            this.refs.fileInput.clearValue();
            this.setState({
                thumbnails: this.state.thumbnails.filter(function (thumb) {
                    return !thumb.props.isQueued;
                }),
            });
        };
        this.uploadFile = (event) => {
            if (!window.FileReader) {
                return alert('File reader not supported by browser.');
            }
            // FileList not a real Array; process it into one and check the types
            const files = [];
            for (let i = 0; i < event.target.files.length; i++) {
                const f = event.target.files[i];
                if (!f.type.match(SUPPORTED_REGEX)) {
                    return alert('Unsupported file type. Supported formats are: GIF, PNG, JPG, BMP, ICO, PDF, TIFF, EPS, PSD, SVG');
                }
                files.push(f);
            }
            let index = this.state.thumbnails.length;
            async.mapSeries(files, (file, callback) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (e) => {
                    callback(null, this.getThumbnail({
                        isQueued: true,
                        imageSourceSmall: e.target.result,
                    }, index++));
                };
            }, (err, thumbnails) => {
                this.setState({
                    thumbnails: [...this.state.thumbnails, ...thumbnails],
                });
            });
        };
        this.state = this.buildInitialState(this.props);
    }
    static getDefaultValue() {
        return [];
    }
    componentWillUpdate(nextProps) {
        // Reset the thumbnails and upload ID when the item value changes
        // TODO: We should add a check for a new item ID in the store
        const value = _.map(this.props.value, 'public_id').join();
        const nextValue = _.map(nextProps.value, 'public_id').join();
        if (value !== nextValue) {
            this.setState(this.buildInitialState(nextProps));
        }
    }
    buildInitialState(props) {
        const uploadFieldPath = `CloudinaryImages-${props.path}-${++uploadInc}`;
        const thumbnails = props.value ? props.value.map((img, index) => {
            return this.getThumbnail({
                value: img,
                imageSourceSmall: cloudinaryResize(img.public_id, Object.assign({}, RESIZE_DEFAULTS, { height: 90, secure: props.secure })),
                imageSourceLarge: cloudinaryResize(img.public_id, Object.assign({}, RESIZE_DEFAULTS, { height: 600, width: 900, secure: props.secure })),
            }, index);
        }) : [];
        return { thumbnails, uploadFieldPath };
    }
    getThumbnail(props, index) {
        return (React.createElement(Thumbnail, Object.assign({ key: `thumbnail-${index}`, inputName: this.getInputName(this.props.path), openLightbox: (e) => this.openLightbox(e, index), shouldRenderActionButton: this.shouldRenderField(), toggleDelete: this.removeImage.bind(this, index) }, props)));
    }
    hasFiles() {
        return this.refs.fileInput && this.refs.fileInput.hasValue();
    }
    getCount(key) {
        let count = 0;
        this.state.thumbnails.forEach((thumb) => {
            if (thumb && thumb.props[key])
                count++;
        });
        return count;
    }
    // ==============================
    // RENDERERS
    // ==============================
    renderFileInput() {
        if (!this.shouldRenderField())
            return () => null;
        return (React.createElement(HiddenFileInput, { accept: SUPPORTED_TYPES.join(), key: this.state.uploadFieldPath, multiple: true, name: this.state.uploadFieldPath, onChange: this.uploadFile, ref: "fileInput" }));
    }
    renderValueInput() {
        if (!this.shouldRenderField())
            return () => null;
        // This renders an input with either the upload field reference, or an
        // empty value to reset the field if all images have been removed
        if (this.hasFiles()) {
            return (React.createElement("input", { name: this.getInputName(this.props.path), value: `upload:${this.state.uploadFieldPath}`, type: "hidden" }));
        }
        else if (this.getCount('isDeleted') === this.props.value.length) {
            return (React.createElement("input", { name: this.getInputName(this.props.path), value: "", type: "hidden" }));
        }
    }
    renderLightbox() {
        const { value, secure } = this.props;
        if (!value || !value.length)
            return () => null;
        const images = value.map(image => ({
            src: cloudinaryResize(image.public_id, Object.assign({}, RESIZE_DEFAULTS, { height: 600, width: 900, secure })),
        }));
        return (React.createElement(Lightbox, { images: images, currentImage: this.state.lightboxImageIndex, isOpen: this.state.lightboxIsVisible, onClickPrev: this.lightboxPrevious, onClickNext: this.lightboxNext, onClose: this.closeLightbox }));
    }
    renderToolbar() {
        if (!this.shouldRenderField())
            return null;
        const uploadCount = this.getCount('isQueued');
        const deleteCount = this.getCount('isDeleted');
        // provide a gutter for the change message
        // only required when no cancel button, which has equiv. padding
        const uploadButtonStyles = !this.hasFiles()
            ? { marginRight: 10 }
            : {};
        // prepare the change message
        const changeMessage = uploadCount || deleteCount ? (React.createElement(FileChangeMessage, null,
            uploadCount && deleteCount ? `${uploadCount} added and ${deleteCount} removed` : null,
            uploadCount && !deleteCount ? `${uploadCount} image added` : null,
            !uploadCount && deleteCount ? `${deleteCount} image removed` : null)) : null;
        // prepare the save message
        const saveMessage = uploadCount || deleteCount ? (React.createElement(FileChangeMessage, { color: !deleteCount ? 'success' : 'danger' },
            "Save to ",
            !deleteCount ? 'Upload' : 'Confirm')) : null;
        // clear floating images above
        const toolbarStyles = {
            clear: 'both',
        };
        return (React.createElement("div", { style: toolbarStyles },
            React.createElement(Button, { onClick: this.triggerFileBrowser, style: uploadButtonStyles, "data-e2e-upload-button": "true" }, "Upload Images"),
            this.hasFiles() && (React.createElement(Button, { variant: "link", color: "cancel", onClick: this.clearFiles }, "Clear selection")),
            changeMessage,
            saveMessage));
    }
    renderUI() {
        const { label, note, path } = this.props;
        const { thumbnails } = this.state;
        return (React.createElement(FormField, { label: label, className: "field-type-cloudinaryimages", htmlFor: path },
            React.createElement("div", null, thumbnails),
            this.renderValueInput(),
            this.renderFileInput(),
            this.renderToolbar(),
            !!note && React.createElement(FormNote, { note: note }),
            this.renderLightbox()));
    }
}
CloudinaryImagesField.displayName = 'CloudinaryImagesField';
CloudinaryImagesField.type = 'CloudinaryImages';