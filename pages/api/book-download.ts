// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import Mailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import directus from '../../modules/directus';
import ownerTemplate from './book-download-owner';
import registrantTemplate from './book-download-user';

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
      subject: 'New book download',
      html: ownerTemplate({
        firstName: req.body.firstName,
        emailAddress: req.body.emailAddress,
      }),
    });

    transporter.sendMail({
      to: req.body.emailAddress,
      from: 'Shawn Bellefeuille <shawn.bellefeuille@retirementby.design>',
      subject: 'Your Free Digital Copy of The Pursuit of Retirement',
      html: registrantTemplate({
        firstName: req.body.firstName,
      }),
      attachments: [
        {
          filename:
            'The Pursuit of Retirement by Shawn Bellefeuille - Ebook.pdf',
          path: 'https://admin.retirementby.design/assets/fac4ac42-d8cd-46c6-8849-41938b169126',
        },
      ],
    });

    directus.items('book_downloads').createOne({
      first_name: req.body.firstName,
      email: req.body.emailAddress,
    });

    res.status(200);

    res.end();
  } catch (error) {
    console.log(error);
    //@ts-ignore
    console.log(error.message);
    console.log('IN ERROR');
  }
}
