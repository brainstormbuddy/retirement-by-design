import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './FAQ.module.scss';
import { useState } from 'react';

export default function FAQ(props: any) {
  const [currentOpen, setCurrentOpen] = useState(1);

  let additionalStyles: any = {};

  if (props.withTopMargin) {
    additionalStyles.marginTop = '100px';
  }

  if (props.fullWidth) {
    additionalStyles.width = '100%';
  }

  return (
    <Container className={styles.withTopMargin} style={additionalStyles}>
      <Grid>
        <Grid>
          <Box style={{ textAlign: 'center' }}>
            <h1>FAQs</h1>
          </Box>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8} sm={12}>
          <div className="accordion-container">
            <Accordion expanded={currentOpen === 1} className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className={styles.accordion}
                onClick={() => {
                  setCurrentOpen(1);
                }}
              >
                <p className={styles.faqTitle}>How does the workshop work?</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className={styles.faqDescription}>
                  Attending the workshop is easy. Once you register (for free),
                  we will be in touch with an email confirmation. We will then
                  provide you with a unique link on the day of the event, which
                  will allow you to access the workshop.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={currentOpen === 2} className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className={styles.accordion}
                onClick={() => {
                  setCurrentOpen(2);
                }}
              >
                <p className={styles.faqTitle}>
                  When does the workshop take place?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className={styles.faqDescription}>
                  The workshop session with a financial advisor takes place
                  based on the date and time of the available session you
                  choose.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={currentOpen === 3} className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className={styles.accordion}
                onClick={() => {
                  setCurrentOpen(3);
                }}
              >
                <p className={styles.faqTitle}>Is the workshop live?</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className={styles.faqDescription}>
                  Our workshops are live and in living colour! You’ll be sitting
                  in the same virtual room as your speaker—meaning you’ll have
                  the opportunity to ask questions and discuss your retirement
                  goals.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={currentOpen === 4} className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className={styles.accordion}
                onClick={() => {
                  setCurrentOpen(4);
                }}
              >
                <p className={styles.faqTitle}>Can I attend on another date?</p>
              </AccordionSummary>
              <AccordionDetails>
                <p className={styles.faqDescription}>
                  Spots for workshops are available on a first come first serve
                  basis, but you’ll want to act fast, since seats are limited.
                  Don’t miss out!
                </p>
                <p className={styles.faqDescription}>
                  You can always select a different session for the same
                  workshop at a later date and time.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
