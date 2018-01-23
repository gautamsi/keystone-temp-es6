import { ArrayFieldBase } from '../ArrayFieldBase';
export class NumberArrayField extends ArrayFieldBase {
    constructor() {
        super(...arguments);
        this.cleanInput = (input) => {
            return input.replace(/[^\d]/g, '');
        };
    }
}
NumberArrayField.displayName = 'NumberArrayField';
NumberArrayField.type = 'NumberArray';
