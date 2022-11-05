import IEmailSender from '../iemailsender';

export default class WelcomeEmailService {
    constructor(private emailService: IEmailSender) {}

    public execute() {
        // enviar o e-mail
    }
}
