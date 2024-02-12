import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { GetServerSideProps } from 'next';

import HeadsetIcon from '@mui/icons-material/Headset';
import { Assignment } from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

import Navigation from '../../../../components/Navigation/Navigation';
import CTA from '../../../../components/CTA/CTA';
import FAQ from '../../../../components/FAQ/FAQ';
import Footer from '../../../../components/Footer/Footer';

import ArticleProgress from '../../../../components/ArticleProgress/ArticleProgress';
import NextChapter from '../../../../components/NextChapter/NextChapter';

import directus from '../../../../modules/directus';

import styles from './article.module.scss';

function Chapter(props: any) {
  const { book, chapter, chapter_number } = props;
  console.log(props);

  const isLastChapter = parseInt(chapter_number) == book.Body.length;
  const nextChapter = !isLastChapter ? book.Body[chapter_number - 1 + 1] : null;

  const [articleProgressBarWidth, setArticleProgressBarWidth] = useState('10%');
  const progressBarElement = useRef(null);

  useEffect(() => {
    if (!document && !window && !progressBarElement) return;
    //@ts-ignore
    let $postContent = document.getElementById('article-content');

    //@ts-ignore
    // articleProgress.style.width = '30px';

    const wordsPerMinute = 200;
    let result;

    let textLength = chapter.chapter_body.split(' ').length; // Split by words

    if (textLength > 0) {
      let value = Math.ceil(textLength / wordsPerMinute);
      result = `~${value} min read`;
    }

    //@ts-ignore
    document.getElementById('js-minutes-to-read').innerText = result;

    document.addEventListener('scroll', () => {
      if (!progressBarElement) return;

      console.log('scrolled');
      //@ts-ignore
      let postContentHeight = $postContent?.offsetHeight;
      //@ts-ignore
      let postContentStartPosition = $postContent.offsetTop;
      //@ts-ignore
      let winScrollTop = window.scrollY;
      let postScrollTop = postContentStartPosition - winScrollTop;
      //@ts-ignore
      let postScrollableArea = postContentHeight - window.innerHeight;
      let postScrollPercentage = Math.abs(
        (postScrollTop / postScrollableArea) * 100
      );

      if (postScrollTop > 0) {
        //@ts-ignore
        progressBarElement.current.style.setProperty('width', 10 + '%');
      } else if (postScrollTop < 0 && postScrollTop > -postScrollableArea) {
        //@ts-ignore
        progressBarElement.current.style.setProperty(
          'width',
          postScrollPercentage + 10 + '%'
        );
      } else if (postScrollTop < -postScrollableArea) {
        //@ts-ignore
        progressBarElement.current.style.setProperty('width', 100 + '%');
      }

      console.log(articleProgressBarWidth);
    });
  }, []);

  return (
    <>
      <Head>
        <title>
          {chapter.chapter_name} - {book.title} - Retirement by Design
        </title>

        <meta
          name="title"
          content={`${chapter.chapter_name} - ${book.title} - Retirement by Design`}
        />
        <meta name="description" content={`${chapter?.description || ''}`} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content={`${chapter.chapter_name} - ${book.title} - Retirement by Design`}
        />
        <meta
          property="og:description"
          content={`${chapter?.description || ''}`}
        />
        <meta
          property="og:image"
          content={`https://admin.retirementby.design/assets/${book.cover}`}
        />
      </Head>

      <Navigation />

      <div
        id="article-progress-bar-container"
        className={styles.articleProgress}
      >
        <div
          id="article-progress-bar"
          className={styles.articleProgressFilled}
          ref={progressBarElement}
        ></div>
      </div>

      <div className={styles.bookContainer}>
        <Container>
          <Grid spacing={4} container justifyContent="space-between">
            <Grid item xs={12} sm={4} md={3}>
              <img
                className={styles.bookContainerBookImage}
                src={`https://admin.retirementby.design/assets/${book.cover}`}
              />{' '}
              {book.Body.map((chapter: any, index: number) => {
                if (index + 1 == chapter_number) {
                  return (
                    <Grid
                      className={`${styles.chapterListItem} active ${styles.chapterListItemActive}`}
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      key={index}
                    >
                      <p>Chapter {index + 1}</p>

                      <h3>{chapter.chapter_name}</h3>
                    </Grid>
                  );
                }

                return (
                  <Link
                    href={`/books/${book.slug}/chapter/${index + 1}`}
                    key={index}
                  >
                    <Grid
                      className={styles.chapterListItem}
                      item
                      xs={12}
                      sm={12}
                      md={12}
                    >
                      <p>Chapter {index + 1}</p>

                      <h3>{chapter.chapter_name}</h3>
                    </Grid>
                  </Link>
                );
              })}
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              itemScope
              itemType="https://schema.org/Chapter"
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <p
                    className={styles.articleType}
                    style={{
                      marginBottom: 0,
                      alignItems: 'center',
                      display: 'flex',
                    }}
                  >
                    <ImportContactsIcon />
                    Chapter {chapter_number}
                  </p>
                  <p className={styles.articlePublished}>
                    <AccessTimeIcon />{' '}
                    <span id="js-minutes-to-read">15 minute read</span>
                  </p>
                </div>
                <h1 className="mt-0" itemProp="name">
                  {chapter.chapter_name}
                </h1>
                {/* <Divider style={{ marginTop: 0 }} />
                <div className={styles.articlePublishedBy}>
                  {/* <img src="https://via.placeholder.com/32x32/" /> 
                  <p>Shawn Bellefeuille</p></div>  */}
              </div>

              <div
                id="article-content"
                className="article-content no-lead"
                dangerouslySetInnerHTML={{
                  //@ts-ignore
                  __html: chapter.chapter_body,
                }}
              ></div>

              {nextChapter !== null && (
                // <NextChapter
                //   chapterNumber={parseInt(chapter_number) + 1}
                //   chapterName={
                //     nextChapter !== null ? nextChapter.chapter_name : ''
                //   }
                // />
                <a
                  href={`/books/the-pursuit-of-retirement/chapter/${
                    parseInt(chapter_number) + 1
                  }`}
                  className={`${styles.chapterListNextChapter}`}
                >
                  <Grid
                    className={`${styles.chapterListItem} active ${styles.chapterListItemActive} ${styles.chapterListNextChapter}`}
                    item
                    xs={12}
                    sm={12}
                    md={12}
                  >
                    <p>Chapter {parseInt(chapter_number) + 1}</p>

                    <h3>
                      {nextChapter !== null ? nextChapter.chapter_name : ''}
                    </h3>
                  </Grid>
                </a>
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="mt-4"></div>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context: GetServerSideProps) {
  // Fetch data from external API
  //@ts-ignore
  const { name, chapter } = context.query;

  let bookToSend = null;

  const book = await directus.items('books').readMany({
    filter: {
      slug: name,
    },
    // fields: '*,author.*',
  });

  //@ts-ignore
  bookToSend = book.data[0] || null;

  console.log(book);
  // Pass data to the page via props
  return {
    props: {
      //@ts-ignore
      book: bookToSend,
      //@ts-ignore
      chapter_number: chapter,
      //@ts-ignore
      chapter: bookToSend.Body[parseInt(chapter) - 1] || null,
    },
  };
}

export default Chapter;
