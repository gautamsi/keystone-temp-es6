"use strict";
/**
 * Used by the Popout component and the Lightbox component of the fields for
 * popouts. Renders a non-react DOM node.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
class Portal extends React.Component {
    constructor() {
        super(...arguments);
        this.displayName = 'Portal';
        this.portalElement = null;
    }
    componentDidMount() {
        const el = document.createElement('div');
        document.body.appendChild(el);
        this.portalElement = el;
        this.componentDidUpdate();
    }
    componentWillUnmount() {
        document.body.removeChild(this.portalElement);
    }
    componentDidUpdate() {
        ReactDOM.render(React.createElement("div", Object.assign({}, this.props)), this.portalElement);
    }
    getPortalDOMNode() {
        return this.portalElement;
    }
    render() {
        return null;
    }
}
exports.Portal = Portal;
