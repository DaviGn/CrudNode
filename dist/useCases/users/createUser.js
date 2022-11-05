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
const bcrypt_1 = require("bcrypt");
const fieldExceptions_1 = __importDefault(require("../../exceptions/fieldExceptions"));
const User_1 = __importDefault(require("../../models/User"));
const usersRepository_1 = __importDefault(require("../../repositories/usersRepository"));
const user_1 = require("../../validations/user");
class CreateUserUseCase {
    constructor() {
        this._repository = usersRepository_1.default;
    }
    execute({ name, email, password, roleId, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = yield (0, user_1.validateCreateUser)({
                name,
                email,
                password,
                roleId,
            }, this._repository);
            if (errors.length > 0) {
                throw new fieldExceptions_1.default(errors);
            }
            const encryptedPassword = yield (0, bcrypt_1.hash)(password, 8);
            const user = new User_1.default();
            user.name = name;
            user.email = email;
            user.password = encryptedPassword;
            user.roleid = roleId;
            yield this._repository.save(user);
            return user;
        });
    }
}
exports.default = CreateUserUseCase;
