import Head from 'next/head';
import Link from 'next/link';

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Hidden,
  Typography,
} from '@mui/material';

import VideocamIcon from '@mui/icons-material/Videocam';
import ForumIcon from '@mui/icons-material/Forum';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import TodayIcon from '@mui/icons-material/Today';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import Navigation from '../../../components/Navigation/Navigation';
import CTA from '../../../components/CTA/CTA';
import FAQ from '../../../components/FAQ/FAQ';
import Footer from '../../../components/Footer/Footer';

import styles from '../workshop.module.scss';
import directus from '../../../modules/directus';
import { GetServerSideProps } from 'next';

export default function Workshop(props: any) {
  return (
    <>
      <Head>
        <title>Protecting Your Estate In Canada - Retirement by Design</title>
        <meta
          name="description"
          content="Join Certified Financial Planner, Fred Pratt, for a
                    free one-hour workshop, as he walks you through ways towards protecting your estate."
        />

        <meta
          property="og:title"
          content={`Protecting Your Estate In Canada - Retirement by Design`}
        />
        <meta
          property="og:description"
          content="Join Certified Financial Planner, Fred Pratt, for a
                    free one-hour workshop, as he walks you through ways towards protecting your estate."
        />
        <meta
          property="og:description"
          content="Join Certified Financial Planner, Fred Pratt, for a
                    free one-hour workshop, as he walks you through ways towards protecting your estate."
        />
        <meta property="og:image" content="/images/home-asset-allocation.jpg" />
      </Head>
      <Navigation />

      <div
        className={`${styles.articleHeaderContainer} ${styles.estateContainer}`}
      >
        <div className="content text-center">
          <Container>
            <Grid container justifyContent="center">
              <Grid item xs={12} sm={8} md={8}>
                <article className={styles.articleHeader}>
                  <h1>Protecting Your Estate</h1>

                  <h2 className="subheading">
                    Join Certified Financial Planner, Fred Pratt, for a free
                    one-hour workshop, as he walks you through ways towards
                    protecting your estate.
                  </h2>

                  <div className={styles.articleInfo}>
                    <div>
                      <p>
                        <TodayIcon /> Tuesday, March 1, 2022
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

                  <div className="text-center">
                    <div
                      className={`${styles.articleCTA} ${styles.articleCTACentered}`}
                    >
                      <Button
                        color="primary"
                        variant="contained"
                        href="#registerNow"
                      >
                        Register now
                      </Button>

                      {/* <div className={styles.articleCTAPlayNow}>
                        <PlayCircleOutlineIcon /> <span>Watch video</span>
                      </div> */}
                    </div>
                  </div>
                </article>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className="articleHeaderContainerOverlay"></div>
      </div>

      <Box
        style={{ margin: '56px 0 32px' }}
        className={`${styles.workshopVideo} ${styles.workshopVideoLandscape}`}
      >
        {/* <video
          autoPlay={false}
          style={{ marginBottom: '8px' }}
          controls
          poster={'/images/shawn-video-thumb.jpg'}
        >
          <source src="https://fb.watch/9cjCAYI2Nf" />
        </video> */}
        {props.event.hasOwnProperty('video_link') &&
          props.event?.video_link !== '' && (
            <iframe
              // src={`https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FRetirementDesign%2Fvideos%2F4311118292333172%2F&show_text=false&width=267&t=0`}
              src={props.event.video_link}
              scrolling="no"
              allowFullScreen={true}
            ></iframe>
          )}
      </Box>

      <div className={styles.workshopBenefits}>
        <div className="content">
          <Container>
            <Grid container justifyContent="center">
              <Grid item xs={12} sm={10} md={10}>
                <h1 className="text-center">
                  Takeaway the process behind what it means to actually retire
                  by design.
                </h1>
              </Grid>
            </Grid>
          </Container>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} sm={6} justifyContent="center">
                <div className={styles.wokrshopBenefitItem}>
                  <OndemandVideoIcon fontSize="large" color="primary" />

                  <div>
                    <p className={styles.workShopBenefitHeading} color="info">
                      One-hour live work shop
                    </p>

                    <p>
                      In this free and interactive, one-hour live workshop, Fred
                      will walk you through ways towards protecting your estate.
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} sm={6} justifyContent="center">
                <div className={styles.wokrshopBenefitItem}>
                  <ImportContactsIcon fontSize="large" color="primary" />

                  <div>
                    <p className={styles.workShopBenefitHeading} color="info">
                      Free paperback book
                    </p>

                    <p>
                      Get a free copy of the Pursuit of Retirement. Covering
                      everything from retirement income and assets, taxes in
                      retirement, and estate planning.
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} sm={6} justifyContent="center">
                <div className={styles.wokrshopBenefitItem}>
                  <ForumIcon fontSize="large" color="primary" />

                  <div>
                    <p className={styles.workShopBenefitHeading} color="info">
                      One-on-one strategy meeting
                    </p>

                    <p>
                      After the workshop, you can choose to schedule a free,
                      no-obligation one-on-one financial strategy meeting to
                      further discuss your retirement goals.
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>

            <div className="text-center">
              <div
                className={`${styles.articleCTA} ${styles.articleCTACentered}`}
              >
                <Button color="primary" variant="contained" href="#registerNow">
                  Register now
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div className={styles.checklistSection}>
        <div className="content text-center">
          <Container>
            <Grid container justifyContent="center">
              <Grid item xs={12} sm={10} md={8}>
                <h1>
                  {`It's time to talk about death and taxes. They're both inevitable, but affect your estate.`}
                </h1>
                <h2 className="subheading">
                  {`In the next 30 years, there will be more than one trillion dollars that will exchange hands from one generation to another. This will include investments, real estate, and business.`}
                </h2>
              </Grid>
            </Grid>
          </Container>
        </div>

        <Container>
          <Grid container>
            <Grid item xs={12}>
              <div className={styles.checklistSectionContainer}>
                <img
                  className={styles.checklistSectionImage}
                  src="/images/home-retirement-planning.jpg"
                  alt=""
                />

                <div
                  className={`${styles.checklistSectionImageDesktop} ${styles.estateImage}`}
                ></div>

                <div className={styles.checklistSectionInner}>
                  <div className="content">
                    <p className={styles.checklistSectionInnerTitle}>
                      1. We all die and pay taxes
                    </p>
                    <p className={styles.checklistSectionInnerDescription}>
                      {`Estate planning is the single most overlooked discussion
                      in any retirement plan and yet, it's the most overlooked.`}
                    </p>

                    <p className={styles.checklistSectionInnerTitle}>
                      2. {`Friends don't let friends die intestate`}
                    </p>
                    <p className={styles.checklistSectionInnerDescription}>
                      {`You have worked hard to build wealth your entire life, and
                      you likely don't want to leave it all to the government.`}
                    </p>

                    <p className={styles.checklistSectionInnerTitle}>
                      3. Take control of your estate
                    </p>
                    <p className={styles.checklistSectionInnerDescription}>
                      Avoid taxes and probate fees. A proper retirement plan can
                      ensure you take control of your estate and leave it in
                      good hands.
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={styles.checklistSectionTwo}>
        <div className="content text-center">
          <Container>
            <Grid container>
              <Grid item xs={12}>
                <div className={styles.checklistSectionTwoContainer}>
                  <div className={styles.checklistSectionTwoText}>
                    <h1>Estate planning strategies</h1>
                    <h2 className="subheading">
                      {`Do you know what estate planning strategies you can apply to your retirement plan and what obligations you may have? Fred highlights a few that could be beneficial to you.`}
                    </h2>

                    <Hidden mdDown>
                      <div className="text-center">
                        <div
                          className={styles.articleCTA}
                          style={{ marginTop: '64px' }}
                        >
                          <Button
                            color="primary"
                            className="btnWide"
                            variant="contained"
                            href="#registerNow"
                          >
                            Register now
                          </Button>
                        </div>
                      </div>
                    </Hidden>
                  </div>

                  <ul className={styles.checkListActual}>
                    <li>
                      <CheckCircleIcon /> Divorce settlements
                    </li>
                    <li>
                      <CheckCircleIcon /> Net family property
                    </li>
                    <li>
                      <CheckCircleIcon /> Children and grandchildren
                    </li>
                    <li>
                      <CheckCircleIcon /> Beneficiary designations
                    </li>
                    <li>
                      <CheckCircleIcon /> Charitable giving
                    </li>
                  </ul>

                  <Hidden mdUp>
                    <div className="text-center">
                      <div
                        className={`${styles.articleCTA} ${styles.articleCTACentered}`}
                      >
                        <Button
                          color="primary"
                          className="btnWide"
                          variant="contained"
                          href="#registerNow"
                        >
                          Register now
                        </Button>
                      </div>
                    </div>
                  </Hidden>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>

      <div className={styles.speakerSection}>
        <div className="content text-center">
          <Container>
            <Grid container justifyContent="center">
              <Grid item xs={12} sm={6} md={8}>
                <h1>Meet your speaker</h1>
              </Grid>
            </Grid>
          </Container>
        </div>

        <Container className={styles.speakerSectionContent}>
          <Grid
            container
            spacing={{ xs: 0, md: 12 }}
            alignItems={{ md: 'center' }}
          >
            <Grid item xs={12} sm={6} md={6}>
              <img
                src="https://admin.retirementby.design/assets/ecb3a139-de7d-4e7d-aa65-5266399b320f"
                style={{
                  maxWidth: '100%',
                  width: '100%',
                  borderRadius: '4px',
                }}
                alt=""
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <div className="content">
                <h1>
                  {props.speaker.first_name} {props.speaker.last_name}
                </h1>

                <p className={styles.speakerSectionCredentials}>
                  {props.speaker.title}
                </p>

                <div className={styles.authorInfo}>
                  <p>{props.speaker.description}</p>
                </div>

                <Link href={`/about/${props.speaker.slug}`}>
                  <p
                    className={`${styles.browseLink} ${styles.browseLinkWithArrow}`}
                  >
                    <span>More about {props.speaker.first_name}</span>{' '}
                    <ArrowRightAltIcon />
                  </p>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <CTA
        workshopName="Protecting Your Estate In Canada - March 1, 2022"
        workshopSpeaker="Fred Pratt"
        withImage
        backgroundImage="/images/workshop-cta.png"
        sessionDate="March 1, 2022 at 12PM"
      />

      <FAQ topMargin />

      <Footer />
    </>
  );
}

export async function getServerSideProps(context: GetServerSideProps) {
  //@ts-ignore
  const { id } = context.query;

  // const res = await directus.items('workshops').readMany({
  //   filter: {
  //     slug: id,
  //   },
  //   fields: '*,workshop.*.',
  //   // filter: {
  //   //   date:
  //   // }
  // });

  const speaker: any = await directus
    .items('directus_users')
    .readOne('cb23c490-9e41-41ea-8dce-4a0735baf6f4');

  const events: any = await directus.items('events').readMany({
    filter: {
      date: { _eq: '2022-03-01' },
    },
    meta: 'total_count',
  });

  console.log('TESt');
  console.log(speaker);
  console.log(events);
  return {
    props: {
      // wotkshop: res.data,
      event: events.data[0],
      speaker,
    },
  };
}
