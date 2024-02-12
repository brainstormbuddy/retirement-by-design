import { Container, Divider, Grid } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import styles from './AuthorBio.module.scss';

interface AuthorProps {
  firstName: string;
  lastName: string;
  description: string;
  profileLink?: string;
  profileImage: string;
}

export default function AuthorBio(props: AuthorProps) {
  return (
    <div className={`${styles.authorBioContainer} content`}>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={12} md={6} justifyContent="center">
            <Divider />
            <img src={props.profileImage} className={styles.authorImage} />

            <h3 className={styles.authorName}>
              About {props.firstName} {props.lastName}
            </h3>
            <p className={styles.authorDescription}>{props.description}</p>

            {props.profileLink && (
              <p>
                <a
                  className={`${styles.browseLink} ${styles.browseLinkCentered} ${styles.browseLinkWithArrow} ${styles.authorBioLink}`}
                  href={props.profileLink}
                >
                  <span>More about {props.firstName}</span>{' '}
                  <ArrowRightAltIcon />
                </a>
              </p>
            )}

            <Divider />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
