import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';

import VideocamIcon from '@mui/icons-material/Videocam';
import TodayIcon from '@mui/icons-material/Today';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LockIcon from '@mui/icons-material/Lock';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import styles from './BookCTA.module.scss';

export default function BookCTA(props: any) {
  return (
    <Container>
      <Grid container justifyContent="center">
        <div
          className={`${styles.CTA} ${styles.CTANewsletter} ${
            props.bookPage ? styles.marginTopSmall : ''
          }`}
        >
          <div className="content">
            <img
              src="https://via.placeholder.com/138x195/ccc?text=book"
              alt="Retirement By Design Book"
              style={{ marginBottom: '16px' }}
            />

            {props.bookPage ? (
              <>
                <h1>The Pursuit of Retirement</h1>
                <h2 className="subheading">
                  Covering everything from retirement income and assets, taxes
                  in retirement, and estate planning.
                </h2>
              </>
            ) : (
              <>
                <h1>What does it mean to retire by design?</h1>
                <h2 className="subheading">
                  Download a free digital copy of the Pursuit of Retirement.
                  Covering everything from retirement income and assets, taxes
                  in retirement, and estate planning.
                </h2>
              </>
            )}

            <form className={styles.CTAForm}>
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
                margin="dense"
                color="secondary"
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
              />
              <Box mt={4}></Box>
              <div
                className={`${styles.articleCTA} ${styles.articleCTACentered}`}
              >
                <Button color="primary" className="btnWide" variant="contained">
                  Download Book
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
