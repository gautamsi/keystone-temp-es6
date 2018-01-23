/**
 * The Home view is the view one sees at /keystone. It shows a list of all lists,
 * grouped by their section.
 */
import * as React from 'react';
import { Container, Spinner } from '../../elemental';
import { connect } from 'react-redux';
import { Lists } from './components/Lists';
import { Section } from './components/Section';
import { AlertMessages } from '../../shared/AlertMessages';
import { loadCounts, } from './actions';
export class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: true,
        };
    }
    // When everything is rendered, start loading the item counts of the lists
    // from the API
    componentDidMount() {
        this.props.dispatch(loadCounts());
    }
    getSpinner() {
        if (this.props.counts && Object.keys(this.props.counts).length === 0
            && (this.props.error || this.props.loading)) {
            return (React.createElement(Spinner, null));
        }
        return null;
    }
    render() {
        const spinner = this.getSpinner();
        return (React.createElement(Container, { "data-screen-id": "home" },
            React.createElement("div", { className: "dashboard-header" },
                React.createElement("div", { className: "dashboard-heading" }, Keystone.brand)),
            React.createElement("div", { className: "dashboard-groups" },
                (this.props.error) && (React.createElement(AlertMessages, { alerts: {
                        error: {
                            error: "There is a problem with the network, we're trying to reconnect...",
                        }
                    } })),
                Keystone.nav.flat ? (React.createElement(Lists, { counts: this.props.counts, lists: Keystone.lists, spinner: spinner })) : (React.createElement("div", null,
                    Keystone.nav.sections.map((navSection) => {
                        return (React.createElement(Section, { key: navSection.key, id: navSection.key, label: navSection.label },
                            React.createElement(Lists, { counts: this.props.counts, lists: navSection.lists, spinner: spinner })));
                    }),
                    Keystone.orphanedLists.length ? (React.createElement(Section, { label: "Other", icon: "octicon-database" },
                        React.createElement(Lists, { counts: this.props.counts, lists: Keystone.orphanedLists, spinner: spinner }))) : null)))));
    }
}
HomeView.displayName = 'HomeView';
export const Home = connect((state) => ({
    counts: state.home.counts,
    loading: state.home.loading,
    error: state.home.error,
}))(HomeView);
