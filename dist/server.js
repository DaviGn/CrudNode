"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("express-async-errors");
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const celebrate_1 = require("celebrate");
const cors_1 = __importDefault(require("cors"));
const logs_1 = __importDefault(require("./middlewares/logs"));
const routes_1 = __importDefault(require("./routes"));
const errors_1 = __importDefault(require("./middlewares/errors"));
const context_1 = __importDefault(require("./db/context"));
const Role_1 = __importDefault(require("./models/Role"));
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3333;
function runServer() {
    // Definir os middlewares
    const server = (0, express_1.default)();
    server.use((0, cors_1.default)());
    server.use((0, helmet_1.default)());
    // Arquivos estáticos
    server.use('/img', express_1.default.static(`${__dirname}/img`));
    // Configurando view engine
    server.set('view engine', 'ejs');
    server.set('views', `${__dirname}/views`);
    server.use(express_1.default.json());
    server.use(logs_1.default);
    server.use(routes_1.default);
    server.use((0, celebrate_1.errors)());
    server.use(errors_1.default);
    server.listen(port, () => {
        console.log('Server is running!');
    });
}
// SEED
context_1.default.initialize()
    .then((context) => {
    const adminRole = new Role_1.default();
    adminRole.id = '5be3f402-0c14-4ece-90a1-121bebae2a00';
    adminRole.name = 'Administrator';
    context.manager.save(adminRole);
    runServer();
})
    .catch((err) => {
    console.log(err);
    console.log('Server stopped!');
});
