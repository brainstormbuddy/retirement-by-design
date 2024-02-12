import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import TodayIcon from '@mui/icons-material/Today';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Navigation from '../../components/Navigation/Navigation';
import FAQ from '../../components/FAQ/FAQ';
import Footer from '../../components/Footer/Footer';

import styles from './workshops.module.scss';
import directus from '../../modules/directus';
import dayjs from 'dayjs';

export default function Workshops(props: any) {
  const handleBrowseUpcomingWorkshopScroll = () => {
    if (document) {
      window.scrollTo({
        //@ts-ignore
        top: document.getElementById('workshopsContainer').offsetTop - 120,
        left: 0,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <Head>
        <title>Workshops - Retirement by Design</title>

        <meta name="title" content={`Workshops - Retirement by Design`} />

        <meta
          name="description"
          content="Learn how to plan your retirement alongside industry leaders."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content={`Workshops - Retirement by Design`}
        />
        <meta
          property="og:url"
          content={`https://retirementby.design/workshops`}
        />

        <meta
          property="og:description"
          content="Learn how to plan your retirement alongside industry leaders."
        />

        <meta
          property="og:image"
          content="https://retirementby.design/images/workshop-header-shawn.jpg"
        />
      </Head>

      <Navigation />

      <div className="content">
        <Container>
          <Grid
            container
            spacing={4}
            justifyContent="space-between"
            className={styles.upcomingWorkshopContainer}
          >
            <Grid item xs={12} md={6}>
              <article className={styles.upcomingWorkshop}>
                <h1>
                  Learn how to plan your retirement alongside industry leaders.
                </h1>
                <h2 className="subheading">
                  {`From financial products and investments, to taxes and estates,
                  you'll get answers to the hard-hitting questions. Join
                  certified financial advisor Shawn Bellefeuille as he lets you
                  inside his discussions on the many facets of how to plan,
                  invest, and save for your retirement goals. You'll come away
                  from every workshop with something of value that you can apply
                  to your retirement plan.`}
                </h2>

                <Typography
                  color="secondary"
                  className={styles.browseLink}
                  onClick={handleBrowseUpcomingWorkshopScroll}
                >
                  <span>Browse upcoming workshops</span> <ArrowCircleDownIcon />
                </Typography>
              </article>
            </Grid>

            <Grid item xs={12} md={5}>
              <img
                className={`${styles.imgFluid} ${styles.browseWorkshopsImage}`}
                src={'/images/workshop-header-shawn.jpg'}
              />
            </Grid>
          </Grid>
        </Container>
      </div>

      <Box style={{ margin: '56px 0 32px' }}></Box>

      <div className="content">
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={12} md={12} justifyContent="center">
              <h1 style={{ textAlign: 'center' }}>Upcoming workshops</h1>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Box
                className={styles.linkFilters}
                justifyContent="center"
                display="flex"
                width="100%"
              >
                <a className={`active ${styles.active} ${styles.browseLink}`}>
                  <span>All</span>
                </a>
                <a className={`${styles.browseLink}`}>
                  <span>Retirement planning</span>
                </a>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div id="workshopsContainer" className={styles.workshopsContainer}>
        <article className={styles.singleWorkshop}>
          <Container>
            {/* <Grid container spacing={3} alignItems={{ md: 'center' }}>
              <Grid item xs={12} md={6}>
                <img
                  src="/images/home-asset-allocation.jpg"
                  className={styles.singleWorkshopImage}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <div className="content">
                  <p className={styles.articleTime}>
                    <TodayIcon style={{ marginRight: '8px' }} />
                    Tuesday, May 31, 2022 at 12PM
                  </p>

                  <h3 className={styles.articleTitle}>
                    Protecting Your Estate In Canada
                  </h3>

                  <p className={styles.articleSubtitle}>
                    Join Certified Financial Planner, Fred Pratt, for a free
                    one-hour workshop, as he walks you through protecting your
                    estate in Canada.
                  </p>

                  <div className={styles.articleCTA}>
                    <Button
                      className={styles.singleWorkshopRegisterNow}
                      color="primary"
                      href="/workshops/2022-05-31/protecting-your-estate-in-canada#registerNow"
                      variant="contained"
                    >
                      Register now
                    </Button>
                    <Link href="/workshops/2022-05-31/protecting-your-estate-in-canada">
                      <a
                        className={`${styles.browseLink} ${styles.browseLinkWithArrow}`}
                      >
                        <span>Learn more</span> <ArrowRightAltIcon />
                      </a>
                    </Link>
                  </div>
                </div>
              </Grid>
            </Grid>

            <div className={`${styles.dividerContainer}`}>
              <Box style={{ padding: '40px 0' }}>
                <Divider />
              </Box>
            </div> */}

            {/* <Grid container spacing={3} alignItems={{ md: 'center' }}>
              <Grid item xs={12} md={6}>
                <img
                  src="/images/home-retirement-planning.jpg"
                  className={styles.singleWorkshopImage}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <div className="content">
                  <p className={styles.articleTime}>
                    <TodayIcon style={{ marginRight: '8px' }} />
                    Tuesday, June 21, 2022 at 12PM
                  </p>

                  <h3 className={styles.articleTitle}>
                    How Taxes Affect Your Retirement Plan
                  </h3>

                  <p className={styles.articleSubtitle}>
                    Join Certified Financial Planner, Shawn Bellefeuille, for a
                    free one-hour workshop, as he walks you through limiting tax
                    liabilities from your retirement plan.
                  </p>

                  <div className={styles.articleCTA}>
                    <Button
                      className={styles.singleWorkshopRegisterNow}
                      color="primary"
                      href="/workshops/2022-06-21/how-taxes-affect-your-retirement-plan#registerNow"
                      variant="contained"
                    >
                      Register now
                    </Button>
                    <Link href="/workshops/2022-06-21/how-taxes-affect-your-retirement-plan">
                      <a
                        className={`${styles.browseLink} ${styles.browseLinkWithArrow}`}
                      >
                        <span>Learn more</span> <ArrowRightAltIcon />
                      </a>
                    </Link>
                  </div>
                </div>
              </Grid>
            </Grid>

            <div className={`${styles.dividerContainer}`}>
              <Box style={{ padding: '40px 0' }}>
                <Divider />
              </Box>
            </div> */}

            {/* <Grid container spacing={3} alignItems={{ md: 'center' }}>
              <Grid item xs={12} md={6}>
                <img
                  src="/images/home-retirement-planning.jpg"
                  className={styles.singleWorkshopImage}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <div className="content">
                  <p className={styles.articleTime}>
                    <TodayIcon style={{ marginRight: '8px' }} />
                    Tuesday, July 19, 2022 at 12PM
                  </p>

                  <h3 className={styles.articleTitle}>
                    How Taxes Affect Your Retirement Plan
                  </h3>

                  <p className={styles.articleSubtitle}>
                    Join Certified Financial Planner, Shawn Bellefeuille, for a
                    free one-hour workshop, as he walks you through limiting tax
                    liabilities from your retirement plan.
                  </p>

                  <div className={styles.articleCTA}>
                    <Button
                      className={styles.singleWorkshopRegisterNow}
                      color="primary"
                      href="/workshops/2022-07-19/how-taxes-affect-your-retirement-plan#registerNow"
                      variant="contained"
                    >
                      Register now
                    </Button>
                    <Link href="/workshops/2022-07-19/how-taxes-affect-your-retirement-plan">
                      <a
                        className={`${styles.browseLink} ${styles.browseLinkWithArrow}`}
                      >
                        <span>Learn more</span> <ArrowRightAltIcon />
                      </a>
                    </Link>
                  </div>
                </div>
              </Grid>
            </Grid>

            <div className={`${styles.dividerContainer}`}>
              <Box style={{ padding: '40px 0' }}>
                <Divider />
              </Box>
            </div> */}

            <Grid container spacing={3} alignItems={{ md: 'center' }}>
              <Grid item xs={12} md={6}>
                <img
                  src="/images/home-retirement-planning.jpg"
                  className={styles.singleWorkshopImage}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <div className="content">
                  <p className={styles.articleTime}>
                    <TodayIcon style={{ marginRight: '8px' }} />
                    Tuesday, August 23, 2022 at 12PM
                  </p>

                  <h3 className={styles.articleTitle}>
                    How Taxes Affect Your Retirement Plan
                  </h3>

                  <p className={styles.articleSubtitle}>
                    Join Certified Financial Planner, Shawn Bellefeuille, for a
                    free one-hour workshop, as he walks you through limiting tax
                    liabilities from your retirement plan.
                  </p>

                  <div className={styles.articleCTA}>
                    <Button
                      className={styles.singleWorkshopRegisterNow}
                      color="primary"
                      href="/workshops/2022-08-23/how-taxes-affect-your-retirement-plan#registerNow"
                      variant="contained"
                    >
                      Register now
                    </Button>
                    <Link href="/workshops/2022-08-23/how-taxes-affect-your-retirement-plan">
                      <a
                        className={`${styles.browseLink} ${styles.browseLinkWithArrow}`}
                      >
                        <span>Learn more</span> <ArrowRightAltIcon />
                      </a>
                    </Link>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </article>
      </div>

      <Box mt={4}></Box>

      <FAQ />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const todaysDateTime = dayjs().add(30, 'm').format('YYYY-MM-DDTHH:mm:s');
  // const todaysHour = dayjs().add(30, 'm').format('HH:mm:s');
  console.log(todaysDateTime);

  const workshops: any = await directus.items('workshops').readMany({
    fields: '*',
    filter: {
      status: 'Published',
    },
  });

  const events: any = await directus.items('events').readMany({
    filter: {
      start_datetime: {
        _gte: todaysDateTime,
      },
      // time: {
      //   _gte: todaysHour,
      // },
    },
    //@ts-ignore
    // sort: ['date', 'time'],
    fields: '*,workshop.*',
  });

  let workshopWithNoEventsScheduled: any = [];

  if (workshops?.data?.length > 0 && events?.data?.length > 0) {
    workshops.data.forEach((workshop: any) => {
      console.log('Going');
      if (
        events.data?.findIndex(
          (event: any) => event.workshop.id == workshop.id
        ) === -1
      ) {
        workshopWithNoEventsScheduled.push(workshop);
      }
    });
  }

  console.log(events);
  console.log(workshops);
  console.log('NEXT');
  console.log(workshopWithNoEventsScheduled);

  return {
    props: {
      events: events.data,
      workshops: workshops.data,
      workshopWithNoEventsScheduled,
    },
  };
}
