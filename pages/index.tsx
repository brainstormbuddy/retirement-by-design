import { useEffect, useState, useLayoutEffect } from 'react';
import { Box, Container, Divider, Grid, Link } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Image from 'next/image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';

import styles from './home.module.scss';
import directus from '../modules/directus';

interface HomeProps {
  podcasts: Array<any>;
}

function Home(props: HomeProps) {
  const [ref, inView, entry] = useInView({ threshold: 0.5 });
  const [whiteBackground, setWhiteBackground] = useState(false);
  const podcasts = props.podcasts;
  const router = useRouter();

  useEffect(() => {
    if (!window) {
      return;
    }

    if (inView) {
      //@ts-ignore
      if (entry?.boundingClientRect.top < 0) {
        //@ts-ignore
        if (entry.isIntersecting) {
          // entered viewport at the top edge, hence scroll direction is up
          setWhiteBackground(false);
        } else {
          // left viewport at the top edge, hence scroll direction is down
          setWhiteBackground(true);
        }
      } else {
        //@ts-ignore
        if (entry.isIntersecting) {
          // entered viewport at the top edge, hence scroll direction is up
          setWhiteBackground(false);
        } else {
          // left viewport at the top edge, hence scroll direction is down
          setWhiteBackground(true);
        }
      }
    }

    if (!inView) {
      //@ts-ignore
      if (entry?.boundingClientRect.top < 0) {
        //@ts-ignore
        if (entry.isIntersecting) {
          // entered viewport at the top edge, hence scroll direction is up
          setWhiteBackground(false);
        } else {
          // left viewport at the top edge, hence scroll direction is down
          setWhiteBackground(true);
        }
      }
    }
  }, [inView]);

  return (
    <div
      className={`${styles.homeMainContainer} ${styles.white} ${
        whiteBackground ? styles.whiteBackground : ''
      }`}
    >
      <Head>
        <title>Retirement by Design</title>

        <meta name="title" content="Retirement by Design" />

        <meta
          name="description"
          content="Professional advice to help you plan, invest, and save for your retirement goals."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://retirementby.design" />
        <meta property="og:title" content={`Retirement by Design`} />
        <meta
          property="og:description"
          content="Professional advice to help you plan, invest, and save for your retirement goals."
        />
        <meta
          property="og:image"
          content="https://retirementby.design/images/home-video-poster.jpg"
        />
      </Head>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -50 },
        }}
      >
        <Navigation noWhiteBackground={!whiteBackground} />
      </motion.div>

      <Container>
        <div className={styles.homeHeroContainer}>
          <Grid container justifyContent="start">
            <Grid item md={9} sm={12} xs={12}>
              <motion.h1 className="heading-hero">
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        ease: [0.46, 0.02, 0.38, 0.99],
                        duration: 0.7,
                      },
                    },
                    hidden: { opacity: 0, y: 100 },
                  }}
                >
                  Professional advice to help you plan, invest, and save
                </motion.span>
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        ease: [0.46, 0.02, 0.38, 0.99],
                        duration: 0.7,
                        delay: 0.15,
                      },
                    },
                    hidden: { opacity: 0, y: 100 },
                  }}
                >
                  for your retirement goals.
                </motion.span>
              </motion.h1>
            </Grid>
            <Grid item md={8} sm={8} xs={12}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      ease: [0.46, 0.02, 0.38, 0.99],
                      duration: 0.7,
                      delay: 0.2,
                    },
                  },
                  hidden: { opacity: 0, y: 100 },
                }}
                className={styles.subheading}
              >
                {`It's never too early—or too late—to start planning for
                retirement. The sooner you get started, the better. We can help
                you formulate a detailed plan to retire by design.`}
              </motion.h2>
            </Grid>

            <Grid item md={12} sm={12} xs={12}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      ease: [0.46, 0.02, 0.38, 0.99],
                      duration: 0.7,
                      delay: 0.2,
                    },
                  },
                  hidden: { opacity: 0, y: 100 },
                }}
                className={styles.homeHeroCTA}
              >
                <Link
                  className={`${styles.browseLink} ${styles.browseLinkWithArrow} ${styles.authorBioLink} ${styles.browseLinkGrey}`}
                  href="/contact"
                >
                  <span>Start planning</span> <ArrowRightAltIcon />
                </Link>

                <div>
                  <img
                    src="/images/Shawn Headshot.png"
                    alt="Shawn Bellefeuille Headshot"
                    className="image-rounded"
                  />

                  <img
                    src="/images/Amber Headshot.png"
                    alt="Amber Headshot"
                    className="image-rounded"
                  />

                  <p>
                    {`You'll be talking with our professional advisors with
                    expertise in retirement.`}
                  </p>
                </div>
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </Container>

      <Container maxWidth="xl">
        <Grid container justifyContent="center">
          <Grid item md={12} sm={12} xs={12}>
            <motion.div
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.46, 0.02, 0.38, 0.99],
                    delay: 0.7,
                  },
                },
                hidden: { opacity: 0, y: 150 },
              }}
              className={styles.videoContainer}
              ref={ref}
            >
              <video
                controls={false}
                autoPlay={true}
                loop={true}
                muted={true}
                // poster="/images/home-video-poster.jpg"
              >
                <source src="/home-video-compressed.mp4" />
              </video>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/*
      <Container>
        <Grid container>
          <Grid item md={12} xs={12} sm={12}>
            <div className={styles.homeLeftAlignedTextContainer}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      ease: [0.46, 0.02, 0.38, 0.99],
                      duration: 0.7,
                    },
                  },
                  hidden: { opacity: 0, y: 100 },
                }}
              >
                <span>~$250B</span> — combined valuation of companies we’ve
                partnered with.
              </motion.h2>

              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      ease: [0.46, 0.02, 0.38, 0.99],
                      duration: 0.7,
                    },
                  },
                  hidden: { opacity: 0, y: 100 },
                }}
              >
                <span>~$250B</span> — combined valuation of companies we’ve
                partnered with.
              </motion.h2>

              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      ease: [0.46, 0.02, 0.38, 0.99],
                      duration: 0.7,
                    },
                  },
                  hidden: { opacity: 0, y: 100 },
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur similique sint iusto, accusantium natus repellat
                corporis necessitatibus eum tempora ullam vitae amet officiis
                suscipit magnam quos temporibus dolorum minima hic.
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      ease: [0.46, 0.02, 0.38, 0.99],
                      duration: 0.7,
                    },
                  },
                  hidden: { opacity: 0, y: 100 },
                }}
              >
                <a
                  className={`${styles.browseLink} ${styles.browseLinkWithArrow} ${styles.authorBioLink} ${styles.browseLinkGrey}`}
                  href="#"
                >
                  <span>Meet our team</span> <ArrowRightAltIcon />
                </a>
              </motion.p>
            </div>
          </Grid>
        </Grid>
      </Container> */}

      <Container>
        <Grid container spacing={3}>
          <Grid item md={9} lg={9} xs={12} sm={12}>
            <h1 className={styles.bgHeadingHide}>
              <span>
                There are many financial products and investment options, and
                choosing the ones that best meet your retirement needs can be
                complicated.
              </span>
            </h1>
            <h2 className={styles.bgHeadingHide}>
              We want you to understand our process and the financial products
              you are investing in. Together, we will make informed decisions
              about the financial products that are best for your retirement
              goals.
            </h2>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl">
        <div className={styles.caseStudySection}>
          <div className={styles.caseStudyColumn}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                hidden: { opacity: 0, y: 100 },
              }}
              className={styles.caseStudyItem}
            >
              <a>
                <div className={styles.caseStudyItemImage}>
                  <img src="/images/home-investments.jpg" alt="" />
                </div>
                <h1 className={styles.caseStudyItemTitle}>Investments</h1>
                <h2 className={styles.caseStudyItemText}>
                  Investments play a key role in your financial security plan. A
                  mix of registered and non-registered savings, income and
                  pension plans can help achieve short and long-term goals.
                </h2>
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                hidden: { opacity: 0, y: 100 },
              }}
              className={styles.caseStudyItem}
            >
              <a>
                <img src="/images/home-insurance.jpg" alt="" />
                <h1 className={styles.caseStudyItemTitle}>Insurance</h1>
                <h2 className={styles.caseStudyItemText}>
                  Insurance is an essential component to any comprehensive
                  financial security plan. If tragic events like death,
                  disability or critical illness occur, insurance can protect
                  you and your family from undue hardship.
                </h2>
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                hidden: { opacity: 0, y: 100 },
              }}
              className={styles.caseStudyItem}
            >
              <a>
                <img src="/images/home-retirement-planning.jpg" alt="" />
                <h1 className={styles.caseStudyItemTitle}>
                  Retirement Planning
                </h1>
                <h2 className={styles.caseStudyItemText}>
                  There is a lifetime after retirement and the need to be able
                  to provide a steady stream of income that cannot be outlived
                  is essential. With the prospect of paying for retirement needs
                  for as many as 20 years, retirees need to be concerned with
                  maintaining their cost-of-living.
                </h2>
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                hidden: { opacity: 0, y: 100 },
              }}
              className={styles.caseStudyItem}
            >
              <a>
                <img src="/images/home-managing-your-finances.jpg" alt="" />
                <h1 className={styles.caseStudyItemTitle}>
                  Managing your finances
                </h1>

                <h2 className={styles.caseStudyItemText}>
                  Managing your finances is an important component to any
                  financial security plan. Along with the protection offered
                  through insurance and the goal setting provided by investment
                  choices, money management strategies help you manage your
                  savings on a daily basis.
                </h2>
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                hidden: { opacity: 0, y: 100 },
              }}
              className={styles.caseStudyItem}
            >
              <a>
                <img src="/images/home-asset-allocation.jpg" alt="" />

                <h1 className={styles.caseStudyItemTitle}>Asset allocation</h1>
                <h2 className={styles.caseStudyItemText}>
                  All investments involve some sort of risk, whether it’s market
                  risk, interest risk, inflation risk, liquidity risk, or tax
                  risk. An individualized asset allocation strategy seeks to
                  mitigate the risks of any one asset class through
                  diversification and balance.
                </h2>
              </a>
            </motion.div>
          </div>
        </div>

        <div className={styles.caseStudySection}>
          <div className={styles.caseStudyColumn}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                hidden: { opacity: 0, y: 100 },
              }}
              className={styles.caseStudyItem}
            >
              <a>
                <img
                  src="/images/home-business-succession-planning.jpg"
                  alt=""
                />
                <h1 className={styles.caseStudyItemTitle}>
                  Business succession planning
                </h1>
                <h2 className={styles.caseStudyItemText}>
                  The death of a partner or major stockholder in a business can
                  have devastating effects on both the business and the deceased
                  partner’s surviving family. Business succession planning
                  involves legal, tax and personal financial issues. Guidance
                  from a qualified attorney or tax professional is strongly
                  recommended.
                </h2>
              </a>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                hidden: { opacity: 0, y: 100 },
              }}
              className={styles.caseStudyItem}
            >
              <a>
                <img src="/images/home-charitable-giving.jpg" alt="" />
                <h1 className={styles.caseStudyItemTitle}>Charitable giving</h1>
                <h2 className={styles.caseStudyItemText}>
                  By using charitable gifting techniques, a donor may be able to
                  benefit the charity while living without having to sacrifice
                  the income that an asset can generate. Understanding how
                  properly structured charitable gifts can provide current
                  benefits for both the donor and the charity could be important
                  for the charitably inclined.
                </h2>
              </a>
            </motion.div>
          </div>
        </div>

        <p>
          <a
            className={`${styles.browseLink} ${styles.browseLinkCentered} ${styles.browseLinkWithArrow}`}
            onClick={() => router.push('/about')}
          >
            <span style={{ fontSize: '24px' }}>Learn more</span>{' '}
            <ArrowRightAltIcon />
          </a>
        </p>

        <Divider className={styles.caseStudiesDivider} />
      </Container>

      <div className={styles.articleMainContainer}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <h1>Recent podcasts</h1>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={{ xs: 4, md: 8, sm: 8 }}
            className={styles.articleContainer}
          >
            {props.podcasts.map((podcast: any, index: number) => {
              if (index == 0) return null;

              return (
                <Grid item xs={12} sm={6} md={4} key={podcast.id}>
                  <Link
                    href={`/podcast/${podcast.slug}`}
                    style={{ textDecoration: 'none' }}
                  >
                    {/* <Link href={`/podcasts/${podcast.slug}`} /> */}
                    <div className={`${styles.featuredPodcast}`}>
                      <img
                        src={
                          podcast.social_thumbnail
                            ? `https://admin.retirementby.design/assets/${podcast.social_thumbnail}`
                            : `https://via.placeholder.com/800x800`
                        }
                      />

                      <div className="content">
                        <p className={styles.articlePublished}>
                          Episode {podcast.episode_number} • {podcast.minutes}{' '}
                          minutes{' '}
                        </p>

                        <h1>{podcast.title}</h1>

                        <div className={styles.articlePublishedBy}>
                          <img
                            src={`https://admin.retirementby.design/assets/${podcast.host[0].directus_users_id.avatar}`}
                            style={{ maxWidth: '40px' }}
                          />

                          <p>
                            {podcast.host[0].directus_users_id.first_name}{' '}
                            {podcast.host[0].directus_users_id.last_name}
                          </p>
                        </div>

                        <p className={styles.articleExcerpt}>
                          {podcast.description.substring(0, 100) + '...'}
                        </p>

                        <p
                          className={`${styles.browseLink} ${styles.browseLinkWithArrow} ${styles.authorBioLink}`}
                        >
                          <span>Listen now </span>
                          <ArrowRightAltIcon />
                        </p>
                      </div>
                    </div>
                  </Link>
                </Grid>
              );
            })}
          </Grid>

          <Box style={{ marginTop: '60px' }}></Box>

          <Grid container>
            <Grid item xs={12}>
              <p>
                <a
                  onClick={() => router.push('/podcast')}
                  className={`${styles.browseLink} ${styles.browseLinkCentered} ${styles.browseLinkWithArrow}`}
                >
                  <span style={{ fontSize: '24px' }}>View all episodes</span>{' '}
                  <ArrowRightAltIcon />
                </a>
              </p>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await directus.items('podcasts').readMany({
    // filter: {
    //   status: 'published',
    // },
    fields: '*,host.directus_users_id.*',

    //@ts-ignore
    sort: ['-episode_number'],
    limit: 4,
  });

  console.log(res);
  // Pass data to the page via props
  return {
    props: {
      podcasts: res.data,
      // podcastsCount: res.meta?.total_count,
    },
  };
}

export default Home;
