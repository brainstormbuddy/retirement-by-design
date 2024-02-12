// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import Mailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import ownerTemplate from './owner-template';
import registrantTemplate from './registrant-template';

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

  let response = null;
  let webinarId = '';

  let from = 'Shawn Bellefeuille';
  let emailFrom = 'Shawn Bellefeuille <shawn.bellefeuille@retirementby.design>';
  let estate = false;
  let workshop = 'How Taxes Affect Your Retirement Plan';
  let toEmails = [
    'shawn.bellefeuille@retirementby.design',
    'gabriella.vasconcelos@retirementby.design',
  ];

  let ccEmails = ['jeremy.bellefeuille@gmail.com', 'jivanyesh@gmail.com'];

  if (req.body.sessionDate === 'February 8, 2022 at 12PM') {
    webinarId = '4fd25d68847a';
  } else if (req.body.sessionDate === 'February 15, 2022 at 12PM') {
    webinarId = 'd66ad3d84b70';
    toEmails = ['fred.pratt@retirementby.design'];
    ccEmails.push('shawn.bellefeuille@retirementby.design');
    ccEmails.push('gabriella.vasconcelos@retirementby.design');
    from = 'Fred Pratt';
    emailFrom = 'Fred Pratt <fred.pratt@retirementby.design>';
  } else if (req.body.sessionDate === 'February 23, 2022 at 12PM') {
    webinarId = '3ded2d9ef2b2';
    toEmails = ['amber.lundin@retirementby.design'];
    ccEmails.push('shawn.bellefeuille@retirementby.design');
    ccEmails.push('gabriella.vasconcelos@retirementby.design');
    from = 'Amber Lundin';
    emailFrom = 'Amber Lundin <amber.lundin@retirementby.design>';
  } else if (req.body.sessionDate === 'March 1, 2022 at 12PM') {
    webinarId = '90d8c98cb4ac';
    toEmails = ['fred.pratt@retirementby.design'];
    ccEmails.push('shawn.bellefeuille@retirementby.design');
    ccEmails.push('gabriella.vasconcelos@retirementby.design');
    from = 'Fred Pratt';
    workshop = 'Protecting your Estate in Canada';
    estate = true;
    emailFrom = 'Fred Pratt <fred.pratt@retirementby.design>';
  } else if (req.body.sessionDate === 'March 8, 2022 at 12PM') {
    webinarId = 'bb263b98432e';
    toEmails = ['amber.lundin@retirementby.design'];
    ccEmails.push('shawn.bellefeuille@retirementby.design');
    ccEmails.push('gabriella.vasconcelos@retirementby.design');
    from = 'Amber Lundin';
    emailFrom = 'Amber Lundin <amber.lundin@retirementby.design>';
  } else if (req.body.sessionDate === 'March 15, 2022 at 12PM') {
    webinarId = 'a23996aa6dfb';
    toEmails = ['amber.lundin@retirementby.design'];
    ccEmails.push('shawn.bellefeuille@retirementby.design');
    ccEmails.push('gabriella.vasconcelos@retirementby.design');
    from = 'Amber Lundin';
    emailFrom = 'Amber Lundin <amber.lundin@retirementby.design>';
  } else if (req.body.sessionDate === 'March 22, 2022 at 12PM') {
    webinarId = '9ef93e71b983';
    toEmails = ['fred.pratt@retirementby.design'];
    ccEmails.push('shawn.bellefeuille@retirementby.design');
    ccEmails.push('gabriella.vasconcelos@retirementby.design');
    from = 'Fred Pratt';
    emailFrom = 'Fred Pratt <fred.pratt@retirementby.design>';
  } else if (req.body.sessionDate === 'March 29, 2022 at 12PM') {
    webinarId = '7282344237f3';
    toEmails = ['amber.lundin@retirementby.design'];
    ccEmails.push('shawn.bellefeuille@retirementby.design');
    ccEmails.push('gabriella.vasconcelos@retirementby.design');
    from = 'Amber Lundin';
    emailFrom = 'Amber Lundin <amber.lundin@retirementby.design>';
  } else if (req.body.sessionDate === 'April 12, 2022 at 12PM') {
    webinarId = '2c205e5720f4';
    toEmails = ['amber.lundin@retirementby.design'];
    ccEmails.push('shawn.bellefeuille@retirementby.design');
    ccEmails.push('gabriella.vasconcelos@retirementby.design');
    from = 'Amber Lundin';
    emailFrom = 'Amber Lundin <amber.lundin@retirementby.design>';
  } else if (req.body.sessionDate === 'April 19, 2022 at 12PM') {
    webinarId = 'b7f537eb8087';
    toEmails = ['fred.pratt@retirementby.design'];
    ccEmails.push('shawn.bellefeuille@retirementby.design');
    ccEmails.push('gabriella.vasconcelos@retirementby.design');
    from = 'Fred Pratt';
    workshop = 'Protecting your Estate in Canada';
    emailFrom = 'Fred Pratt <fred.pratt@retirementby.design>';
  } else if (req.body.sessionDate === 'April 26, 2022 at 12PM') {
    webinarId = '2a4f2d817c90';
    toEmails = ['amber.lundin@retirementby.design'];
    ccEmails.push('shawn.bellefeuille@retirementby.design');
    ccEmails.push('gabriella.vasconcelos@retirementby.design');
    from = 'Amber Lundin';
    emailFrom = 'Amber Lundin <amber.lundin@retirementby.design>';
  } else if (req.body.sessionDate === 'May 10, 2022 at 12PM') {
    webinarId = '0662209c9f65';
    // ccEmails.push('shawn.bellefeuille@retirementby.design');
  } else if (req.body.sessionDate === 'May 17, 2022 at 12PM') {
    webinarId = '253246deadc7';
  } else if (req.body.sessionDate === 'May 31, 2022 at 12PM') {
    webinarId = 'e26466a0a01a';
    toEmails = ['fred.pratt@retirementby.design'];
    ccEmails.push('shawn.bellefeuille@retirementby.design');
    ccEmails.push('gabriella.vasconcelos@retirementby.design');
    from = 'Fred Pratt';
    workshop = 'Protecting your Estate in Canada';
    emailFrom = 'Fred Pratt <fred.pratt@retirementby.design>';
  } else if (req.body.sessionDate === 'June 14, 2022 at 12PM') {
    webinarId = '07c5b36b0c23';
  } else if (req.body.sessionDate === 'June 21, 2022 at 12PM') {
    webinarId = '198fea850f8a';
  } else if (req.body.sessionDate === 'July 19, 2022 at 12PM') {
    webinarId = '5b0ccc2e5519';
  } else if (req.body.sessionDate === 'August 23, 2022 at 12PM') {
    webinarId = 'f5bf9386e579';
  }

  try {
    response = await axios.put(
      'https://www.bigmarker.com/api/v1/conferences/register',
      {},
      {
        params: {
          id: webinarId,
          email: req.body.emailAddress,
          phone: req.body.phone,
          first_name: req.body.firstName,
          last_name: req.body.lastName,
        },
        headers: {
          'API-KEY': '9644288aa8c0dfd3c09f',
        },
      }
    );

    if (response.status === 200) {
      console.log(response.data);
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
        to: toEmails,
        cc: ccEmails,
        from: emailFrom,
        subject: 'New webinar registration from ' + req.body.firstName,
        html: ownerTemplate({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          emailAddress: req.body.emailAddress,
          phone: req.body.phone,
          oneOnOne: req.body.oneOnOne,
          workshop,
          session: req.body.sessionDate,
        }),
      });

      transporter.sendMail({
        to: req.body.emailAddress,
        from: emailFrom,
        subject: 'New webinar registration from ' + req.body.firstName,
        html: registrantTemplate({
          firstName: req.body.firstName,
          oneOnOne: req.body.oneOnOne || false,
          from,
          estate,
        }),
      });

      res.status(200).json({
        success: true,
        error: false,
        url: response.data.conference_url,
      });
    }
  } catch (error) {
    console.log(error);
    //@ts-ignore
    console.log(error.message);
    console.log('IN ERROR');

    if (response) {
      if (response.data.conference_url) {
        res.status(200).json({
          success: true,
          error: false,
          url: response.data.conference_url,
        });
      }
    }

    res.status(200).json({
      success: false,
      error: true,
    });
  }
}
