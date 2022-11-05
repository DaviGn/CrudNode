"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthException {
    constructor(message) {
        this.statusCode = 401;
        this.message = message;
    }
}
exports.default = AuthException;
