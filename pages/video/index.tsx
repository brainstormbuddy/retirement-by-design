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

import TodayIcon from '@mui/icons-material/Today';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Newsletter from '../../components/Newsletter/Newsletter';

import styles from './articles.module.scss';
import { Assignment } from '@mui/icons-material';

export default function Articles(props: any) {
  return (
    <>
      <Head>
        <title>Articles - Retirement by Design</title>
      </Head>
      <Navigation />
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <article className={styles.upcomingWorkshop}>
              <div className={styles.imageContainer}>
                <img src="https://placedog.net/400/400" />

                <div className={styles.imageContainerText}>
                  <p className={styles.imageContainerType}>
                    <Assignment />
                    Article Topic
                  </p>
                  <h1 className={styles.imageContainerTitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h1>
                </div>
              </div>

              <div className="content">
                <p className={styles.articlePublished}>
                  September 21, 2021 • 3 minute read
                </p>

                <div className={styles.articlePublishedBy}>
                  <img src="https://via.placeholder.com/32x32/" />
                  <p>Shawn Bellefeuille</p>
                </div>

                <p className={styles.articleExcerpt}>
                  Proin volutpat laoreet nisl, nec pharetra ligula. Nam eros
                  tellus, interdum et nunc quis, ultricies dignissim lacus.
                </p>

                <Typography
                  color="secondary"
                  className={`${styles.browseLink} ${styles.browseLinkWithArrow}`}
                >
                  <span>Keep reading</span> <ArrowRightAltIcon />
                </Typography>
              </div>
            </article>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid>
          <div className="content">
            <Box style={{ padding: '56px 0 24px' }}>
              <Divider />
            </Box>
          </div>
        </Grid>
      </Container>

      <div className="content">
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
                      <Assignment />
                      Article Topic
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

            <Grid item xs={12} md={6}>
              <article>
                <div
                  className={`${styles.imageContainer} ${styles.imageContainerSmall}`}
                >
                  <img src="https://via.placeholder.com/400x245/?text=." />

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
      </div>

      <Box mt={5} pt={3}>
        <span></span>
      </Box>

      <Newsletter />

      <Footer />
    </>
  );
}
