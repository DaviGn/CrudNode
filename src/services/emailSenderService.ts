import nodemailer from 'nodemailer';
import IEmailMessage from './iemailmessage';
import IEmailSender from './iemailsender';

export default class EmailSenderServiceDev implements IEmailSender {
    // eslint-disable-next-line class-methods-use-this
    public send(message: IEmailMessage): void {
        nodemailer.createTestAccount((err, account) => {
            const transporter = nodemailer.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass,
                },
            });

            // const message = {
            //     from: 'Sender Name <sender@example.com>',
            //     to: 'Recipient <recipient@example.com>',
            //     subject: 'Nodemailer is unicode friendly ✔',
            //     text: 'Hello to myself!',
            //     html: '<p><b>Hello</b> to myself!</p>',
            // };

            transporter.sendMail(message, (err, info) => {
                if (err) {
                    console.log(`Error occurred. ${err.message}`);
                    return process.exit(1);
                }

                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log(
                    'Preview URL: %s',
                    nodemailer.getTestMessageUrl(info)
                );
            });
        });
    }
}
