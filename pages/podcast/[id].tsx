import Head from 'next/head';
import { GetServerSideProps } from 'next';

import {
  Grid,
  Box,
  Button,
  Container,
  Divider,
  Typography,
} from '@mui/material';

import HeadsetIcon from '@mui/icons-material/Headset';

import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

import BookCTA from '../../components/BookCTA/BookCTA';
import AuthorBio from '../../components/AuthorBio/AuthorBio';
// import Comments from '../../components/Comments/Comments';
import Newsletter from '../../components/Newsletter/Newsletter';

import directus from '../../modules/directus';

import styles from './podcast.module.scss';

function Podcast(props: any) {
  console.log(props);

  const { podcast } = props;

  return (
    <>
      <Head>
        <title>{podcast.title} - Retirement by Design</title>
      </Head>
      <Navigation />

      <div className="content text-center background-dark-grey">
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
              <div
                className={`${styles.articleHeader} ${styles.articleHeaderWhite}`}
              >
                <p className={styles.articleType}>
                  Episode{' '}
                  {podcast.episode_number.length > 2
                    ? podcast.episode_number
                    : '0' + podcast.episode_number}
                </p>
                <h1 className="mt-0">{podcast.title}</h1>
                <h2 className="subheading mt-0">{podcast.description}</h2>
                <Divider style={{ backgroundColor: '#fff', marginTop: 0 }} />
                <p className={styles.articlePublished}>
                  November 21, 2021 • {podcast.minutes} minutes
                </p>
                <div className={styles.articlePublishedBy}>
                  <img
                    src={`https://admin.retirementby.design/assets/${podcast.host[0].directus_users_id.avatar}`}
                  />
                  <p>
                    {podcast.host[0].directus_users_id.first_name}{' '}
                    {podcast.host[0].directus_users_id.last_name}
                  </p>
                </div>
              </div>

              <div className={styles.audioContainer}>
                <iframe
                  src={`https://open.spotify.com/embed/episode/${podcast.podcast_embed_url}?utm_source=generator&theme=0`}
                  width="600px"
                  height="152px"
                  frameBorder="0"
                  allow="encrypted-media"
                ></iframe>

                <div className={styles.listenOn}>
                  {/* <div>
              <p>Apple Podcast</p>
              <img src="/images/icon-spotify.svg" width="32" />
            </div>
            <div>
              <p>Spotify</p>
              <img src="/images/icon-spotify.svg" width="32" />
            </div> */}
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Box mt={8}></Box>

      <div className="content article-content no-lead nt">
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={12} md={8}>
              <h1 className="mt-0">Synopsis</h1>

              <div
                dangerouslySetInnerHTML={{
                  //@ts-ignore
                  __html: podcast.body,
                }}
              ></div>
            </Grid>
          </Grid>
        </Container>
      </div>

      {podcast.podcast_video_url !== null && (
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={8}>
              <div className="content mt-4">
                <h1 className="mt-4">Watch the podcast</h1>
              </div>
            </Grid>

            <Grid item xs={12}>
              <video
                autoPlay={false}
                style={{
                  maxWidth: '100%',
                  marginBottom: '8px',
                  borderRadius: '4px',
                }}
                controls
              >
                <source src="https://temp.media/video/?height=1080&width=1920&length=10&text=" />
              </video>
            </Grid>
          </Grid>
        </Container>
      )}

      <AuthorBio
        firstName={podcast.host[0].directus_users_id.first_name}
        lastName={podcast.host[0].directus_users_id.last_name}
        description={podcast.host[0].directus_users_id.description}
        profileImage={`https://admin.retirementby.design/assets/${podcast.host[0].directus_users_id.avatar}`}
        profileLink={`/about/${podcast.host[0].directus_users_id.slug}`}
      />

      {/* <Comments /> */}

      {/* <BookCTA /> */}

      {/* 
      <div className="content">
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
                      Episode {podcast.episode_number}
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
                  <img src="https://via.placeholder.com/400x245/?text=%20" />

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
      </div> */}

      <Newsletter />

      <Footer />
    </>
  );
}

export async function getServerSideProps(context: GetServerSideProps) {
  // Fetch data from external API
  //@ts-ignore
  const { id } = context.query;

  const podcast = await directus.items('podcasts').readMany({
    fields: '*,host.directus_users_id.*',
    filter: {
      slug: id,
    },
    // fields: '*,author.*',
  });
  // readOne(id, {
  //   fields: '*,host.directus_users_id.*',
  // });

  // Pass data to the page via props
  return {
    props: {
      //@ts-ignore
      podcast: podcast.data[0] || null,
      // podcastsCount: res.meta?.total_count,
    },
  };
}

export default Podcast;
