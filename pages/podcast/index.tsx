import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import TodayIcon from '@mui/icons-material/Today';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import HeadsetIcon from '@mui/icons-material/Headset';

import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Newsletter from '../../components/Newsletter/Newsletter';

import styles from './podcasts.module.scss';
import directus from '../../modules/directus';

function Podcasts(props: any) {
  // console.log(props.podcasts);

  const latestPodcast = props.podcasts[0];

  return (
    <>
      <Head>
        <title>Podcast - Retirement by Design</title>

        <meta name="title" content={`Podcast - Retirement by Design`} />

        <meta
          name="description"
          content="Learn how to plan your retirement alongside industry leaders."
        />

        <meta property="og:type" content="website" />

        <meta property="og:title" content={`Podcast - Retirement by Design`} />
        <meta
          property="og:url"
          content={`https://retirementby.design/podcast`}
        />

        <meta
          property="og:description"
          content="Learn how to plan your retirement alongside industry leaders."
        />

        <meta
          property="og:image"
          content="https://retirementby.design/images/workshop-header-shawn.jpg"
        />
      </Head>
      <Navigation />
      <Container
        maxWidth="xl"
        style={{ position: 'relative', marginTop: '50px' }}
      >
        <Grid container spacing={6}>
          <Grid
            item
            xs={12}
            md={7}
            lg={7}
            sm={12}
            className={styles.stickyContainer}
          >
            <Link href={`/podcast/${latestPodcast.slug}`}>
              <a className={styles.featuredPodcast}>
                <img
                  className={styles.podcastImage}
                  src={`https://admin.retirementby.design/assets/${latestPodcast.social_thumbnail}`}
                />

                <div className="content">
                  <h1>{latestPodcast.title}</h1>
                  <p className={styles.articlePublished}>
                    Episode {latestPodcast.episode_number} •{' '}
                    {latestPodcast.minutes} minutes
                  </p>

                  <div className={styles.articlePublishedBy}>
                    <img
                      src={`https://admin.retirementby.design/assets/${latestPodcast.host[0].directus_users_id.avatar}`}
                      style={{ maxWidth: '40px' }}
                    />

                    <p>
                      {latestPodcast.host[0].directus_users_id.first_name}{' '}
                      {latestPodcast.host[0].directus_users_id.last_name}
                    </p>
                  </div>

                  <p className={styles.articleExcerpt}>
                    {latestPodcast.description.substring(0, 175) + '...'}
                  </p>

                  <p
                    className={`${styles.browseLink} ${styles.browseLinkWithArrow} ${styles.authorBioLink}`}
                  >
                    <span>Listen now {props.firstName}</span>
                    <ArrowRightAltIcon />
                  </p>
                </div>
              </a>
            </Link>
          </Grid>
          <Grid item md={5} xs={12} sm={12} lg={5}>
            {props.podcasts.map((podcast: any, index: number) => {
              if (index == 0) return null;

              return (
                <Link href={`/podcast/${podcast.slug}`} key={index}>
                  {/* <Link href={`/podcasts/${podcast.slug}`} /> */}
                  <div className={`${styles.smallPodcast}`}>
                    <img
                      src={
                        podcast.social_thumbnail
                          ? `https://admin.retirementby.design/assets/${podcast.social_thumbnail}`
                          : `https://via.placeholder.com/800x800`
                      }
                    />

                    <div className="content">
                      <p className={styles.articlePublished}>
                        Episode {podcast.episode_number} • {podcast.minutes}{' '}
                        minutes{' '}
                      </p>

                      <h1>{podcast.title}</h1>

                      <div className={styles.articlePublishedBy}>
                        <img
                          src={`https://admin.retirementby.design/assets/${podcast.host[0].directus_users_id.avatar}`}
                          style={{ maxWidth: '40px' }}
                        />

                        <p>
                          {podcast.host[0].directus_users_id.first_name}{' '}
                          {podcast.host[0].directus_users_id.last_name}
                        </p>
                      </div>

                      <p className={styles.articleExcerpt}>
                        {podcast.description.substring(0, 100) + '...'}
                      </p>

                      <p
                        className={`${styles.browseLink} ${styles.browseLinkWithArrow} ${styles.authorBioLink}`}
                      >
                        <span>Listen now {props.firstName}</span>
                        <ArrowRightAltIcon />
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid item>
          <div className="content">
            <Box style={{ padding: '56px 0 24px' }}>
              <Divider />
            </Box>
          </div>
        </Grid>
      </Container>

      {/* <div className="content">
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <h1>Most Recent</h1>
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
                  <img src="https://via.placeholder.com/400x245/?text=." />

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
                  <img src="https://via.placeholder.com/400x245/?text=." />

                  <div className={styles.imageContainerText}>
                    <p className={styles.imageContainerType}>
                      <HeadsetIcon />
                      Podcast Topic
                    </p>
                    <h1 className={styles.imageContainerTitle}>
                      The Importance of a Written Retirement Plan
                    </h1>
                  </div>
                </div>
              </article>
            </Grid>

            <Grid item xs={12} md={6}>
              <article>
                <div
                  className={`${styles.imageContainer} ${styles.imageContainerSmall}`}
                >
                  <img src="https://via.placeholder.com/400x245/?text=." />

                  <div className={styles.imageContainerText}>
                    <p className={styles.imageContainerType}>
                      <HeadsetIcon />
                      Podcast Topic
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
      </div>

      <Box mt={5} pt={3}>
        <span></span>
      </Box> */}

      <Newsletter />

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await directus.items('podcasts').readMany({
    // filter: {
    //   status: 'published',
    // },
    fields: '*,host.directus_users_id.*',

    //@ts-ignore
    sort: ['-episode_number'],
  });

  // console.log(res);
  // Pass data to the page via props
  return {
    props: {
      podcasts: res.data,
      // podcastsCount: res.meta?.total_count,
    },
  };
}

export default Podcasts;
