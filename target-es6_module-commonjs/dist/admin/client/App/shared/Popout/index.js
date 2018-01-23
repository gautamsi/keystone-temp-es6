"use strict";
/**
 * A Popout component.
 * One can also add a Header (Popout/Header), a Footer
 * (Popout/Footer), a Body (Popout/Body) and a Pan (Popout/Pane).
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Portal_1 = require("../Portal");
const Transition_1 = require("react-transition-group/Transition");
const SIZES = {
    arrowHeight: 12,
    arrowWidth: 16,
    horizontalMargin: 20,
};
class Popout extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Popout';
        this.calculatePosition = (isOpen) => {
            if (!isOpen)
                return;
            let posNode = document.getElementById(this.props.relativeToID);
            const pos = {
                top: 0,
                left: 0,
                width: posNode.offsetWidth,
                height: posNode.offsetHeight,
            };
            while (posNode.offsetParent) {
                pos.top += posNode.offsetTop;
                pos.left += posNode.offsetLeft;
                posNode = posNode.offsetParent;
            }
            let leftOffset = Math.max(pos.left + (pos.width / 2) - (this.props.width / 2), SIZES.horizontalMargin);
            let topOffset = pos.top + pos.height + SIZES.arrowHeight;
            let spaceOnRight = window.innerWidth - (leftOffset + this.props.width + SIZES.horizontalMargin);
            if (spaceOnRight < 0) {
                leftOffset = leftOffset + spaceOnRight;
            }
            const arrowLeftOffset = leftOffset === SIZES.horizontalMargin
                ? pos.left + (pos.width / 2) - (SIZES.arrowWidth / 2) - SIZES.horizontalMargin
                : null;
            const newStateAvaliable = this.state.leftOffset !== leftOffset
                || this.state.topOffset !== topOffset
                || this.state.arrowLeftOffset !== arrowLeftOffset;
            if (newStateAvaliable) {
                this.setState({
                    leftOffset: leftOffset,
                    topOffset: topOffset,
                    arrowLeftOffset: arrowLeftOffset,
                });
            }
        };
        this.state = {};
        this.calculatePosition = this.calculatePosition.bind(this);
    }
    static get defaultProps() {
        return {
            width: 320,
        };
    }
    componentWillReceiveProps(nextProps) {
        if (!this.props.isOpen && nextProps.isOpen) {
            window.addEventListener('resize', this.calculatePosition);
            this.calculatePosition(nextProps.isOpen);
        }
        else if (this.props.isOpen && !nextProps.isOpen) {
            window.removeEventListener('resize', this.calculatePosition);
        }
    }
    getPortalDOMNode() {
        return this.refs.portal.getPortalDOMNode();
    }
    renderPopout() {
        if (!this.props.isOpen)
            return () => null;
        const { width } = this.props;
        const { arrowLeftOffset, leftOffset: left, topOffset: top } = this.state;
        const arrowStyles = arrowLeftOffset
            ? { left: 0, marginLeft: arrowLeftOffset }
            : null;
        return (React.createElement("div", { className: "Popout", style: { left, top, width } },
            React.createElement("span", { className: "Popout__arrow", style: arrowStyles }),
            React.createElement("div", { className: "Popout__inner" }, this.props.children)));
    }
    renderBlockout() {
        if (!this.props.isOpen)
            return;
        return React.createElement("div", { className: "blockout", onClick: this.props.onCancel });
    }
    render() {
        return (React.createElement(Portal_1.Portal, { className: "Popout-wrapper", ref: "portal" },
            React.createElement(Transition_1.default, { timeout: 200, classNames: "Popout" }, this.renderPopout()),
            this.renderBlockout()));
    }
}
exports.Popout = Popout;
// expose the child to the top level export
const PopoutHeader_1 = require("./PopoutHeader");
const PopoutBody_1 = require("./PopoutBody");
const PopoutFooter_1 = require("./PopoutFooter");
const PopoutPane_1 = require("./PopoutPane");
(function (Popout) {
    Popout.Body = PopoutBody_1.PopoutBody;
    Popout.Footer = PopoutFooter_1.PopoutFooter;
    Popout.Header = PopoutHeader_1.PopoutHeader;
    Popout.Pane = PopoutPane_1.PopoutPane;
})(Popout = exports.Popout || (exports.Popout = {}));
