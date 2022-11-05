"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function isAuthenticated(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
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
            yield next();
        }
        catch (_a) {
            throw new authException_1.default(invalidTokenMessage);
        }
    });
}
exports.isAuthenticated = isAuthenticated;
