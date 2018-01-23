"use strict";
/**
 * The Home view is the view one sees at /keystone. It shows a list of all lists,
 * grouped by their section.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const elemental_1 = require("../../elemental");
const react_redux_1 = require("react-redux");
const Lists_1 = require("./components/Lists");
const Section_1 = require("./components/Section");
const AlertMessages_1 = require("../../shared/AlertMessages");
const actions_1 = require("./actions");
class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: true,
        };
    }
    // When everything is rendered, start loading the item counts of the lists
    // from the API
    componentDidMount() {
        this.props.dispatch(actions_1.loadCounts());
    }
    getSpinner() {
        if (this.props.counts && Object.keys(this.props.counts).length === 0
            && (this.props.error || this.props.loading)) {
            return (React.createElement(elemental_1.Spinner, null));
        }
        return null;
    }
    render() {
        const spinner = this.getSpinner();
        return (React.createElement(elemental_1.Container, { "data-screen-id": "home" },
            React.createElement("div", { className: "dashboard-header" },
                React.createElement("div", { className: "dashboard-heading" }, Keystone.brand)),
            React.createElement("div", { className: "dashboard-groups" },
                (this.props.error) && (React.createElement(AlertMessages_1.AlertMessages, { alerts: {
                        error: {
                            error: "There is a problem with the network, we're trying to reconnect...",
                        }
                    } })),
                Keystone.nav.flat ? (React.createElement(Lists_1.Lists, { counts: this.props.counts, lists: Keystone.lists, spinner: spinner })) : (React.createElement("div", null,
                    Keystone.nav.sections.map((navSection) => {
                        return (React.createElement(Section_1.Section, { key: navSection.key, id: navSection.key, label: navSection.label },
                            React.createElement(Lists_1.Lists, { counts: this.props.counts, lists: navSection.lists, spinner: spinner })));
                    }),
                    Keystone.orphanedLists.length ? (React.createElement(Section_1.Section, { label: "Other", icon: "octicon-database" },
                        React.createElement(Lists_1.Lists, { counts: this.props.counts, lists: Keystone.orphanedLists, spinner: spinner }))) : null)))));
    }
}
HomeView.displayName = 'HomeView';
exports.HomeView = HomeView;
exports.Home = react_redux_1.connect((state) => ({
    counts: state.home.counts,
    loading: state.home.loading,
    error: state.home.error,
}))(HomeView);
