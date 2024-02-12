import React from 'react';
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
  TextField,
  InputAdornment,
  Typography,
  CircularProgress,
} from '@mui/material';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { motion, useAnimation } from 'framer-motion';
import { Snackbar } from '@material-ui/core';

import HeadsetIcon from '@mui/icons-material/Headset';
import { Assignment } from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FaxIcon from '@mui/icons-material/Fax';
import CommentIcon from '@mui/icons-material/Comment';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import Navigation from '../../components/Navigation/Navigation';
import CTA from '../../components/CTA/CTA';
import FAQ from '../../components/FAQ/FAQ';
import Footer from '../../components/Footer/Footer';

import ArticleProgress from '../../components/ArticleProgress/ArticleProgress';
import NextChapter from '../../components/NextChapter/NextChapter';

import directus from '../../modules/directus';

import styles from './member.module.scss';

export default function Contact(props: any) {
  const router = useRouter();
  const [messageSubmitSuccessOpen, setMessageSubmitSuccessOpen] =
    React.useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      emailAddress: '',
      message: '',
      phone: '',
      honey: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().max(50).required('Enter your first name'),
      emailAddress: Yup.string()
        .email('Enter a valid email address')
        .required('Enter your email address'),
      phone: Yup.number()
        .test('len', 'Enter a valid 10-digit phone number', (val: any) =>
          val ? val.toString().length === 10 : false
        )
        .required('Enter your 10-digit phone number'),
      message: Yup.string().required('Enter a message'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log('Submitted');

      if (values.honey.length > 0) {
        return;
      }

      console.log('Submitted');

      axios
        .post('/api/contact-form', {
          ...values,
        })
        .then((res: any) => {
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
    <>
      <Head>
        <title>Contact - Retirement by Design</title>

        <meta name="title" content={`Contact - Retirement by Design`} />

        <meta
          property="description"
          content="Together, we will make informed decisions about the products
                  and services best suited for your lifestyle. We want you to
                  understand our process and the services you are investing in."
        />

        <meta property="og:type" content="website" />

        <meta property="og:title" content={`Contact - Retirement by Design`} />
        <meta
          property="og:url"
          content={`https://retirementby.design/contact`}
        />

        <meta
          property="og:description"
          content="Together, we will make informed decisions about the products
                  and services best suited for your lifestyle. We want you to
                  understand our process and the services you are investing in."
        />
      </Head>

      <Navigation />

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={messageSubmitSuccessOpen}
        onClose={() => setMessageSubmitSuccessOpen(false)}
        message="We received your message and a professional advisor will be in touch."
        key={'top' + 'center'}
      />

      <div className={styles.contactContainer}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="start">
            <Grid item md={9} sm={12} xs={12}>
              <motion.h1 className="heading-hero">
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        ease: [0.46, 0.02, 0.38, 0.99],
                        duration: 0.7,
                      },
                    },
                    hidden: { opacity: 0, y: 100 },
                  }}
                >
                  Contact
                </motion.span>
              </motion.h1>

              <motion.h2 className={styles.subheading}>
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        ease: [0.46, 0.02, 0.38, 0.99],
                        duration: 0.7,
                      },
                    },
                    hidden: { opacity: 0, y: 100 },
                  }}
                >
                  Together, we will make informed decisions about the products
                  and services best suited for your lifestyle. We want you to
                  understand our process and the services you are investing in.
                </motion.span>
              </motion.h2>
            </Grid>
          </Grid>

          <Grid container spacing={8}>
            <Grid item xs={12} md={6} sm={6}>
              <form
                className={styles.contactForm}
                onSubmit={formik.handleSubmit}
                autoComplete="off"
              >
                <h1>Get in touch</h1>
                <h2 className="subheading">
                  Talk to us to find out how we can help you retire by design.
                </h2>

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
                  placeholder="Full name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                  style={{ marginTop: 0 }}
                  color="secondary"
                  name="fullName"
                  margin="dense"
                  onChange={formik.handleChange}
                  value={formik.values.fullName}
                  error={Boolean(
                    formik.touched.fullName && formik.errors.fullName
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

                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Mobile phone"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIphoneIcon />
                      </InputAdornment>
                    ),
                  }}
                  margin="dense"
                  color="secondary"
                  name="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  error={Boolean(formik.touched.phone && formik.errors.phone)}
                />

                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Message"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CommentIcon />
                      </InputAdornment>
                    ),
                  }}
                  margin="dense"
                  color="secondary"
                  name="message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  error={Boolean(
                    formik.touched.message && formik.errors.message
                  )}
                  multiline
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
                      Send Message
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
            <Grid item xs={12} md={6} sm={6}>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={6}>
                  <h1 className={styles.contactItem}>Address</h1>
                  <p className={styles.contactText}>
                    200 - 880 Lady Ellen Place <br /> Ottawa, Ontario K1Z 5L9
                    Canada
                  </p>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <h1 className={styles.contactItem}>Phone</h1>
                  <p className={styles.contactText}>
                    <PhoneIcon />
                    613-829-7874
                  </p>
                  <p className={styles.contactText}>
                    <FaxIcon />
                    613-721-9781
                  </p>
                </Grid>
              </Grid>

              <iframe
                src="//www.advisorwebsite.com/sites/all/includes/map.php?info=%3Cspan+style%3D%27font-family%3AArial%3B+font-size%3A11px%3B%27%3E%3Ch3+style%3D%27+margin-top%3A0%3B+margin-bottom%3A+5px%3B%27%3EAddress%3A%3C%2Fh3%3E200+-+880+Lady+Ellen+Place%3Cbr%3EOttawa%2C+Ontario+K1Z+5L9%3C%2Fspan%3E&amp;address=200+-+880+Lady+Ellen+Place%2C+Ottawa%2C+Ontario"
                frameBorder="0"
                // cellS="0"
                width="460"
                height="400"
                scrolling="no"
                className={styles.mapFrame}
              ></iframe>
            </Grid>
          </Grid>

          <Box mt={5}></Box>

          <Divider />

          <Box mt={7}></Box>

          <Grid container justifyContent="center">
            <Grid item xs={12} md={7} sm={7}>
              <div
                className={styles.homeHeroCTA}
                onClick={() =>
                  router.push(
                    'https://outlook.office365.com/owa/calendar/GabriellaVasconcelos@sfl.ca/bookings/s/o03GBuIolkW2dQbBm9N1fw2'
                  )
                }
              >
                <p
                  className={`${styles.browseLink} ${styles.browseLinkWithArrow} ${styles.authorBioLink} ${styles.browseLinkGrey}`}
                  onClick={() => {}}
                >
                  <span>Start planning</span> <ArrowRightAltIcon />
                </p>

                <div>
                  <img
                    src="/images/Shawn Headshot.png"
                    alt="Shawn Bellefeuille Headshot"
                    className="image-rounded"
                  />

                  <img
                    src="/images/Amber Headshot.png"
                    alt="Amber Headshot"
                    className="image-rounded"
                  />

                  <p>
                    {`You'll be talking with our professional advisors with
                    expertise in retirement.`}
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="mt-4"></div>

      <Footer />
    </>
  );
}
