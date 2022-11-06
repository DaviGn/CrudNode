"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthException {
    message;
    statusCode = 401;
    constructor(message) {
        this.message = message;
    }
}
exports.default = AuthException;
