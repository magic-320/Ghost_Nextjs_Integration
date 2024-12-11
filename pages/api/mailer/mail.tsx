import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const toUser = req.body.toUser;
    const subject = req.body.subject;
    const html = req.body.html;
    
    // async function main () {

    //     const transporter = nodemailer.createTransport({
    //       host: 'smtp.gmail.com',
    //       port: 587,
    //       secure: false, // true for 465, false for other ports
    //       auth: {
    //         user: "",
    //         pass:  ""
    //       }
    //     });
      
    //     // send mail with defined transport object
    //     const info = await transporter.sendMail({
    //         from: 'Edosa Odaro <noreply.edosa.odaro@ghost.io>',
    //         replyTo: 'noreply.edosa.odaro@ghost.io',
    //         to: toUser, // list of receivers
    //         subject: subject, // Subject line
    //         html: html // html body
    //     });
      
    //     console.log('Message sent: %s', info.messageId);
    //   }
      
    //   main().catch(console.error);
}
