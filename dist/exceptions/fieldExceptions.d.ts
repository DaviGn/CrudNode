import FieldError from '../dtos/fieldError';
export default class FieldException {
    errors: FieldError[];
    readonly statusCode = 400;
    constructor(errors: FieldError[]);
}
//# sourceMappingURL=fieldExceptions.d.ts.map