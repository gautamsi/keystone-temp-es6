import * as React from 'react';
import * as blacklist from 'blacklist';
export class FooterBar extends React.Component {
    constructor(props) {
        super(props);
        this.recalcPosition = () => {
            let wrapper = this.refs.wrapper;
            this.footerSize.x = wrapper.offsetWidth;
            let offsetTop = 0;
            let offsetEl = wrapper;
            while (offsetEl) {
                offsetTop += offsetEl.offsetTop;
                offsetEl = offsetEl.offsetParent;
            }
            let maxY = offsetTop + this.footerSize.y;
            let viewY = window.scrollY + window.innerHeight;
            let newSize = this.getWindowSize();
            let sizeChanged = (newSize.x !== this.windowSize.x || newSize.y !== this.windowSize.y);
            this.windowSize = newSize;
            let newState = {
                width: this.footerSize.x,
                height: this.footerSize.y,
                top: undefined,
                position: undefined,
            };
            if (viewY > maxY && (sizeChanged || this.mode !== 'inline')) {
                this.mode = 'inline';
                newState.top = 0;
                newState.position = 'absolute';
                this.setState(newState);
            }
            else if (viewY <= maxY && (sizeChanged || this.mode !== 'fixed')) {
                this.mode = 'fixed';
                newState.top = window.innerHeight - this.footerSize.y;
                newState.position = 'fixed';
                this.setState(newState);
            }
        };
        this.recalcPosition.bind = this.recalcPosition.bind(this);
        this.state = {
            position: 'relative',
            width: 'auto',
            height: 'auto',
            top: 0,
        };
    }
    static get defaultProps() {
        return {
            style: {},
        };
    }
    componentDidMount() {
        // Bail in IE8 because React doesn't support the onScroll event in that browser
        // Conveniently (!) IE8 doesn't have window.getComputedStyle which we also use here
        if (!window.getComputedStyle)
            return;
        let footer = this.refs.footer;
        this.windowSize = this.getWindowSize();
        let footerStyle = window.getComputedStyle(footer);
        this.footerSize = {
            x: footer.offsetWidth,
            y: footer.offsetHeight + parseInt(footerStyle.marginTop || '0'),
        };
        window.addEventListener('scroll', this.recalcPosition, false);
        window.addEventListener('resize', this.recalcPosition, false);
        this.recalcPosition();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.recalcPosition, false);
        window.removeEventListener('resize', this.recalcPosition, false);
    }
    getWindowSize() {
        return {
            x: window.innerWidth,
            y: window.innerHeight,
        };
    }
    render() {
        let wrapperStyle = {
            height: this.state.height,
            marginTop: 60,
            position: 'relative',
        };
        let footerProps = blacklist(this.props, 'children', 'style');
        let footerStyle = Object.assign({}, this.props.style, {
            position: this.state.position,
            top: this.state.top,
            width: this.state.width,
            height: this.state.height,
        });
        return (React.createElement("div", { ref: "wrapper", style: wrapperStyle },
            React.createElement("div", Object.assign({ ref: "footer", style: footerStyle }, footerProps), this.props.children)));
    }
}
