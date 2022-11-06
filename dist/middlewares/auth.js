"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_config_1 = require("../configs/auth.config");
const authException_1 = __importDefault(require("../exceptions/authException"));
const requiredTokenMessage = 'JWT in required!';
const invalidTokenMessage = 'Token is invalid!';
async function isAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new authException_1.default(requiredTokenMessage);
    }
    const [_, token] = authHeader.split(' ');
    if (!token) {
        throw new authException_1.default(invalidTokenMessage);
    }
    try {
        const decodedToken = (0, jsonwebtoken_1.verify)(token, auth_config_1.JwtSignKey);
        const { sub } = decodedToken;
        request.user = {
            id: sub,
        };
        await next();
    }
    catch {
        throw new authException_1.default(invalidTokenMessage);
    }
}
exports.isAuthenticated = isAuthenticated;
