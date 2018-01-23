"use strict";
// ======================
// Concatenate Classnames
// ======================
//
// Support className as an array:
// force classname prop into an array (possibly of arrays) then flatten
Object.defineProperty(exports, "__esModule", { value: true });
/*
    // To use spread the new array into glamor's `css` function

    function Component ({ className, ...props }) {
        props.className = css(
            classes.component,
            ...concatClassnames(className)
        );

        return <Component {...props} />;
    };
*/
function concatClassnames(className) {
    return [className].reduce((a, b) => {
        return a.concat(b);
    }, []);
}
exports.concatClassnames = concatClassnames;
