import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "wrrdeveloper@gmail.com",
    pass: "wrr230808",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
          from: "Equipe Feedget <oi@feedget.com>",
          to: "Wesley Reis <wesleyepolly16@gmail.com>",
          subject,
          html: body,
        });
    };
}