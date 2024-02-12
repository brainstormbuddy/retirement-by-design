import styles from './CTA.module.scss';
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import VideocamIcon from '@mui/icons-material/Videocam';
import TodayIcon from '@mui/icons-material/Today';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LockIcon from '@mui/icons-material/Lock';
import EventIcon from '@mui/icons-material/Event';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import axios from 'axios';

interface CTAProps {
  backgroundImage?: string;
  withImage?: boolean;
  sessionDate: string;
  workshopName: string;
  workshopSpeaker: string;
}

export default function CTA(props: CTAProps) {
  let imageStyling: any = {
    backgroundColor: '#dfdfdf',
  };

  if (props.backgroundImage) {
    //@ts-ignore
    imageStyling.backgroundImage = `url('${props.backgroundImage}')`;
    imageStyling.backgroundSize = 'cover';
    imageStyling.backgroundPosition = 'center';
  }

  const previousDummyDates = [
    dayjs(props.sessionDate.split('at')[0]).subtract(2, 'week'),
    dayjs(props.sessionDate.split('at')[0]).subtract(1, 'week'),
  ];

  // console.log(previousDummyDates);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phone: '',
      oneOnOne: false,
      honey: '',
      sessionDate: props.sessionDate,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(50).required('Enter your first name'),
      lastName: Yup.string().max(50).required('Enter your last name'),
      emailAddress: Yup.string()
        .email('Enter a valid email address')
        .required('Enter your email address'),
      phone: Yup.number()
        .test('len', 'Enter a valid 10-digit phone number', (val: any) =>
          val ? val.toString().length === 10 : false
        )
        .required('Enter your 10-digit phone number'),
      honey: Yup.string(),
      sessionDate: Yup.string().required(),
    }),
    onSubmit: (values) => {
      if (values.honey.length > 0) {
        return;
      }

      axios
        .post('/api/register', {
          ...values,
        })
        .then((res: any) => {
          console.log(res);
          console.log(res.data);

          //@ts-ignore
          if (res.data.success) {
            import('react-facebook-pixel')
              .then((x) => x.default)
              .then((ReactPixel) => {
                ReactPixel.track('CompleteRegistration', {
                  content_name: `${props.workshopName} ${props.sessionDate} - ${props.workshopSpeaker}`,
                });
              });

            //@ts-ignore
            window.location.href = res.data.url;
          } else {
            alert(
              'There was a problem registering for the webinar. Please contact us on 6138297874'
            );
          }
        })
        .catch((error) => {
          // console.log(error);
          alert(
            'There was a problem registering for the webinar. Please contact us on 6138297874'
          );
        });
    },
  });

  return (
    <Container maxWidth="xl" className={styles.CTAWithImageContainer}>
      <Grid container className={styles.CTAContainer}>
        {props.withImage && (
          <div className={styles.CTAImage} style={imageStyling}></div>
        )}

        <div
          className={`${styles.CTA} ${
            props.withImage ? styles.CTAWithImage : null
          }`}
        >
          <div className="content" id="registerNow">
            {props.sessionDate.split(',')[0] === 'May 31' ? (
              <>
                <h1>Protecting Your Estate</h1>
                <h2 className="subheading">
                  Join Certified Financial Planner, Fred Pratt, for a free
                  one-hour workshop, as he walks you through ways towards
                  protecting your estate.
                </h2>
              </>
            ) : props.sessionDate.split(',')[0] === 'May 10' ||
              props.sessionDate.split(',')[0] === 'June 14' ||
              props.sessionDate.split(',')[0] === 'June 21' ? (
              <>
                <h1>How Taxes Affect Your Retirement Plan</h1>
                <h2 className="subheading">
                  Join Certified Financial Planner, Shawn Bellefeuille, for a
                  free one-hour workshop, as he walks you through limiting tax
                  liabilities from your retirement plan.
                </h2>
              </>
            ) : (
              <>
                <h1>How Taxes Affect Your Retirement Plan</h1>
                <h2 className="subheading">
                  Join Certified Financial Planner, Shawn Bellefeuille, for a
                  free one-hour workshop, as he walks you through limiting tax
                  liabilities from your retirement plan.
                </h2>
              </>
            )}

            <div className={styles.articleInfo}>
              <div>
                <p>
                  <TodayIcon />{' '}
                  {props.sessionDate.split(',')[0] === 'February 23'
                    ? 'Wednesday'
                    : 'Tuesday'}
                  , {props.sessionDate.split(',')[0]}
                </p>
                <p>
                  <WatchLaterIcon /> 12PM
                </p>
              </div>
              <div>
                <p>
                  <VideocamIcon /> Live Virtual Workshop
                </p>
              </div>
            </div>

            <form
              className={styles.CTAForm}
              onSubmit={formik.handleSubmit}
              autoComplete="off"
            >
              <TextField
                placeholder="Honey"
                name="honey"
                style={{ display: 'none' }}
                margin="dense"
                color="secondary"
                onChange={formik.handleChange}
                value={formik.values.honey}
              />
              <Grid container>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6}>
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
                      // helperText={
                      //   formik.touched.firstName && formik.errors.firstName
                      //     ? formik.errors.firstName
                      //     : ' '
                      // }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      style={{
                        paddingLeft: '4px',
                      }}
                      variant="outlined"
                      placeholder="Last name"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonOutlineIcon />
                          </InputAdornment>
                        ),
                      }}
                      color="secondary"
                      name="lastName"
                      margin="dense"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                      error={Boolean(
                        formik.touched.lastName && formik.errors.lastName
                      )}
                    />
                  </Grid>
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
                    margin="dense"
                    color="secondary"
                    name="emailAddress"
                    onChange={formik.handleChange}
                    value={formik.values.emailAddress}
                    error={Boolean(
                      formik.touched.emailAddress && formik.errors.emailAddress
                    )}
                  />
                </Grid>

                <Grid item xs={12}>
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
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    select
                    variant="outlined"
                    placeholder="Session"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EventIcon />
                        </InputAdornment>
                      ),
                    }}
                    margin="dense"
                    color="secondary"
                    name="sessionDate"
                    onChange={(ev: any) => {
                      console.log('sessionDate', ev.target.value);

                      formik.setFieldValue('sessionDate', ev.target.value);
                    }}
                    value={formik.values.sessionDate}
                    error={Boolean(
                      formik.touched.sessionDate && formik.errors.sessionDate
                    )}
                    style={{ textAlign: 'left' }}
                  >
                    {previousDummyDates.map((dummyDate: any, index: any) => (
                      <MenuItem
                        key={index}
                        value={`${dayjs(dummyDate).format(
                          'dddd, MMM D, YYYY [at] 12 [PM]'
                        )}`}
                        disabled
                      >
                        {dayjs(dummyDate).format(
                          'dddd, MMM D, YYYY  [at] 12 [PM]'
                        )}
                        <span
                          style={{
                            color: '#2C3573',
                            marginLeft: '8px',
                          }}
                        >
                          Sold out
                        </span>
                      </MenuItem>
                    ))}

                    <MenuItem value={props.sessionDate}>
                      {props.sessionDate.split(',')[0] === 'February 23'
                        ? 'Wednesday'
                        : 'Tuesday'}
                      , {props.sessionDate}
                      <span
                        style={{
                          color: '#2C3573',
                          marginLeft: '8px',
                        }}
                      >
                        13 spots left
                      </span>
                    </MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    onChange={() => {
                      formik.setFieldValue('oneOnOne', !formik.values.oneOnOne);
                    }}
                    style={{
                      marginTop: '16px',
                      marginLeft: '4px',
                      textAlign: 'left',
                      fontFamily: 'Rubik, sans-serif',
                    }}
                    control={
                      <Checkbox
                        checked={formik.values.oneOnOne}
                        style={{ marginRight: '12px' }}
                      />
                    }
                    label="I am interested in a free, 30-minute no obligation
                          one-on-one with a financial advisor to discuss my
                          retirement."
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
                  disabled={formik.isSubmitting}
                  type="submit"
                  style={{ textAlign: 'center' }}
                >
                  <span style={{ opacity: formik.isSubmitting ? 0 : 1 }}>
                    Register now
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
