/**
 * The actual Sign In view, with the login form
 */
import * as classnames from 'classnames';
import * as React from 'react';
import * as xhr from 'xhr';
import { AlertView as Alert } from './components/Alert';
import { Brand } from './components/Brand';
import { UserInfo } from './components/UserInfo';
import { LoginForm } from './components/LoginForm';
export class SigninView extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = (e) => {
            // Set the new state when the input changes
            const newState = {};
            newState[e.target.name] = e.target.value;
            this.setState(newState);
        };
        this.handleSubmit = (e) => {
            e.preventDefault();
            // If either password or mail are missing, show an error
            if (!this.state.email || !this.state.password) {
                return this.displayError('Please enter an email address and password to sign in.');
            }
            xhr({
                url: `${Keystone.adminPath}/api/session/signin`,
                method: 'post',
                json: {
                    email: this.state.email,
                    password: this.state.password,
                },
                headers: Object.assign({}, Keystone.csrf.header),
            }, (err, resp, body) => {
                if (err || body && body.error) {
                    return body.error === 'invalid csrf'
                        ? this.displayError('Something went wrong; please refresh your browser and try again.')
                        : this.displayError('The email and password you entered are not valid.');
                }
                else {
                    // Redirect to where we came from or to the default admin path
                    if (Keystone.redirect) {
                        top.location.href = Keystone.redirect;
                    }
                    else {
                        top.location.href = this.props.from ? this.props.from : Keystone.adminPath;
                    }
                }
            });
        };
        this.state = {
            email: '',
            password: '',
            isAnimating: false,
            isInvalid: false,
            invalidMessage: '',
            signedOut: window.location.search === '?signedout',
        };
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this._isMounted = true;
        // Focus the email field when we're mounted
        if (this.refs.email) {
            this.refs.email.select();
        }
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    /**
     * Display an error message
     *
     * @param  {String} message The message you want to show
     */
    displayError(message) {
        this.setState({
            isAnimating: true,
            isInvalid: true,
            invalidMessage: message,
        });
        setTimeout(this.finishAnimation, 750);
    }
    // Finish the animation and select the email field
    finishAnimation() {
        // TODO isMounted was deprecated, find out if we need this guard
        if (!this._isMounted)
            return;
        if (this.refs.email) {
            this.refs.email.select();
        }
        this.setState({
            isAnimating: false,
        });
    }
    render() {
        const boxClassname = classnames('auth-box', {
            'auth-box--has-errors': this.state.isAnimating,
        });
        return (React.createElement("div", { className: "auth-wrapper" },
            React.createElement(Alert, { isInvalid: this.state.isInvalid, signedOut: this.state.signedOut, invalidMessage: this.state.invalidMessage }),
            React.createElement("div", { className: boxClassname },
                React.createElement("h1", { className: "u-hidden-visually" },
                    this.props.brand ? this.props.brand : 'Keystone',
                    " Sign In "),
                React.createElement("div", { className: "auth-box__inner" },
                    React.createElement(Brand, { logo: this.props.logo, brand: this.props.brand }),
                    this.props.user ? (React.createElement(UserInfo, { adminPath: this.props.from ? this.props.from : Keystone.adminPath, signoutPath: `${Keystone.adminPath}/signout`, userCanAccessKeystone: this.props.userCanAccessKeystone, userName: this.props.user.name })) : (React.createElement(LoginForm, { email: this.state.email, handleInputChange: this.handleInputChange, handleSubmit: this.handleSubmit, isAnimating: this.state.isAnimating, password: this.state.password })))),
            React.createElement("div", { className: "auth-footer" },
                React.createElement("span", null, "Powered by "),
                React.createElement("a", { href: "http://keystonejs.com", target: "_blank", title: "The Node.js CMS and web application platform (new window)" }, "KeystoneJS"))));
    }
}
