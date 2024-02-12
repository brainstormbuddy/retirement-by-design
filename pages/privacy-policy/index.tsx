import Head from 'next/head';

import { Box, Container, Divider, Grid } from '@mui/material';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

import styles from './about.module.scss';

export default function Podcast(props: any) {
  return (
    <>
      <Head>
        <title>About - Retirement by Design</title>
      </Head>
      <Navigation />

      <div
        className={`content text-center background-dark-grey ${styles.aboutHeader}`}
      >
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={10}>
              <div>
                <h1 className="mt-0">
                  We are financial advisors commited to lorem ipsum dolor sit
                  amet adipiscing elit consecteteur.
                </h1>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={`content mt-2 ${styles.aboutHeadingDescriptionContent}`}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={12} md={10}>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>

              <Divider />

              <div className={styles.aboutHeadingDescriptionArea}>
                <h2 className="serif">Lorem ipsum dolor</h2>
                <p>
                  Proin pharetra orci porttitor, rutrum neque nec, cursus leo.
                  Mauris fringilla nibh ut orci vehicula, in scelerisque turpis
                  ultricies. In ut leo sed orci condimentum sollicitudin.
                  Curabitur vel ultricies urna, in scelerisque diam. In volutpat
                  odio eget mattis congue. In sodales ac purus in auctor.
                </p>
              </div>

              <Divider />

              <div
                className={`${styles.aboutHeadingDescriptionArea} ${styles.aboutHeadingDescriptionAreaWithLink}`}
              >
                <h2 className="serif">Lorem ipsum dolor</h2>

                <div>
                  <p>
                    Proin pharetra orci porttitor, rutrum neque nec, cursus leo.
                    Mauris fringilla nibh ut orci vehicula, in scelerisque
                    turpis ultricies. In ut leo sed orci condimentum
                    sollicitudin. Curabitur vel ultricies urna, in scelerisque
                    diam. In volutpat odio eget mattis congue. In sodales ac
                    purus in auctor.
                  </p>

                  <a
                    className={`${styles.browseLink} ${styles.browseLinkWithArrow} ${styles.authorBioLink} mt-0`}
                    href="#"
                  >
                    <span>Learn more</span> <ArrowRightAltIcon />
                  </a>
                </div>
              </div>

              <Divider />

              <div className={styles.aboutHeadingDescriptionArea}>
                <h2 className="serif">Lorem ipsum dolor</h2>
                <p>
                  Proin pharetra orci porttitor, rutrum neque nec, cursus leo.
                  Mauris fringilla nibh ut orci vehicula, in scelerisque turpis
                  ultricies. In ut leo sed orci condimentum sollicitudin.
                  Curabitur vel ultricies urna, in scelerisque diam. In volutpat
                  odio eget mattis congue. In sodales ac purus in auctor.
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={`${styles.imageContainer} ${styles.aboutImageContainer}`}>
        <img src="https://via.placeholder.com/1440x779/?text=." />

        <div className={styles.imageContainerText}>
          <h1 className={`${styles.imageContainerTitle}`}>
            Founded by Shawn Bellefeuille, Retirement by Design was established
            in an effort to lorem ipsum dolor sit amet.
          </h1>
        </div>
      </div>

      <Container maxWidth="xl" className={styles.team}>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12} sm={12} md={11}>
            <div className="content">
              <h1 className="text-center">Our team</h1>
              <h2 className="subheading text-center">
                Leadership comes from all over. Here is the team at the helm of
                the ship.
              </h2>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={8} className={styles.teamContainer}>
          <Grid item xs={12} sm={6} md={4}>
            <img src="https://via.placeholder.com/367x367" />

            <div className="content text-center">
              <h2 className="serif">Shawn Bellefeuille</h2>
              <p>CFP, CHS, CLU, EPC</p>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <img src="https://via.placeholder.com/367x367" />

            <div className="content text-center">
              <h2 className="serif">Gabriella Vasconcelos</h2>
              <p>Executive Assistant</p>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <img src="https://via.placeholder.com/367x367" />

            <div className="content text-center">
              <h2 className="serif">Andrea Bellefeuille</h2>
              <p>Executive Assistant</p>
            </div>
          </Grid>
        </Grid>
      </Container>

      <div className={`content text-center mt-4 ${styles.interestedToWork}`}>
        <div className="mt-3"></div>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
              <h1>Interested in becoming a part of our team?</h1>

              <a
                className={`${styles.browseLink} ${styles.browseLinkCentered} ${styles.browseLinkWithArrow}  ${styles.authorBioLink} mt-0`}
                href="#"
              >
                <span>View open positions</span> <ArrowRightAltIcon />
              </a>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={styles.heartOfCanada}>
        <div className="mt-3"></div>
        <Container>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={8}>
              <div className="content text-center mt-4">
                <h1>Located in the heart of Canada’s capital.</h1>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <img
                src="https://via.placeholder.com/396x396"
                style={{ borderRadius: '4px', width: '100%', maxWidth: '100%' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <h2 className="subheading">
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras sapien purus, placerat ac lectus ac, fermentum
                    hendrerit odio. Quisque quis congue mi. Nunc lobortis risus
                    enim, et molestie ante interdum ac.
                  </p>
                  <p>
                    Morbi consectetur, diam elementum sagittis dictum, turpis
                    odio fermentum est, ut hendrerit purus dui non dui.
                    Pellentesque vitae auctor elit, sed luctus lorem.
                  </p>
                </div>
              </h2>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={12} md={12}>
            <Box width="100%" className={styles.backedBy}>
              <div className={`content p-4 ${styles.backedByText}`}>
                <div>
                  <h1>Backed by leading investors.</h1>

                  <h2 className="subheading">
                    Desjardins is a major player in the Canadian life and health
                    insurance industry. Across Canada, it ensures the financial
                    security of some 5 million Canadians.
                  </h2>

                  <h2 className="subheading">
                    Sed dapibus vitae erat et semper. Morbi tincidunt tristique
                    magna a fermentum. Maecenas erat odio, mollis id sem ac,
                    vestibulum auctor metus.
                  </h2>
                </div>
              </div>
              <div className={`text-center ${styles.backedByLogo}`}>
                <img src="/images/desjardins-vector-logo.svg" alt="" />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
