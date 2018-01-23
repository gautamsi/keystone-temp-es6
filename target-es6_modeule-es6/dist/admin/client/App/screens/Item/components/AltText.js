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
import * as vkey from 'vkey';
export class AltText extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.state = {
            modified: false,
        };
    }
    componentDidMount() {
        document.body.addEventListener('keydown', this.handleKeyDown, false);
        document.body.addEventListener('keyup', this.handleKeyUp, false);
    }
    componentWillUnmount() {
        document.body.removeEventListener('keydown', this.handleKeyDown);
        document.body.removeEventListener('keyup', this.handleKeyUp);
    }
    handleKeyDown(e) {
        if (vkey[e.keyCode] !== this.props.modifier)
            return;
        this.setState({
            modified: true,
        });
    }
    handleKeyUp(e) {
        if (vkey[e.keyCode] !== this.props.modifier)
            return;
        this.setState({
            modified: false,
        });
    }
    render() {
        // NOTE `modifier` is declared to remove it from `props`, though never used
        const _a = this.props, { component: Component, modified, modifier, // eslint-disable-line no-unused-vars
        normal } = _a, props = __rest(_a, ["component", "modified", "modifier", "normal"]);
        props.children = this.state.modified
            ? modified
            : normal;
        return React.createElement(Component, Object.assign({}, props));
    }
    static get defaultProps() {
        return {
            component: 'span',
            modifier: '<alt>',
        };
    }
}
