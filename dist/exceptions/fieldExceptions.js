"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FieldException {
    constructor(errors) {
        this.statusCode = 400;
        this.errors = errors;
    }
}
exports.default = FieldException;
