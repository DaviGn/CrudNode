"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const usersRepository_1 = __importDefault(require("../../repositories/usersRepository"));
class GetUserUseCase {
    _repository;
    constructor() {
        this._repository = usersRepository_1.default;
    }
    async execute(id) {
        const user = await this._repository.findOneBy({ id });
        return (0, class_transformer_1.classToClass)(user);
    }
}
exports.default = GetUserUseCase;
