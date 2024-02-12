import Link from 'next/link';
import {
  Box,
  Container,
  Divider,
  Grid,
  Hidden,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div>
      <footer className={styles.siteFooter}>
        <Container>
          <Grid container justifyContent="space-between" alignItems="start">
            <Grid item xs={12} md={6}>
              <img className={styles.logo} src="/images/Logo (Black).svg" />

              <Hidden smDown>
                <Grid container style={{ marginTop: '32px' }}>
                  <Grid item xs={12}>
                    <div className="content">
                      <div className={styles.footerSocial}>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.facebook.com/RetirementDesign"
                        >
                          <FacebookIcon color="secondary" />
                        </a>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.instagram.com/retirementbydesign"
                        >
                          <InstagramIcon color="secondary" />
                        </a>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Hidden>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={styles.footerListContainer}>
                <ul className={`${styles.footerList} ${styles.footerListLeft}`}>
                  {/* <li>
                    <Link href="/articles">Articles</Link>
                  </li> */}
                  <li>
                    <Link href="/workshops">Workshops</Link>
                  </li>
                  <li>
                    <Link href="/podcast">Podcast</Link>
                  </li>
                  <li>
                    <Link href="/books/the-pursuit-of-retirement">Book</Link>
                  </li>
                </ul>

                <ul
                  className={`${styles.footerList} ${styles.footerListRight}`}
                >
                  <li>
                    <Link href="/about">About</Link>
                  </li>

                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>

          <Hidden smUp>
            <Grid container>
              <Grid item xs={12}>
                <div className="content">
                  <div className={styles.footerSocial}>
                    <Link href="https://www.facebook.com/RetirementDesign/">
                      <FacebookIcon color="secondary" />
                    </Link>
                    <Link href="https://www.instagram.com/retirementbydesign/">
                      <InstagramIcon color="secondary" />
                    </Link>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Hidden>

          <Grid container>
            <Grid item xs={12}>
              <div className="content">
                <Box className={styles.footerDivider}>
                  <Divider />
                </Box>
              </div>
            </Grid>
          </Grid>

          <Grid container alignItems={{ md: 'center' }}>
            <Grid item xs={12} md={6}>
              <div className="content">
                <div className={styles.footerCopyright}>
                  <p>© 2021 Retirement by Design. All rights reserved.</p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className={styles.footerLastLinks}>
                <div className="content">
                  {/* <Link href="#">Français</Link> */}
                  <Link href="/legal-notices">Privacy Policy</Link>
                  <Link href="/legal-notices">Legal Notices</Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        {/* 
        <Container className={styles.disclaimer}>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={10}>
              <h4>Legal, privacy, copyright and trademark information</h4>
              <p className="p-small text-justify">
                For security reasons, please contact us by phone when sharing
                any personal or confidential information. Emails are not
                considered a secure means of transmitting information. ® The
                Desjardins brand is a trademark owned by the Fédération des
                caisses Desjardins du Québec and used under licence *Mutual
                funds distributed through Desjardins Financial Security
                Investments Inc. Life and Health Insurance products are provided
                by Shawn Bellefeuille through Desjardins Financial Security
                Independent Network. Life and Health Insurance products and
                services are not available through Desjardins Financial Security
                Investments Inc. (DFS Investments) nor are the insurance plans
                or services available and/or offered supervised or reviewed by
                DFS Investments. DFS Investments is the Mutual Fund Dealer
                through which Mutual Fund Products and Services are provided.
              </p>
            </Grid>
          </Grid>

          <Grid container justifyContent="center">
            <Grid item xs={12} md={10}>
              <h4>About Desjardins Financial Security Investments Inc.</h4>
              <p className="p-small text-justify">
                This site is not the property of Desjardins Insurance¹ or
                Desjardins Financial Security Independent Network. They do not
                have any control over the content or the use of the site.
                Desjardins Insurance¹ and Desjardins Financial Security
                Independent Network shall not be liable or responsible to any
                person for any harm, loss or damage (whether arising in
                contract, tort, negligence or otherwise) that may arise directly
                or indirectly from this site, the use, inability to use, or
                malfunctioning of this site or the information contained herein,
                including any direct, indirect, special, third party or
                consequential damages. This site is not the property of
                Desjardins Financial Security Investments Inc. (DFS
                Investments). DFS Investments has control over the content of
                this site by their review of the information provided in
                accordance with its policies and procedures. DFS Investments is
                not responsible for the content in this website that is
                unrelated to the business of DFS Investments nor is it
                responsible for the monitoring or supervision of these other
                business activities. ¹ Desjardins Insurance refers to Desjardins
                Financial Security Life Assurance Company, a provider of life
                and health insurance and retirement savings products.
              </p>
            </Grid>
          </Grid>
        </Container> */}
      </footer>
    </div>
  );
}
