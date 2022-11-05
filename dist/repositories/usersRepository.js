"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const context_1 = __importDefault(require("../db/context"));
// Criando repositório customizado
const UserRepository = context_1.default.getRepository(User_1.default).extend({});
exports.default = UserRepository;
