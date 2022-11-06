"use strict";
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
async function validateCreateUser(user, usersRepository) {
    const errors = validate(user);
    const countUsersByEmail = await usersRepository.count({
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
}
exports.validateCreateUser = validateCreateUser;
async function validateUpdateUser(user, usersRepository) {
    const errors = validate(user);
    const countUsersByEmail = await usersRepository.count({
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
}
exports.validateUpdateUser = validateUpdateUser;
