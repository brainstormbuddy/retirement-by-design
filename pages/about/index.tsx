import Head from 'next/head';
import Image from 'next/image';

import { Box, Container, Divider, Grid } from '@mui/material';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import { motion } from 'framer-motion';

import heartOfCanadaPic from '../../public/images/heart-of-canada.jpg';

import styles from './about.module.scss';
import directus from '../../modules/directus';

function About(props: any) {
  console.log(props);

  return (
    <>
      <Head>
        <title>About - Retirement by Design</title>

        <meta name="title" content={`Retirement by Design`} />
        <meta
          name="description"
          content="We are committed to realize your retirement goals and create the ultimate strategy to get you there."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://retirementby.design/about" />
        <meta property="og:title" content={`About - Retirement by Design`} />
        <meta
          property="og:description"
          content="We are committed to realize your retirement goals and create the ultimate strategy to get you there."
        />
        {/* <meta property="og:image" content="https://retirementby.design/images/home-video-poster.jpg" /> */}
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
                  We are committed to realize your retirement goals and create
                  the ultimate strategy to get you there.
                </h1>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={`content mt-2 ${styles.aboutHeadingDescriptionContent}`}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={12} md={12} lg={10}>
              <h1>About</h1>

              <Divider />

              <div className={styles.aboutHeadingDescriptionArea}>
                <h2 className="serif">Our philosophy</h2>

                <div>
                  <p>
                    We want to get to know you and help you make the best
                    decisions possible. Our focus is to understand your goals
                    and to help you develop a plan to achieve them. We achieve
                    this through an initial meeting where we present an analysis
                    and our recommendations. Together, we implement the
                    recommendations and monitor your progress. From here, we
                    will plan regular meetings with you to assess the progress
                    toward your goals and, when necessary, we will make
                    adjustments to your financial plan.
                  </p>
                  <p>
                    There are many factors that may change in your situation or
                    the environment, it’s important for us to be proactive and
                    knowledgeable in the financial industry. We are committed to
                    staying up-to-date on relevant tax and estate laws in order
                    to provide you with the best financial advice for your
                    particular situation.
                  </p>
                </div>
              </div>

              <Divider />

              <div className={`${styles.aboutHeadingDescriptionArea}`}>
                <h2 className="serif">Our process</h2>

                <div>
                  <p>
                    We believe that a strong planning process and methodology is
                    the best way to create a financially secure plan. Your
                    financial plan should protect your current needs while
                    simultaneously preparing for the future, in a tax efficient
                    manner. We have established a process which focuses on two
                    key aspects of financial security: asset protection and
                    wealth creation. Your financial plan must ensure financial
                    security throughout your life, for both you and your loved
                    ones. It must provide income replacement and asset
                    protection in the event that the unthinkable occurs:
                    disability, critical illness or death. The plan must also
                    build the maximum it can via a solid, tax efficient wealth
                    portfolio.
                  </p>
                  <p>
                    With these goals in mind, we will work together to assess
                    your financial planning needs. We will consider important
                    purchases and milestones such as a first home, marriage,
                    children, education and retirement. Your plan will entail
                    regular review of ongoing financial management strategies.
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* <div className={`${styles.imageContainer} ${styles.aboutImageContainer}`}>
        <img src="https://via.placeholder.com/1440x779/?text=." />

        <div className={styles.imageContainerText}>
  
        </div>
      </div> */}

      <Container>
        <Grid container>
          <Grid item xs={12}>
            <div className={styles.checklistSectionContainer}>
              <img
                className={styles.checklistSectionImage}
                src="/images/about-shawn.jpg"
                alt=""
              />

              {/* <div className={styles.checklistSectionImageDesktop}></div> */}

              <div className={styles.checklistSectionInner}>
                <div className="content">
                  <h1>
                    Retirement by Design was founded in 2019 by Shawn
                    Bellefeuille. Today, we are a team of professional advisors
                    working together to provide valuable retirement advice and
                    to help you retire by design.
                  </h1>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" className={styles.team} id="our-team">
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12} sm={8} md={8} lg={6}>
            <div className="content">
              <h1 className="text-center">Our team</h1>
              <h2 className={`${styles.subheading} text-center`}>
                Our team has a wide range of experience with one shared ambition
                - to help you retire by design.
              </h2>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={8} className={styles.teamContainer}>
          {props.users.map((user: any, index: number) => (
            <Grid
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                hidden: { opacity: 0, y: 100 },
              }}
              item
              xs={12}
              sm={6}
              md={4}
              key={user.id}
            >
              <a href={`/about/${user.slug}`}></a>
              {user.avatar !== null ? (
                <img
                  src={`https://admin.retirementby.design/assets/${user.avatar}`}
                />
              ) : (
                <img src="https://via.placeholder.com/367x367?text=+" />
              )}

              <div className="content text-center">
                <h2 className="serif">
                  <span>{user.first_name}</span> <span>{user.last_name}</span>
                </h2>
                <p>{user.title}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 
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
      </div> */}

      <div className={styles.heartOfCanada}>
        <Container>
          <Divider
            className={styles.caseStudiesDivider}
            style={{ margin: '110px 0 96px' }}
          />

          <Grid
            container
            spacing={{ xs: 2, sm: 4, md: 8, lg: 8 }}
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              md={6}
              sm={6}
              className={styles.heartOfCanadaImage}
              order={{ xs: 2, md: 1, lg: 1 }}
            >
              <img
                src="/images/heart-of-canada.jpg"
                alt="Shawn Bellefeuille Headshot"
                className="image-rounded"
                style={{ borderRadius: '4px', width: '100%', maxWidth: '100%' }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sm={6}
              className={styles.heartOfCanadaText}
              order={{ xs: 1, md: 2, lg: 2 }}
            >
              <div className="content">
                <div className="mt-4">
                  <h1>Located in the heart of Canada’s capital.</h1>
                </div>
                <h2 className="subheading">
                  Our core team is based in Ottawa, Ontario, and we’re proud to
                  say our clients come to us from all around the country.
                </h2>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* <Container>
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
      </Container> */}

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const users = await directus.items('directus_users').readMany({
    filter: {
      Team: true,
    },
    //@ts-ignore
    sort: ['list_priority'],
    fields:
      'id,first_name,last_name,title,description,list_priority,avatar,slug',
  });

  console.log(users);

  // Pass data to the page via props
  return {
    props: {
      //@ts-ignore
      users: users.data,
    },
  };
}

export default About;
