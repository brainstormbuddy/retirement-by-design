import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { GetServerSideProps } from 'next';

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Navigation from '../../components/Navigation/Navigation';
import CTA from '../../components/CTA/CTA';
import FAQ from '../../components/FAQ/FAQ';
import Footer from '../../components/Footer/Footer';

import ArticleProgress from '../../components/ArticleProgress/ArticleProgress';
import NextChapter from '../../components/NextChapter/NextChapter';

import directus from '../../modules/directus';

import styles from './member.module.scss';

function Member(props: any) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          {props.user.first_name} {props.user.last_name} - Retirement by Design
        </title>

        <meta
          name="title"
          content={`${props.user.first_name} ${props.user.last_name} - Retirement by Design`}
        />
        <meta name="description" content={`${props.user.description || ''}`} />

        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://metatags.io/" /> */}
        <meta
          property="og:title"
          content={`${props.user.first_name} ${props.user.last_name} - Retirement by Design`}
        />
        <meta
          property="og:description"
          content={`${props.user.description || ''}`}
        />
        <meta
          property="og:image"
          content={`https://admin.retirementby.design/assets/${
            props.user.avatar || ''
          }`}
        />
      </Head>

      <Navigation />

      <div className={styles.memberContainer}>
        <Container>
          <Grid
            spacing={{ sm: 3, md: 8, xs: 3, lg: 6 }}
            container
            justifyContent="space-between"
          >
            <Grid item xs={12}>
              <Link href="/about#our-team">
                <span className={styles.aboutLink}>
                  <KeyboardBackspaceIcon style={{ marginRight: '8px' }} />
                  About
                </span>
              </Link>
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              {props.user.avatar_hover !== null ? (
                <img
                  style={{ maxWidth: '100%', borderRadius: '4px' }}
                  src={`https://admin.retirementby.design/assets/${props.user.avatar_hover}`}
                />
              ) : props.user.avatar !== null ? (
                <img
                  style={{ maxWidth: '100%', borderRadius: '4px' }}
                  src={`https://admin.retirementby.design/assets/${props.user.avatar}`}
                />
              ) : (
                <img
                  style={{ maxWidth: '100%', borderRadius: '4px' }}
                  src="https://via.placeholder.com/367x367?text=+"
                />
              )}

              {props.user.phone !== null ||
                (props.user.email !== null && (
                  <div className={`${styles.connectWithContainer}`}>
                    <h2 className={styles.connectWith}>
                      Connect with {props.user.first_name}
                    </h2>

                    {props.user.phone !== null && (
                      <p className={styles.connectWithItem}>
                        <PhoneIcon />
                        <Link href={`tel:${props.user.phone}`}>
                          {props.user.phone}
                        </Link>
                      </p>
                    )}

                    {props.user.email !== null && (
                      <p className={styles.connectWithItem}>
                        <EmailIcon />

                        <Link
                          //@ts-ignore
                          title={props.user.email}
                          href={`mailto:${props.user.email}`}
                        >
                          {props.user.email}
                        </Link>
                      </p>
                    )}
                  </div>
                ))}
            </Grid>

            <Grid
              item
              xs={12}
              md={8}
              lg={8}
              sm={12}
              className="article-content content no-lead"
            >
              <h1 className={styles.title}>
                {props.user.first_name} {props.user.last_name}
              </h1>
              <h2 className={styles.subtitle}>{props.user.title}</h2>

              <div
                dangerouslySetInnerHTML={{
                  __html: props.user.long_description,
                }}
              ></div>

              {props.user.meeting_link !== undefined && (
                <>
                  <Box mt={5}></Box>
                  <Divider />

                  <a
                    style={{ marginTop: '30px' }}
                    //@ts-ignore
                    //@ts-ignore
                    className={`${styles.browseLink} ${styles.browseLinkWithArrow} ${styles.authorBioLink} ${styles.browseLinkGrey}`}
                    onClick={() => router.push(props.user.meeting_link)}
                  >
                    <span>Arrange a chat with {props.first_name}</span>{' '}
                    <ArrowRightAltIcon />
                  </a>
                </>
              )}
            </Grid>
            <Grid item xs={12} md={8} lg={8} sm={8}>
              {props.user.phone !== null ||
                (props.user.email !== null && (
                  <div
                    className={`${styles.connectWithContainer} ${styles.connectWithContainerPhone}`}
                  >
                    <h2 className={styles.connectWith}>
                      Connect with {props.user.first_name}
                    </h2>

                    {props.user.phone !== null && (
                      <p className={styles.connectWithItem}>
                        <PhoneIcon />
                        <a href={`tel:${props.user.phone}`}>
                          {props.user.phone}
                        </a>
                      </p>
                    )}

                    {props.user.email !== null && (
                      <p className={styles.connectWithItem}>
                        <EmailIcon />

                        <a
                          title={props.user.email}
                          href={`mailto:${props.user.email}`}
                        >
                          {props.user.email}
                        </a>
                      </p>
                    )}
                  </div>
                ))}
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="mt-4"></div>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context: GetServerSideProps) {
  // Fetch data from external API
  //@ts-ignore
  const { member } = context.query;

  const user = await directus.items('directus_users').readMany({
    filter: {
      slug: member,
    },
  });

  console.log(user);

  // Pass data to the page via props
  return {
    props: {
      //@ts-ignore
      user: user.data ? user.data[0] : null,
    },
  };
}

export default Member;
