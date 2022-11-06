"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FieldException {
    errors;
    statusCode = 400;
    constructor(errors) {
        this.errors = errors;
    }
}
exports.default = FieldException;
