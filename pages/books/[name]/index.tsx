import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { GetServerSideProps } from 'next';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import Navigation from '../../../components/Navigation/Navigation';
import Footer from '../../../components/Footer/Footer';
import BookCTA from '../../../components/BookCTA/BookCTA';

import directus from '../../../modules/directus';

import styles from './book.module.scss';

function Book(props: any) {
  //@ts-ignore
  //@ts-ignore
  //@ts-ignore

  const { book } = props;

  const [messageSubmitSuccessOpen, setMessageSubmitSuccessOpen] =
    React.useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      emailAddress: '',
      honey: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(50).required('Enter your first name'),
      emailAddress: Yup.string()
        .email('Enter a valid email address')
        .required('Enter your email address'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log('Submitted');

      if (values.honey.length > 0) {
        return;
      }

      console.log('Submitted');

      axios
        .post('/api/book-download', {
          ...values,
        })
        .then((res: any) => {
          console.log(res);
          setSubmitting(false);
          setMessageSubmitSuccessOpen(true);
          resetForm();
        })
        .catch((error) => {
          console.log(error);
          setSubmitting(false);
        });
    },
  });

  return (
    <div>
      <Head>
        <title>{book.title} - Retirement by Design</title>

        <meta name="title" content={`${book.title} - Retirement by Design`} />
        <meta name="description" content={book.description} />

        <meta property="og:type" content="book" />
        <meta
          property="og:url"
          content={`https://retirementby.design/books/${book.slug}`}
        />
        <meta
          property="og:title"
          content={`${book.title} - Retirement by Design`}
        />
        <meta property="og:description" content={book.description} />
        <meta
          property="og:image"
          content={`https://admin.retirementby.design/assets/${book.cover}`}
        />
      </Head>
      <Navigation />

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={messageSubmitSuccessOpen}
        onClose={() => setMessageSubmitSuccessOpen(false)}
        message="Check your inbox. We emailed you the copy of the book."
        key={'top' + 'center'}
      />

      <div className={styles.bookContainer}>
        <Container maxWidth="lg">
          <Grid
            container
            justifyContent={{ md: 'space-between', sm: 'center' }}
            alignItems="center"
          >
            <Grid item xs={12} md={6} sm={8} order={{ sm: 2, md: 1 }}>
              <h1>{book.title}</h1>
              <h2 className="subheading">{book.description}</h2>
              <form onSubmit={formik.handleSubmit} autoComplete="off">
                <TextField
                  placeholder="Honey"
                  name="honey"
                  style={{ display: 'none' }}
                  margin="dense"
                  color="secondary"
                  onChange={formik.handleChange}
                  value={formik.values.honey}
                />

                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="First name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                  color="secondary"
                  name="firstName"
                  margin="dense"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  error={Boolean(
                    formik.touched.firstName && formik.errors.firstName
                  )}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Email address"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                  margin="dense"
                  color="secondary"
                  name="emailAddress"
                  onChange={formik.handleChange}
                  value={formik.values.emailAddress}
                  error={Boolean(
                    formik.touched.emailAddress && formik.errors.emailAddress
                  )}
                />
                <Box mt={4}></Box>
                <div
                  className={`${styles.articleCTA} ${styles.articleCTACentered}`}
                >
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    style={{ textAlign: 'center' }}
                    disabled={formik.isSubmitting}
                  >
                    <span style={{ opacity: formik.isSubmitting ? 0 : 1 }}>
                      Download Book
                    </span>

                    {formik.isSubmitting ? (
                      <CircularProgress
                        size="small"
                        style={{
                          position: 'absolute',
                          left: '50%',
                          marginLeft: '-16px',
                          width: '32px',
                          height: '32px',
                        }}
                      />
                    ) : (
                      ''
                    )}
                  </Button>
                </div>
              </form>
            </Grid>
            <Grid item xs={12} md={4} order={{ sm: 1, md: 2 }}>
              <img
                className={styles.bookContainerBookImage}
                src={`https://admin.retirementby.design/assets/${book.cover}`}
              />
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* <BookCTA bookPage /> */}

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
            {book.Body.map((chapter: any, index: number) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <article>
                    <Link href={`/books/${book.slug}/chapter/${index + 1}`}>
                      <div
                        className={`${styles.imageContainer} ${styles.imageContainerSmall}`}
                      >
                        <div className={styles.imageContainerText}>
                          <p className={styles.imageContainerType}>
                            <ImportContactsIcon />
                            Chapter {index + 1}
                          </p>

                          <h3 className={`${styles.imageContainerTitle}`}>
                            {chapter.chapter_name}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </article>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export async function getServerSideProps(context: GetServerSideProps) {
  // Fetch data from external API
  //@ts-ignore
  const { name } = context.query;

  const book = await directus.items('books').readMany({
    filter: {
      slug: name,
    },
  });

  // Pass data to the page via props
  return {
    props: {
      //@ts-ignore
      book: book.data[0] || null,
      // podcastsCount: res.meta?.total_count,
    },
  };
}

export default Book;
