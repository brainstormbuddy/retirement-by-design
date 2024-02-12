import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { GetServerSideProps } from 'next';

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

import ImportContactsIcon from '@mui/icons-material/ImportContacts';

import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

import styles from './articles.module.scss';
import { Assignment } from '@mui/icons-material';
import BookCTA from '../../components/BookCTA/BookCTA';
import directus from '../../modules/directus';

function Books(props: any) {
  return (
    <>
      <Head>
        <title>Book - Retirement by Design</title>
      </Head>
      <Navigation />

      <BookCTA bookPage />

      <Box mt={4}></Box>

      <div className="content">
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <h1>Table of contents</h1>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={styles.workshopsContainer}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <article>
                <div
                  className={`${styles.imageContainer} ${styles.imageContainerSmall}`}
                >
                  <img
                    src="https://via.placeholder.com/400x245/?text=."
                    style={{ width: '100%', maxWidth: '100%' }}
                  />

                  <div className={styles.imageContainerText}>
                    <p className={styles.imageContainerType}>
                      <ImportContactsIcon />
                      Chapter 1
                    </p>

                    <h3 className={`${styles.imageContainerTitle}`}>
                      Starting With the End in Mind
                    </h3>
                  </div>
                </div>
              </article>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <article>
                <div
                  className={`${styles.imageContainer} ${styles.imageContainerSmall}`}
                >
                  <img
                    src="https://via.placeholder.com/400x245/?text=."
                    style={{ width: '100%', maxWidth: '100%' }}
                  />

                  <div className={styles.imageContainerText}>
                    <p className={styles.imageContainerType}>
                      <ImportContactsIcon />
                      Chapter 2
                    </p>
                    <h1 className={styles.imageContainerTitle}>
                      Goals in Retirement and How Do I Get Started
                    </h1>
                  </div>
                </div>
              </article>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <article>
                <div
                  className={`${styles.imageContainer} ${styles.imageContainerSmall}`}
                >
                  <img
                    src="https://via.placeholder.com/400x245/?text=."
                    style={{ width: '100%', maxWidth: '100%' }}
                  />

                  <div className={styles.imageContainerText}>
                    <p className={styles.imageContainerType}>
                      <ImportContactsIcon />
                      Chapter 3
                    </p>
                    <h1 className={styles.imageContainerTitle}>
                      Basic Sources of Retirement Income
                    </h1>
                  </div>
                </div>
              </article>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API

  const books = await directus.items('books').readMany();

  console.log(books);
  // Pass data to the page via props
  return {
    props: {
      //@ts-ignore
      books: books || null,
      // podcastsCount: res.meta?.total_count,
    },
  };
}

export default Books;
