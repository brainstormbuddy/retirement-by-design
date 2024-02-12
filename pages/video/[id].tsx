import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

import HeadsetIcon from '@mui/icons-material/Headset';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Navigation from '../../components/Navigation/Navigation';
import CTA from '../../components/CTA/CTA';
import FAQ from '../../components/FAQ/FAQ';
import Footer from '../../components/Footer/Footer';

import styles from './article.module.scss';
import Today from '@mui/icons-material/Today';
import BookCTA from '../../components/BookCTA/BookCTA';
import AuthorBio from '../../components/AuthorBio/AuthorBio';
import Comments from '../../components/Comments/Comments';
import Newsletter from '../../components/Newsletter/Newsletter';
import ArticleProgress from '../../components/ArticleProgress/ArticleProgress';
import { Assignment } from '@mui/icons-material';
import directus from '../../modules/directus';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

export default function Article(props: any) {
  const router = useRouter();

  const { video } = props;

  return (
    <>
      <Head>
        <title>{video.title} - Retirement by Design</title>

        <meta name="title" content={`${video.title}- Retirement by Design`} />
        <meta name="description" content={`${video.description || ''}`} />

        <meta property="og:type" content="video" />
        <meta
          property="og:url"
          content={`https://retirementby.design/videos/${video.slug}`}
        />
        <meta
          property="og:title"
          content={`${video.title} - Retirement by Design`}
        />

        <meta
          property="og:description"
          content={`${video.description || ''}`}
        />
      </Head>

      <Navigation />

      <Container>
        <Grid container justifyContent={'center'}>
          <Grid item xs={12} md={10} className={styles.videoHeading}>
            <h1 className="mt-0" style={{ marginTop: '40px' }}>
              {video.title}
            </h1>
            <h2 className="subheading mt-0">{video.description}</h2>

            <div
              onClick={() =>
                router.push('https://regar.as.me/?appointmentType=12297102')
              }
              style={{ cursor: 'pointer' }}
            >
              <p
                className={`${styles.browseLink} ${styles.browseLinkWithArrow} ${styles.authorBioLink} ${styles.browseLinkGrey}`}
              >
                <span>Start planning</span> <ArrowRightAltIcon />
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <div className={styles.videoContainer}>
              <video
                controls
                autoPlay
                src={`https://admin.retirementby.design/assets/${video.video_link}`}
              ></video>
            </div>
          </Grid>
        </Grid>
        <Grid></Grid>
      </Container>

      {/* <div className={`${styles.articleContainer} content text-center`}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={10} sm={10}>
              <div className={`${styles.articleHeader}`}>
                <p className={styles.articleType}>{article.topic}</p>
                <h1 className="mt-0">{article.title}</h1>
                <h2 className="subheading mt-0">{article.description}</h2>
                <Divider
                  className={styles.articleInfoDivider}
                  style={{ marginTop: 0 }}
                />
                <p className={styles.articlePublished}>
                  {dayjs(article.publish_date).format('MMM D, YYYY')} •{' '}
                  <span id="js-minutes-to-read">15 minute read</span>
                </p>
                <div className={styles.articlePublishedBy}>
                  <img
                    width="32px"
                    height="32px"
                    src={`https://admin.retirementby.design/assets/${article.author.avatar}`}
                  />
                  <p>
                    {article.author.first_name} {article.author.last_name}
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div> */}

      {/* <div className="content mt-2">
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <h1>Suggested</h1>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={styles.workshopsContainer}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <article>
                <div
                  className={`${styles.imageContainer} ${styles.imageContainerSmall}`}
                >
                  <img src="https://via.placeholder.com/400x245/?text=%20" />

                  <div className={styles.imageContainerText}>
                    <p className={styles.imageContainerType}>
                      <HeadsetIcon />
                      Podcast Topic
                    </p>

                    <h3 className={`${styles.imageContainerTitle}`}>
                      The Importance of a Written Retirement Plan
                    </h3>
                  </div>
                </div>
              </article>
            </Grid>

            <Grid item xs={12} md={6}>
              <article>
                <div
                  className={`${styles.imageContainer} ${styles.imageContainerSmall}`}
                >
                  <img src="https://via.placeholder.com/400x245/?text=%20" />

                  <div className={styles.imageContainerText}>
                    <p className={styles.imageContainerType}>
                      <Assignment />
                      Article Topic
                    </p>
                    <h1 className={styles.imageContainerTitle}>
                      The Importance of a Written Retirement Plan
                    </h1>
                  </div>
                </div>
              </article>
            </Grid>
          </Grid>
        </Container>
      </div> */}

      {/* <Newsletter /> */}

      <div style={{ marginTop: '100px' }}></div>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context: GetServerSideProps) {
  // Fetch data from external API
  //@ts-ignore
  const { id } = context.query;

  const video = await directus.items('videos').readMany({
    // fields: '*',
    filter: {
      slug: id,
    },
    // fields: '*,author.*',
  });

  // console.log(video);

  return {
    props: {
      //@ts-ignore
      video: video.data[0] || null,
    },
  };
}
