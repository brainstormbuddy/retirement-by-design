// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Mailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(process.env.SMTP_USERNAME, process.env.SMTP_PASSWORD);

  res.status(200);

  let transporter = Mailer.createTransport(
    smtpTransport({
      host: 'email-smtp.us-east-1.amazonaws.com',
      port: 465,
      secure: true, // 487 only
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    })
  );

  transporter.sendMail({
    to: 'jivanyesh@gmail.com',
    from: 'shawn@retirementby.design',
    text: 'Test',
    html: '<b>RBD</b>',
  });

  res.status(200).json({ name: 'John Doe' });
}
