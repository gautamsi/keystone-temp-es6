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
const theme_1 = require("../../../theme");
// Using window.innerWidth and state instead of CSS media breakpoints
// because we want to render null rather than an empty span. Allowing for
// CSS pseudo classes like :only-child to behave as expected.
// Return true if window + document
const canUseDOM = !!(typeof window !== 'undefined'
    && window.document
    && window.document.createElement);
class ResponsiveText extends React.Component {
    constructor(props) {
        super(props);
        this.handleResize = () => {
            this.setState({
                windowWidth: canUseDOM ? window.innerWidth : 0,
            });
        };
        this.handleResize = this.handleResize.bind(this);
        this.state = {
            windowWidth: canUseDOM ? window.innerWidth : 0,
        };
    }
    static get defaultProps() {
        return {
            component: 'span',
        };
    }
    componentDidMount() {
        if (canUseDOM) {
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        }
    }
    componentWillUnmount() {
        if (canUseDOM) {
            window.removeEventListener('resize', this.handleResize);
        }
    }
    render() {
        const _a = this.props, { 
        // @ts-ignore
        component: Component, hiddenLG, hiddenMD, hiddenSM, hiddenXS, visibleLG, visibleMD, visibleSM, visibleXS } = _a, props = __rest(_a, ["component", "hiddenLG", "hiddenMD", "hiddenSM", "hiddenXS", "visibleLG", "visibleMD", "visibleSM", "visibleXS"]);
        const { windowWidth } = this.state;
        let text;
        // set text value from breakpoint; attempt XS --> LG
        if (windowWidth < theme_1.theme.breakpointNumeric.mobile) {
            text = visibleXS || hiddenSM || hiddenMD || hiddenLG;
        }
        else if (windowWidth < theme_1.theme.breakpointNumeric.tabletPortrait) {
            text = hiddenXS || visibleSM || hiddenMD || hiddenLG;
        }
        else if (windowWidth < theme_1.theme.breakpointNumeric.tabletLandscape) {
            text = hiddenXS || hiddenSM || visibleMD || hiddenLG;
        }
        else {
            text = hiddenXS || hiddenSM || hiddenMD || visibleLG;
        }
        return text ? React.createElement(Component, Object.assign({}, props), text) : null;
    }
}
exports.ResponsiveText = ResponsiveText;
