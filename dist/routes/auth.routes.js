"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authUserUseCase_1 = __importDefault(require("../useCases/auth/authUserUseCase"));
const authRoutes = (0, express_1.Router)();
authRoutes.post('/', async (request, response) => {
    const useCase = new authUserUseCase_1.default();
    const authResponse = await useCase.execute(request.body);
    return response.send(authResponse);
});
exports.default = authRoutes;
