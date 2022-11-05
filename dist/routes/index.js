"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("./auth.routes"));
const users_routes_1 = __importDefault(require("./users.routes"));
// Todas as rotas da nossa aplicação
const routes = (0, express_1.Router)();
const pessoas = [
    {
        nome: 'Paulo',
        idade: 12,
    },
    {
        nome: 'Jõao',
        idade: 15,
    },
    {
        nome: 'Marina',
        idade: 25,
    },
];
// routes.use('/', (request, response) => {
//     let emailSender: IEmailSender = null;
//     const environment = 'dev';
//     if (environment === 'dev') emailSender = new EmailSenderServiceDev();
//     else emailSender = new EmailSenderServiceProd();
//     const welcomeEmail = new WelcomeEmailService(emailSender);
//     welcomeEmail.execute();
//     return response.send('Ok');
//     // return response.render('home', {
//     //     pessoas,
//     // });
// });
routes.use('/auth', auth_routes_1.default);
routes.use('/users', users_routes_1.default);
exports.default = routes;
