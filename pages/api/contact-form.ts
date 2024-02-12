// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import Mailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import ownerTemplate from './owner-template-contact';
// import registrantTemplate from './book-download-user';

type Data = {
  success: boolean;
  url?: string;
  error: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.status(500);
  }

  res.status(200);
  res.end();

  console.log(req.body);

  try {
    console.log('IN RES');

    let transporter = Mailer.createTransport(
      smtpTransport({
        host: 'email-smtp.us-east-1.amazonaws.com',
        port: 465,
        secure: true,
        requireTLS: true,
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      })
    );

    // console.log(transporter);

    transporter.sendMail({
      to: [
        'Shawn.Bellefeuille@dfsin.ca',
        'Gabriella.Vasconcelos@dfsin.ca',
        'jeremy.bellefeuille@gmail.com',
        'jivanyesh@gmail.com',
      ],
      from: 'Shawn Bellefeuille <shawn.bellefeuille@retirementby.design>',
      subject: 'New contact form submission from ' + req.body.fullName,
      html: ownerTemplate({
        fullName: req.body.fullName,
        emailAddress: req.body.emailAddress,
        phone: req.body.phone,
        message: req.body.message,
      }),
    });

    res.status(200);

    res.end();

    // transporter.sendMail({
    //   to: req.body.emailAddress,
    //   from: 'Shawn Bellefeuille <shawn.bellefeuille@retirementby.design>',
    //   subject: 'Your Free Digital Copy of The Pursuit of Retirement',
    //   html: registrantTemplate({
    //     firstName: req.body.firstName,
    //   }),
    // });
  } catch (error) {
    console.log(error);
    //@ts-ignore
    console.log(error.message);
    console.log('IN ERROR');
  }
}
