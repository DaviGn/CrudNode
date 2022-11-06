"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const typeorm_1 = require("typeorm");
const Role_1 = __importDefault(require("../models/Role"));
const User_1 = __importDefault(require("../models/User"));
const db_config_1 = __importDefault(require("../configs/db.config"));
const DbContext = new typeorm_1.DataSource({
    type: 'postgres',
    host: db_config_1.default.host,
    port: db_config_1.default.port,
    username: db_config_1.default.username,
    password: db_config_1.default.password,
    database: db_config_1.default.database,
    synchronize: false,
    logging: false,
    entities: [User_1.default, Role_1.default],
    subscribers: [],
    migrations: ['../migrations/*.ts'],
    migrationsTableName: 'migrations',
});
exports.default = DbContext;
