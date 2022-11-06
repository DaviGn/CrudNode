"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authException_1 = __importDefault(require("../exceptions/authException"));
const fieldExceptions_1 = __importDefault(require("../exceptions/fieldExceptions"));
const constants_1 = require("../utils/constants");
async function errorsMiddleware(err, request, response, next) {
    if (err instanceof fieldExceptions_1.default)
        return response.send(err.errors).status(err.statusCode);
    if (err instanceof authException_1.default)
        return response.send({ message: err.message }).status(err.statusCode);
    console.log(err);
    return response.send({
        message: constants_1.genericExceptionMessage,
    });
}
exports.default = errorsMiddleware;
