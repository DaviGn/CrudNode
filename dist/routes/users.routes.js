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
const express_1 = require("express");
const listUsers_1 = __importDefault(require("../useCases/users/listUsers"));
const getUser_1 = __importDefault(require("../useCases/users/getUser"));
const createUser_1 = __importDefault(require("../useCases/users/createUser"));
const updateUser_1 = __importDefault(require("../useCases/users/updateUser"));
const deleteUser_1 = __importDefault(require("../useCases/users/deleteUser"));
const auth_1 = require("../middlewares/auth");
/*
  GET: buscando dados;
  POST: criando dados;
  PUT: alterar dados;
  DELETE: excluir dados;
*/
/*
  Route params: quando queremos acessar algo específico, ou editar
  Query params: múltiplos parâmetros (ex: filtros)
  Request body: Não é GET, envia informações variadas
*/
// Todas as rotas de Users
const usersRoutes = (0, express_1.Router)();
usersRoutes.use(auth_1.isAuthenticated);
// Listagem
usersRoutes.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const useCase = new listUsers_1.default();
    let users = yield useCase.execute();
    users = users.map((x) => {
        delete x.password;
        return x;
    });
    return response.send(users);
}));
// Pesquisa
usersRoutes.get('/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const useCase = new getUser_1.default();
    const user = yield useCase.execute(id);
    if (!user) {
        return response.status(404).send();
    }
    return response.send(user);
}));
// Cadastro
usersRoutes.post('/', 
// celebrate(
//     {
//         [Segments.BODY]: Joi.object().keys({
//             name: Joi.string().required(),
//             email: Joi.string().required(),
//             password: Joi.string().required(),
//             roleid: Joi.string().uuid().required(),
//         }),
//     },
//     {
//         abortEarly: false,
//     }
// ),
(request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const useCase = new createUser_1.default();
    const user = yield useCase.execute(request.body);
    delete user.password;
    return response.status(201).send(user);
}));
// Edição
usersRoutes.put('/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const { name, email, roleId } = request.body;
    const useCase = new updateUser_1.default();
    const user = yield useCase.execute({
        id,
        name,
        email,
        roleId,
    });
    delete user.password;
    return response.send(user);
}));
// Remoção
usersRoutes.delete('/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const useCase = new deleteUser_1.default();
    yield useCase.execute(id);
    return response.send({});
}));
exports.default = usersRoutes;
