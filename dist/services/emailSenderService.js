"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
class EmailSenderServiceDev {
    // eslint-disable-next-line class-methods-use-this
    send(message) {
        nodemailer_1.default.createTestAccount((err, account) => {
            const transporter = nodemailer_1.default.createTransport({
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
                console.log('Preview URL: %s', nodemailer_1.default.getTestMessageUrl(info));
            });
        });
    }
}
exports.default = EmailSenderServiceDev;
