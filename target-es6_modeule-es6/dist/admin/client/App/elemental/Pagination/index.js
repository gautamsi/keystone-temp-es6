import { css } from 'glamor';
import * as React from 'react';
import Page from './page';
import { theme } from '../../../theme';
export class Pagination extends React.Component {
    renderCount() {
        let count = '';
        const { currentPage, pageSize, plural, singular, total } = this.props;
        if (!total) {
            count = 'No ' + (plural || 'records');
        }
        else if (total > pageSize) {
            let start = (pageSize * (currentPage - 1)) + 1;
            let end = Math.min(start + pageSize - 1, total);
            count = `Showing ${start} to ${end} of ${total}`;
        }
        else {
            count = 'Showing ' + total;
            if (total > 1 && plural) {
                count += ' ' + plural;
            }
            else if (total === 1 && singular) {
                count += ' ' + singular;
            }
        }
        return (React.createElement("div", { className: `${css(classes.count)}`, "data-e2e-pagination-count": true }, count));
    }
    renderPages() {
        const { currentPage, limit, onPageSelect, pageSize, total } = this.props;
        if (total <= pageSize)
            return null;
        let pages = [];
        let totalPages = Math.ceil(total / pageSize);
        let minPage = 1;
        let maxPage = totalPages;
        if (limit && (limit < totalPages)) {
            let rightLimit = Math.floor(limit / 2);
            let leftLimit = rightLimit + (limit % 2) - 1;
            minPage = currentPage - leftLimit;
            maxPage = currentPage + rightLimit;
            if (minPage < 1) {
                maxPage = limit;
                minPage = 1;
            }
            if (maxPage > totalPages) {
                minPage = totalPages - limit + 1;
                maxPage = totalPages;
            }
        }
        if (minPage > 1) {
            pages.push(React.createElement(Page, { key: "page_start", onClick: () => onPageSelect(1) }, "..."));
        }
        for (let page = minPage; page <= maxPage; page++) {
            let selected = (page === currentPage);
            /* eslint-disable no-loop-func */
            pages.push(React.createElement(Page, { key: 'page_' + page, selected: selected, onClick: () => onPageSelect(page) }, page));
            /* eslint-enable */
        }
        if (maxPage < totalPages) {
            pages.push(React.createElement(Page, { key: "page_end", onClick: () => onPageSelect(totalPages) }, "..."));
        }
        return (React.createElement("div", { className: `${css(classes.list)}` }, pages));
    }
    render() {
        const className = css(classes.container, this.props.className);
        return (React.createElement("div", { className: `${className}`, style: this.props.style },
            this.renderCount(),
            this.renderPages()));
    }
}
const classes = {
    container: {
        display: 'block',
        lineHeight: theme.component.lineHeight,
        marginBottom: '2em',
    },
    count: {
        display: 'inline-block',
        marginRight: '1em',
        verticalAlign: 'middle',
    },
    list: {
        display: 'inline-block',
        verticalAlign: 'middle',
    },
};
