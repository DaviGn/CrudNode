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
const authException_1 = __importDefault(require("../exceptions/authException"));
const fieldExceptions_1 = __importDefault(require("../exceptions/fieldExceptions"));
const constants_1 = require("../utils/constants");
function errorsMiddleware(err, request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (err instanceof fieldExceptions_1.default)
            return response.send(err.errors).status(err.statusCode);
        if (err instanceof authException_1.default)
            return response.send({ message: err.message }).status(err.statusCode);
        console.log(err);
        return response.send({
            message: constants_1.genericExceptionMessage,
        });
    });
}
exports.default = errorsMiddleware;
