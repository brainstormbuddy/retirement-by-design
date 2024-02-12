// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
//@ts-ignore
import mailchimpApiClient from '@mailchimp/mailchimp_marketing';
import directus from '../../modules/directus';

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

  let mailChimpAudienceID = '9527679982';

  mailchimpApiClient.setConfig({
    apiKey: 'a8940e90867feba50e2d556cc5ef37e8',
    server: 'us20',
  });

  try {
    const listMember = await mailchimpApiClient.lists.addListMember(
      mailChimpAudienceID,
      {
        email_address: req.body.emailAddress,
        status: 'subscribed',
        merge_fields: {
          FNAME: req.body.firstName,
        },
      }
    );
    console.log(listMember);

    if (listMember.hasOwnProperty('id')) {
      directus.items('newsletter_signups').createOne({
        mailchimp_id: listMember.id,
        first_name: req.body.firstName,
        email_address: req.body.emailAddress,
        mailchimp_status: 'subscribed',
      });

      res.status(200);
      res.end();
    } else {
      res.status(200);
      res.end();
    }
  } catch (error) {
    console.log(error);

    //@ts-ignore
    if (error.status === 400) {
      //@ts-ignore
      if (error.body.title === 'Member Exists') {
        res.status(400);
        res.end('Member Exists');
      }
    }

    res.status(500);
    res.end();
  }
}
