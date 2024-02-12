import {
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Forum from '@mui/icons-material/Forum';

import styles from './Comments.module.scss';

export default function Comments() {
  return (
    <div className={`${styles.commentContainer} content`}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <p className="mt-0">
              <a
                className={`${styles.browseLink} ${styles.browseLinkCentered} ${styles.commentsLink}`}
                href="#"
              >
                <Forum style={{ marginRight: '16px' }} />
                <span>View Comments</span>
              </a>
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
