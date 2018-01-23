/*
TODO: CloudinaryImageType actally supports 'remove' and 'reset' actions, but
this field will only submit `""` when 'remove' is clicked. @jossmac we need to
work out whether we're going to support deleting through the UI.
*/
import * as React from 'react';
import { FieldBase } from '../FieldBase';
import { cloudinaryResize } from '../../../admin/client/utils/cloudinaryResize';
import { Button, FormField, FormInput, FormNote } from '../../../admin/client/App/elemental';
import { ImageThumbnail } from '../../components/ImageThumbnail';
import { FileChangeMessage } from '../../components/FileChangeMessage';
import { HiddenFileInput } from '../../components/HiddenFileInput';
import * as Lightbox from 'react-images';
const SUPPORTED_TYPES = ['image/*', 'application/pdf', 'application/postscript'];
const SUPPORTED_REGEX = new RegExp(/^image\/|application\/pdf|application\/postscript/g);
let uploadInc = 1000;
const buildInitialState = (props) => ({
    removeExisting: false,
    uploadFieldPath: `CloudinaryImage-${props.path}-${++uploadInc}`,
    userSelectedFile: null,
});
export class CloudinaryImageField extends FieldBase {
    constructor(props) {
        super(props);
        // ==============================
        // HELPERS
        // ==============================
        this.hasLocal = () => {
            return !!this.state.userSelectedFile;
        };
        this.hasExisting = () => {
            return !!(this.props.value && this.props.value.url);
        };
        this.hasImage = () => {
            return this.hasExisting() || this.hasLocal();
        };
        this.getFilename = () => {
            const { format, height, public_id, width } = this.props.value;
            return this.state.userSelectedFile
                ? this.state.userSelectedFile.name
                : `${public_id}.${format} (${width}×${height})`;
        };
        this.getImageSource = (height = 90) => {
            // TODO: This lets really wide images break the layout
            let src;
            if (this.hasLocal()) {
                src = this.state.dataUri;
            }
            else if (this.hasExisting()) {
                src = cloudinaryResize(this.props.value.public_id, {
                    crop: 'fit',
                    height: height,
                    format: 'jpg',
                    secure: this.props.secure,
                });
            }
            return src;
        };
        // ==============================
        // METHODS
        // ==============================
        this.triggerFileBrowser = () => {
            this.refs.fileInput.clickDomNode();
        };
        this.handleFileChange = (event) => {
            const userSelectedFile = event.target.files[0];
            this.setState({ userSelectedFile });
        };
        // Toggle the lightbox
        this.openLightbox = (event) => {
            event.preventDefault();
            this.setState({
                lightboxIsVisible: true,
            });
        };
        this.closeLightbox = () => {
            this.setState({
                lightboxIsVisible: false,
            });
        };
        // Handle image selection in file browser
        this.handleImageChange = (e) => {
            if (!window.FileReader) {
                return alert('File reader not supported by browser.');
            }
            let reader = new FileReader();
            let file = e.target.files[0];
            if (!file)
                return;
            if (!file.type.match(SUPPORTED_REGEX)) {
                return alert('Unsupported file type. Supported formats are: GIF, PNG, JPG, BMP, ICO, PDF, TIFF, EPS, PSD, SVG');
            }
            reader.readAsDataURL(file);
            reader.onloadstart = () => {
                this.setState({
                    loading: true,
                });
            };
            reader.onloadend = (upload) => {
                this.setState({
                    dataUri: upload.target.result,
                    loading: false,
                    userSelectedFile: file,
                });
                this.props.onChange({ file: file });
            };
        };
        // If we have a local file added then remove it and reset the file field.
        this.handleRemove = (e) => {
            let state = {};
            if (this.state.userSelectedFile) {
                state.userSelectedFile = null;
            }
            else if (this.hasExisting()) {
                state.removeExisting = true;
            }
            this.setState(state);
        };
        this.undoRemove = () => {
            this.setState(buildInitialState(this.props));
        };
        this.state = buildInitialState(this.props);
    }
    static getDefaultValue() { return {}; }
    componentWillReceiveProps(nextProps) {
        // console.log('CloudinaryImageField nextProps:', nextProps);
    }
    componentWillUpdate(nextProps) {
        // Reset the action state when the value changes
        // TODO: We should add a check for a new item ID in the store
        if (this.props.value.public_id !== nextProps.value.public_id) {
            this.setState({
                removeExisting: false,
                userSelectedFile: null,
            });
        }
    }
    // ==============================
    // RENDERERS
    // ==============================
    renderLightbox() {
        const { value } = this.props;
        if (!value || !value.public_id)
            return;
        return (React.createElement(Lightbox, { currentImage: 0, images: [{ src: this.getImageSource(600) }], isOpen: this.state.lightboxIsVisible, onClose: this.closeLightbox, showImageCount: false }));
    }
    renderImagePreview() {
        const { value } = this.props;
        // render icon feedback for intent
        let mask;
        if (this.hasLocal())
            mask = 'upload';
        else if (this.state.removeExisting)
            mask = 'remove';
        else if (this.state.loading)
            mask = 'loading';
        const shouldOpenLightbox = value.format !== 'pdf';
        return (React.createElement(ImageThumbnail, { component: "a", href: this.getImageSource(600), onClick: shouldOpenLightbox ? this.openLightbox : undefined, mask: mask, target: "__blank", style: { float: 'left', marginRight: '1em' } },
            React.createElement("img", { src: this.getImageSource(), style: { height: 90 } })));
    }
    renderFileNameAndOptionalMessage(showChangeMessage = false) {
        return (React.createElement("div", null,
            this.hasImage() ? (React.createElement(FileChangeMessage, null, this.getFilename())) : null,
            showChangeMessage && this.renderChangeMessage()));
    }
    renderChangeMessage() {
        if (this.state.userSelectedFile) {
            return (React.createElement(FileChangeMessage, { color: "success" }, "Save to Upload"));
        }
        else if (this.state.removeExisting) {
            return (React.createElement(FileChangeMessage, { color: "danger" }, "Save to Remove"));
        }
        else {
            return null;
        }
    }
    // Output [cancel/remove/undo] button
    renderClearButton() {
        const clearText = this.hasLocal() ? 'Cancel' : 'Remove Image';
        return this.state.removeExisting ? (React.createElement(Button, { variant: "link", onClick: this.undoRemove }, "Undo Remove")) : (React.createElement(Button, { variant: "link", color: "cancel", onClick: this.handleRemove }, clearText));
    }
    renderImageToolbar() {
        return (React.createElement("div", { key: this.props.path + '_toolbar', className: "image-toolbar" },
            React.createElement(Button, { onClick: this.triggerFileBrowser },
                this.hasImage() ? 'Change' : 'Upload',
                " Image"),
            this.hasImage() ? this.renderClearButton() : null));
    }
    renderFileInput() {
        if (!this.shouldRenderField())
            return null;
        return (React.createElement(HiddenFileInput, { accept: SUPPORTED_TYPES.join(), ref: "fileInput", name: this.state.uploadFieldPath, onChange: this.handleImageChange }));
    }
    renderActionInput() {
        if (!this.shouldRenderField())
            return null;
        if (this.state.userSelectedFile || this.state.removeExisting) {
            const value = this.state.userSelectedFile
                ? `upload:${this.state.uploadFieldPath}`
                : '';
            return (React.createElement("input", { name: this.getInputName(this.props.path), type: "hidden", value: value }));
        }
        else {
            return null;
        }
    }
    renderUI() {
        const { label, note, path } = this.props;
        const imageContainer = (React.createElement("div", { style: this.hasImage() ? { marginBottom: '1em' } : null },
            this.hasImage() && this.renderImagePreview(),
            this.hasImage() && this.renderFileNameAndOptionalMessage(this.shouldRenderField())));
        const toolbar = this.shouldRenderField()
            ? this.renderImageToolbar()
            : React.createElement(FormInput, { noedit: true });
        return (React.createElement(FormField, { label: label, className: "field-type-cloudinaryimage", htmlFor: path },
            imageContainer,
            toolbar,
            !!note && React.createElement(FormNote, { note: note }),
            this.renderLightbox(),
            this.renderFileInput(),
            this.renderActionInput()));
    }
}
CloudinaryImageField.displayName = 'CloudinaryImageField';
CloudinaryImageField.type = 'CloudinaryImage';
