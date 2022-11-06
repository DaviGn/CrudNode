"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const bcrypt_1 = require("bcrypt");
const auth_config_1 = require("../../configs/auth.config");
const usersRepository_1 = __importDefault(require("../../repositories/usersRepository"));
const errorMessage = 'Usuário e/ou senha inválido(s)';
class AuthUserUseCase {
    _repository;
    constructor() {
        this._repository = usersRepository_1.default;
    }
    async execute({ email, password }) {
        // Buscar o usuário
        const user = await this._repository.findOne({
            where: {
                email,
            },
            relations: {
                role: true,
            },
        });
        if (!user) {
            throw new Error(errorMessage);
        }
        // Validar a senha
        const isValid = await (0, bcrypt_1.compare)(password, user.password);
        if (!isValid) {
            throw new Error(errorMessage);
        }
        // Gerar o JWT
        const jwt = (0, jsonwebtoken_1.sign)({ role: user.role }, auth_config_1.JwtSignKey, {
            expiresIn: 60 * 60,
            subject: user.id,
        });
        delete user.password;
        return { user, jwt };
    }
}
exports.default = AuthUserUseCase;
