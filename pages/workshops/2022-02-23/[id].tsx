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
        <title>
          How Taxes Affect Your Retirement Plan - Retirement by Design
        </title>
        <meta
          name="description"
          content="Join Certified Financial Planner, Amber Lundin, for a
                    free one-hour workshop, as he walks you through limiting tax
                    liabilities from your retirement plan"
        />

        <meta
          property="og:title"
          content={`How Taxes Affect Your Retirement Plan - Retirement by Design`}
        />
        <meta
          property="og:description"
          content="Join Certified Financial Planner, Amber Lundin, for a
                    free one-hour workshop, as he walks you through limiting tax
                    liabilities from your retirement plan"
        />
        <meta
          property="og:description"
          content="Join Certified Financial Planner, Amber Lundin, for a
                    free one-hour workshop, as he walks you through limiting tax
                    liabilities from your retirement plan"
        />
        <meta
          property="og:image"
          content="https://retirementby.design/images/workshop-header-shawn.jpg"
        />
      </Head>
      <Navigation />

      <div className={styles.articleHeaderContainer}>
        <div className="content text-center">
          <Container>
            <Grid container justifyContent="center">
              <Grid item xs={12} sm={8} md={8}>
                <article className={styles.articleHeader}>
                  <h1>
                    How Taxes Affect <br /> Your Retirement Plan
                  </h1>
                  <p className={styles.articleHeaderWorkshopType}>
                    Federal Public Service Edition
                  </p>
                  <h2 className="subheading">
                    Join Certified Financial Planner, Amber Lundin, for a free
                    one-hour workshop, as he walks you through limiting tax
                    liabilities from your retirement plan.
                  </h2>

                  <div className={styles.articleInfo}>
                    <div>
                      <p>
                        <TodayIcon /> Wednesday, February 23
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
                      One-hour live workshop
                    </p>

                    <p>
                      In this free and interactive, one-hour live workshop,
                      Amber will walk you through how to limit your tax
                      liability from your savings and retirement plan.
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
                  {`It's time to talk about the elephant in the room. Let's talk
                  retirement.`}
                </h1>
                <h2 className="subheading">
                  {`The largest generation – the baby boomers - is set to retire
                  in the next 15 years. In fact, it’s the largest group to ever
                  retire in Canada’s history! And yet, the vast majority have
                  not planned for what comes after age 65.`}
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
                  src="/images/workshop-checklist.png"
                  alt=""
                />

                <div className={styles.checklistSectionImageDesktop}></div>

                <div className={styles.checklistSectionInner}>
                  <div className="content">
                    <p className={styles.checklistSectionInnerTitle}>
                      1. Life expectancy was 64 in 1941
                    </p>
                    <p className={styles.checklistSectionInnerDescription}>
                      Old Age Security pensions were only payable at age 65. So,
                      the government expected you to die before you could even
                      draw a single payment for your retirement.
                    </p>

                    <p className={styles.checklistSectionInnerTitle}>
                      2. Understand your tax liabilities
                    </p>
                    <p className={styles.checklistSectionInnerDescription}>
                      Consumer tax index has increased well over 2,200% since
                      1961, far outpacing the cost of living like food, clothes,
                      and even the average income. The average Canadian only
                      takes home less than half of what they earn.
                    </p>

                    <p className={styles.checklistSectionInnerTitle}>
                      3. Retirement priorities
                    </p>
                    <p className={styles.checklistSectionInnerDescription}>
                      It all starts with a written plan, but do you know which
                      strategies are the best to retire by design? Almost half
                      of Canadians outlive their retirement and continue working
                      beyond age 66.
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
                    <h1>Tax planning strategies</h1>
                    <h2 className="subheading">
                      {`Do you know what tax strategies you can apply to your
                      retirement plan? Though you can't apply them all, Amber
                      highlights a few that could be beneficial to you.`}
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
                      <CheckCircleIcon /> Minimize dividends
                    </li>
                    <li>
                      <CheckCircleIcon /> Severance payment spread
                    </li>
                    <li>
                      <CheckCircleIcon /> Optimize TFSAs
                    </li>
                    <li>
                      <CheckCircleIcon /> Corporate tax funds
                    </li>
                    <li>
                      <CheckCircleIcon /> Pension incoming splitting
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
                src="https://admin.retirementby.design/assets/7b41f4a0-c4ba-4db3-8d4d-9ab13dd05e8e.jpg"
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
        withImage
        backgroundImage="/images/workshop-cta.png"
        sessionDate="February 23, 2022 at 12PM"
        workshopName="How Taxes Affect Your Retirement Plan - February 23, 2022"
        workshopSpeaker="Amber Lundin"
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
    .readOne('7ace6339-70ce-4a1c-a45d-e69fe9edbf6b');

  const events: any = await directus.items('events').readMany({
    filter: {
      date: { _eq: '2022-02-23' },
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
