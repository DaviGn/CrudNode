import 'dotenv/config';
import 'express-async-errors';
import 'reflect-metadata';
import express from 'express';
import helmet from 'helmet';
import { errors } from 'celebrate';
import cors from 'cors';
import logMiddleware from './middlewares/logs';
import routes from './routes';
import errorsMiddleware from './middlewares/errors';
import AppDataSource from './db/context';
import Role from './models/Role';

const port = process.env.PORT ?? 3333;

function runServer() {
    // Definir os middlewares
    const server = express();
    server.use(cors());
    server.use(helmet());

    // Arquivos estáticos
    server.use('/img', express.static(`${__dirname}/img`));

    // Configurando view engine
    server.set('view engine', 'ejs');
    server.set('views', `${__dirname}/views`);

    server.use(express.json());
    server.use(logMiddleware);
    server.use(routes);
    server.use(errors());
    server.use(errorsMiddleware);

    server.listen(port, () => {
        console.log('Server is running!');
    });
}

// SEED
AppDataSource.initialize()
    .then((context) => {
        const adminRole = new Role();
        adminRole.id = '5be3f402-0c14-4ece-90a1-121bebae2a00';
        adminRole.name = 'Administrator';
        context.manager.save(adminRole);

        runServer();
    })
    .catch((err) => {
        console.log(err);
        console.log('Server stopped!');
    });
