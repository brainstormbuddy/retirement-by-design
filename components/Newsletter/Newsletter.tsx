import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import LockIcon from '@mui/icons-material/Lock';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import styles from './Newsletter.module.scss';
import { CircularProgress } from '@material-ui/core';

export default function Newsletter() {
  const [messageSubmitSuccessOpen, setMessageSubmitSuccessOpen] =
    React.useState(false);
  const [messageSubmitErrorOpen, setMessageSubmitErrorOpen] =
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
        .post('/api/newsletter-signup', {
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
          setMessageSubmitErrorOpen(true);
        });
    },
  });

  return (
    <Container>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={messageSubmitSuccessOpen}
        onClose={() => setMessageSubmitSuccessOpen(false)}
        message="You've been signed up for the newsletter."
        key={'top' + 'center'}
      />

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={messageSubmitErrorOpen}
        onClose={() => setMessageSubmitErrorOpen(false)}
        message="There was a problem signing up for the newsletter."
        key={'top' + 'center'}
      />

      <Grid container justifyContent="center">
        <div className={`${styles.CTA} ${styles.CTANewsletter}`}>
          <div className="content">
            <h1>Join our newsletter</h1>
            <h2 className="subheading">
              Get exclusive articles and engaging stories in your inbox,
              designed to help you plan for retirement.
            </h2>

            <form onSubmit={formik.handleSubmit} className={styles.CTAForm}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
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
                    margin="none"
                    name="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    error={Boolean(
                      formik.touched.firstName && formik.errors.firstName
                    )}
                    color="secondary"
                  />
                </Grid>
                <Grid item xs={12}>
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
                    margin="none"
                    color="secondary"
                    name="emailAddress"
                    onChange={formik.handleChange}
                    value={formik.values.emailAddress}
                    error={Boolean(
                      formik.touched.emailAddress && formik.errors.emailAddress
                    )}
                  />
                </Grid>
              </Grid>
              <Box mt={4}></Box>
              <div
                className={`${styles.articleCTA} ${styles.articleCTACentered}`}
              >
                <Button
                  color="primary"
                  className="btnWide"
                  variant="contained"
                  type="submit"
                  style={{ textAlign: 'center' }}
                  disabled={formik.isSubmitting}
                >
                  <span style={{ opacity: formik.isSubmitting ? 0 : 1 }}>
                    Subscribe
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

              <p className={styles.CTASecure}>
                <LockIcon />
                Your information is secure and will not be shared with third
                parties.
              </p>
            </form>
          </div>
        </div>
      </Grid>
    </Container>
  );
}
