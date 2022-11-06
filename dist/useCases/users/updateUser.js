"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fieldExceptions_1 = __importDefault(require("../../exceptions/fieldExceptions"));
const usersRepository_1 = __importDefault(require("../../repositories/usersRepository"));
const user_1 = require("../../validations/user");
class UpdateUserUseCase {
    _repository;
    constructor() {
        this._repository = usersRepository_1.default;
    }
    async execute({ id, name, email, roleId, }) {
        const errors = await (0, user_1.validateUpdateUser)({
            id,
            name,
            email,
            roleId,
        }, this._repository);
        if (errors.length > 0) {
            throw new fieldExceptions_1.default(errors);
        }
        const user = await this._repository.findOneBy({
            id,
        });
        if (!user) {
            return null;
        }
        user.name = name;
        user.email = email;
        user.roleid = roleId;
        await this._repository.save(user);
        return user;
    }
}
exports.default = UpdateUserUseCase;
