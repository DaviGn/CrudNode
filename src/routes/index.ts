import { Router } from 'express';
import EmailSenderServiceDev from '../services/emailSenderService';
import EmailSenderServiceProd from '../services/emailSenderService';
import WelcomeEmailService from '../services/emailTemplates/welcomeEmail';
import IEmailSender from '../services/iemailsender';
import AuthRoutes from './auth.routes';
import UsersRoutes from './users.routes';
import RolesRoutes from './roles.routes';

// Todas as rotas da nossa aplicação
const routes = Router();

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

routes.get('/', (req, res) => {
    return res.json({
        status: 'RUNNING',
    });
});
routes.use('/auth', AuthRoutes);
routes.use('/roles', RolesRoutes);
routes.use('/users', UsersRoutes);

export default routes;
