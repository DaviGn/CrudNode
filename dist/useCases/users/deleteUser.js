"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usersRepository_1 = __importDefault(require("../../repositories/usersRepository"));
class DeleteUserUseCase {
    _repository;
    constructor() {
        this._repository = usersRepository_1.default;
    }
    async execute(id) {
        const user = await this._repository.findOneBy({
            id,
        });
        if (!user)
            return;
        await this._repository.remove(user);
    }
}
exports.default = DeleteUserUseCase;
