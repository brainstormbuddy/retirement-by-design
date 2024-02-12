import Head from 'next/head';

import { Box, Container, Divider, Grid } from '@mui/material';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

import styles from './legal.module.scss';
import { GetServerSideProps } from 'next';
import directus from '../../modules/directus';

function LegalNotices(props: any) {
  return (
    <>
      <Head>
        <title>Legal Notices - Retirement by Design</title>
      </Head>
      <Navigation />

      <div className={`mt-2`}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={12} md={10}>
              <div
                id="article-content"
                className="article-content no-lead"
                dangerouslySetInnerHTML={{
                  //@ts-ignore
                  __html: props.legal,
                }}
              ></div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context: GetServerSideProps) {
  // Fetch data from external API
  //@ts-ignore
  const { id } = context.query;

  const legal = await directus.items('legal_notices').readMany();
  // readOne(id, {
  //   fields: '*,host.directus_users_id.*',
  // });

  console.log(legal);

  // Pass data to the page via props
  return {
    props: {
      //@ts-ignore
      legal: legal.data.body || null,
      // podcastsCount: res.meta?.total_count,
    },
  };
}

export default LegalNotices;
