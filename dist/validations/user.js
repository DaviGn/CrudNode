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
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateUser = exports.validateCreateUser = void 0;
const typeorm_1 = require("typeorm");
const regex_1 = require("../utils/regex");
function validate(user) {
    const errors = [];
    if (!user.name) {
        errors.push({
            field: 'name',
            message: 'Name is required!',
        });
    }
    if (!user.email) {
        errors.push({
            field: 'email',
            message: 'E-mail is required!',
        });
    }
    if (!regex_1.emailPattern.test(user.email)) {
        errors.push({
            field: 'email',
            message: 'E-mail is invalid!',
        });
    }
    return errors;
}
function validateCreateUser(user, usersRepository) {
    return __awaiter(this, void 0, void 0, function* () {
        const errors = validate(user);
        const countUsersByEmail = yield usersRepository.count({
            where: {
                email: user.email,
            },
        });
        if (countUsersByEmail) {
            errors.push({
                field: 'email',
                message: 'E-mail is already in use!',
            });
        }
        if (!user.password) {
            errors.push({
                field: 'password',
                message: 'Password is required!',
            });
        }
        return errors;
    });
}
exports.validateCreateUser = validateCreateUser;
function validateUpdateUser(user, usersRepository) {
    return __awaiter(this, void 0, void 0, function* () {
        const errors = validate(user);
        const countUsersByEmail = yield usersRepository.count({
            where: {
                id: (0, typeorm_1.Not)(user.id),
                email: user.email,
            },
        });
        if (countUsersByEmail) {
            errors.push({
                field: 'email',
                message: 'E-mail is already in use!',
            });
        }
        return errors;
    });
}
exports.validateUpdateUser = validateUpdateUser;
