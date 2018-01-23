"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Transition_1 = require("react-transition-group/Transition");
const react_dom_1 = require("react-dom");
const PropTypes = require("prop-types");
const PassContext_1 = require("../PassContext");
class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.portalElement = null;
    }
    componentDidMount() {
        const p = document.createElement('div');
        document.body.appendChild(p);
        this.portalElement = p;
        this.componentDidUpdate();
    }
    componentDidUpdate() {
        // Animate fade on mount/unmount
        const duration = 200;
        const styles = `
				.fade-enter { opacity: 0.01; }
				.fade-enter.fade-enter-active { opacity: 1; transition: opacity ${duration}ms; }
				.fade-leave { opacity: 1; }
				.fade-leave.fade-leave-active { opacity: 0.01; transition: opacity ${duration}ms; }
		`;
        react_dom_1.render(React.createElement(PassContext_1.PassContext, { context: this.context },
            React.createElement("div", null,
                React.createElement("style", null, styles),
                React.createElement(Transition_1.default, Object.assign({ component: "div", classNames: "fade", timeout: duration }, this.props)))), this.portalElement);
    }
    componentWillUnmount() {
        document.body.removeChild(this.portalElement);
    }
    render() {
        return null;
    }
}
Portal.contextTypes = {
    onClose: PropTypes.func,
};
exports.Portal = Portal;
