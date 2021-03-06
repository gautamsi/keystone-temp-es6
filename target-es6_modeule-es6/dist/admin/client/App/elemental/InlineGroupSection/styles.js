"use strict";
// ==============================
// Inline Group: Section
// ==============================
Object.defineProperty(exports, "__esModule", { value: true });
// Takes only FormInput and Button as children, rendering them as a
// tidy inline array
const theme_1 = require("../../../theme");
exports.default = {
    // pull active elements up
    active: {
        position: 'relative',
    },
    // stretch to fill available width
    grow: {
        flex: '1 1 0',
    },
    // separate applicable non-contiguous elements
    separate: {
        paddingLeft: '0.75em',
    },
    // Contiguous: manipulate children directly
    // pull focused contiguous elements up
    contiguous: {
        ':focus': {
            position: 'relative',
            zIndex: 1,
        },
    },
    // position
    contiguous__middle: {
        borderRadius: 0,
        marginLeft: theme_1.default.button.borderWidth * -1,
    },
    contiguous__first: {
        borderBottomRightRadius: '0 !important',
        borderTopRightRadius: '0 !important',
    },
    contiguous__last: {
        borderBottomLeftRadius: '0 !important',
        borderTopLeftRadius: '0 !important',
        marginLeft: theme_1.default.button.borderWidth * -1,
    },
};
//# sourceMappingURL=styles.js.map