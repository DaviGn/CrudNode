"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
const fieldExceptions_1 = __importDefault(require("../../exceptions/fieldExceptions"));
const User_1 = __importDefault(require("../../models/User"));
const usersRepository_1 = __importDefault(require("../../repositories/usersRepository"));
const user_1 = require("../../validations/user");
class CreateUserUseCase {
    _repository;
    constructor() {
        this._repository = usersRepository_1.default;
    }
    async execute({ name, email, password, roleId, }) {
        const errors = await (0, user_1.validateCreateUser)({
            name,
            email,
            password,
            roleId,
        }, this._repository);
        if (errors.length > 0) {
            throw new fieldExceptions_1.default(errors);
        }
        const encryptedPassword = await (0, bcrypt_1.hash)(password, 8);
        const user = new User_1.default();
        user.name = name;
        user.email = email;
        user.password = encryptedPassword;
        user.roleid = roleId;
        await this._repository.save(user);
        return user;
    }
}
exports.default = CreateUserUseCase;
