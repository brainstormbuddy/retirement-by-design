import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  TextField,
} from '@mui/material';
import { Assignment } from '@mui/icons-material';
import { Headset as HeadsetIcon } from '@mui/icons-material';

import Link from 'next/link';
import styles from './MobileMenu.module.scss';

export default function SearchMenu(props: any) {
  return (
    <div
      className={`${styles.mobileMenuContainer} searchMenuContainer ${
        props.open ? 'searchMenuOpen' : ''
      }`}
    >
      <p className={styles.mobileMenuSectionHeading}>Search</p>

      <div className={styles.mobileMenuSectionLinks}>
        <TextField fullWidth variant="outlined" />
      </div>

      <div className="mt-4"></div>

      <p className={styles.mobileMenuSectionHeading}>Suggested</p>

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
      </div>
    </div>
  );
}
