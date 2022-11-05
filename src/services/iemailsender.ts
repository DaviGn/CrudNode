import IEmailMessage from './iemailmessage';

export default interface IEmailSender {
    send(message: IEmailMessage): void;
}
