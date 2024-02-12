import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Link from 'next/link';

import styles from './NextChapter.module.scss';

export default function NextChapter(props: any) {
  return (
    <div>
      <div className="content">
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <h1 className="mb-0">Next chapter</h1>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={styles.workshopsContainer}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <a
                href={`/books/the-pursuit-of-retirement/chapter/${props.chapterNumber}`}
              >
                <div
                  className={`${styles.imageContainer} ${styles.imageContainerSmall}`}
                >
                  <img src="https://via.placeholder.com/400x245/?text=." />

                  <div className={styles.imageContainerText}>
                    <p className={styles.imageContainerType}>
                      <ImportContactsIcon />
                      Chapter {props.chapterNumber}
                    </p>

                    <h3 className={`${styles.imageContainerTitle}`}>
                      {props.chapterName}
                    </h3>
                  </div>
                </div>
              </a>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
