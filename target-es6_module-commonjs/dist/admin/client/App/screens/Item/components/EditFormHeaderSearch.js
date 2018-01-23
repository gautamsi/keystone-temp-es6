"use strict";
/* eslint quote-props: ["error", "as-needed"] */
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
const react_dom_1 = require("react-dom");
const glamor_1 = require("glamor");
const elemental_1 = require("../../../elemental");
const theme_1 = require("../../../../theme");
class EditFormHeaderSearch extends React.Component {
    constructor(props) {
        super(props);
        this.focusField = () => {
            this.setState({ focused: true }, () => {
                react_dom_1.findDOMNode(this.refs.target).focus();
            });
        };
        this.focusField = this.focusField.bind(this);
        this.state = { focused: false };
    }
    render() {
        const { focused } = this.state;
        const _a = this.props, { onChange, onKeyUp, value } = _a, props = __rest(_a, ["onChange", "onKeyUp", "value"]);
        return focused ? (React.createElement("div", { className: `${glamor_1.css(classes.wrapper)}` },
            React.createElement(elemental_1.Glyph, { style: classes.glyph, color: theme_1.theme.color.gray40, name: "search", "data-e2e-search-icon": true }),
            React.createElement(elemental_1.FormInput, Object.assign({ style: classes.input, name: "search", onBlur: () => this.setState({ focused: false }), onChange: onChange, onKeyUp: onKeyUp, placeholder: "Search", ref: "target", type: "search", value: value }, props)))) : (React.createElement(elemental_1.GlyphButton, { color: "primary", glyph: "search", glyphStyle: { marginRight: '0.4em' }, onClick: this.focusField, onFocus: this.focusField, position: "left", variant: "link", style: { paddingLeft: '0.7em' }, "data-e2e-search-icon": true }, "Search"));
    }
}
exports.EditFormHeaderSearch = EditFormHeaderSearch;
const classes = {
    wrapper: {
        display: 'inline-block',
        position: 'relative',
        verticalAlign: 'middle',
    },
    // input
    input: {
        paddingLeft: '2.2em',
        // opacity: 0,
        transition: 'all 240ms',
        width: 100,
        ':focus': {
            // opacity: 1,
            width: 240,
        },
    },
    // glyph
    glyph: {
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        position: 'absolute',
        width: '2.2em',
    },
};
// Search
// ------------------------------
// .EditForm__header__search {
// 	display: inline-block;
// 	margin-left: 1em;
// }
// .EditForm__header__search-field {
// 	margin-bottom: 0;
//
// 	.IconField__icon {
// 		color: @app-primary;
// 	}
// }
//
// // make the input appear as a button link until focused
// .EditForm__header__search-input {
// 	// override elemental's transition to catch the width or it looks weird
// 	.transition( all 0.15s ease-in-out );
// 	.placeholder(@link-color);
// 	background: transparent;
// 	border-color: transparent;
// 	box-shadow: none;
// 	display: inline-block;
//
// 	// set the width to only be as long as if it were a button initially
// 	// this is updated on focus to a more comfortable typing length
// 	width: 100px;
//
// 	// decorate the input as a link
// 	&:hover {
// 		.placeholder(@link-hover-color);
// 		border-color: transparent;
// 		cursor: pointer;
//
// 		// handle placeholder text
// 		&::-moz-placeholder { text-decoration: underline; }
// 		&:-ms-input-placeholder { text-decoration: underline; }
// 		&::-webkit-input-placeholder  { text-decoration: underline; }
//
// 		+ .IconField__icon {
// 			color: @link-hover-color;
// 		}
// 	}
//
// 	// return the input to it's natural appearance on focus
// 	&:focus {
// 		.placeholder(@input-placeholder-color);
// 		background: white;
// 		border-color: @input-border-color-focus;
// 		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px fade(@input-border-color-focus, 10%);
// 		cursor: auto;
// 		outline: 0;
// 		width: 240px;
//
// 		// handle placeholder text
// 		&::-moz-placeholder { text-decoration: none; }
// 		&:-ms-input-placeholder { text-decoration: none; }
// 		&::-webkit-input-placeholder  { text-decoration: none; }
//
// 		+ .IconField__icon {
// 			color: @input-placeholder-color;
// 		}
// 	}
// }
// // hide the search field on small devices
// @media (max-width: 480px) {
// 	.EditForm__header__search {
// 		display: none;
// 	}
// }
