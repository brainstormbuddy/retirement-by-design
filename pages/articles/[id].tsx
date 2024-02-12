import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

import HeadsetIcon from '@mui/icons-material/Headset';

import Navigation from '../../components/Navigation/Navigation';
import CTA from '../../components/CTA/CTA';
import FAQ from '../../components/FAQ/FAQ';
import Footer from '../../components/Footer/Footer';

import styles from './article.module.scss';
import Today from '@mui/icons-material/Today';
import BookCTA from '../../components/BookCTA/BookCTA';
import AuthorBio from '../../components/AuthorBio/AuthorBio';
import Comments from '../../components/Comments/Comments';
import Newsletter from '../../components/Newsletter/Newsletter';
import ArticleProgress from '../../components/ArticleProgress/ArticleProgress';
import { Assignment } from '@mui/icons-material';
import directus from '../../modules/directus';
import { GetServerSideProps } from 'next';

export default function Article(props: any) {
  const [articleProgressBarWidth, setArticleProgressBarWidth] = useState('10%');
  const progressBarElement = useRef(null);

  const { article } = props;

  console.log(article.author);

  useEffect(() => {
    if (!document && !window && !progressBarElement) return;
    //@ts-ignore
    let $postContent = document.getElementById('article-content');

    //@ts-ignore
    // articleProgress.style.width = '30px';

    const wordsPerMinute = 200;
    let result;

    let textLength = article.body.split(' ').length;

    if (textLength > 0) {
      let value = Math.ceil(textLength / wordsPerMinute);
      result = `${value} min read`;
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
        <title>{article.title} - Retirement by Design</title>

        <meta name="title" content={`${article.title}- Retirement by Design`} />
        <meta name="description" content={`${article.description || ''}`} />

        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://retirementby.design/articles/${article.slug}`}
        />
        <meta
          property="og:title"
          content={`${article.title} - Retirement by Design`}
        />

        <meta
          property="og:description"
          content={`${article.description || ''}`}
        />

        {/* <meta
          property="og:image"
          content={`https://admin.retirementby.design/assets/${
            props.user.avatar || ''
          }`}
        /> */}
      </Head>

      <ArticleProgress />

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

      <Navigation />

      <div className={`${styles.articleContainer} content text-center`}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={10} sm={10}>
              <div className={`${styles.articleHeader}`}>
                <p className={styles.articleType}>{article.topic}</p>
                <h1 className="mt-0">{article.title}</h1>
                <h2 className="subheading mt-0">{article.description}</h2>
                <Divider
                  className={styles.articleInfoDivider}
                  style={{ marginTop: 0 }}
                />
                <p className={styles.articlePublished}>
                  {dayjs(article.publish_date).format('MMM D, YYYY')} •{' '}
                  <span id="js-minutes-to-read">15 minute read</span>
                </p>
                <div className={styles.articlePublishedBy}>
                  <img
                    width="32px"
                    height="32px"
                    src={`https://admin.retirementby.design/assets/${article.author.avatar}`}
                  />
                  <p>
                    {article.author.first_name} {article.author.last_name}
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <img
        src="https://palcedog.net/1440/600"
        className={styles.featuredImage}
        alt=""
      />

      <Container>
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            id="article-content"
            className="content article-content"
            dangerouslySetInnerHTML={{ __html: article.body }}
          >
            {/* <p className="mt-0">
                Mauris molestie mi at risus viverra, ut eleifend tellus
                dignissim. Morbi pellentesque lobortis turpis, ac dignissim urna
                rhoncus non.
              </p>

              <p>
                Proin pharetra orci porttitor, rutrum neque nec, cursus leo.
                Mauris fringilla nibh ut orci vehicula, in scelerisque turpis
                ultricies. In ut leo sed orci condimentum sollicitudin.
                Curabitur vel ultricies urna, in scelerisque diam. In volutpat
                odio eget mattis congue. In sodales ac purus in auctor.
              </p>

              <p>
                Nullam at nisi in ante venenatis tempus. Sed consequat libero in
                nisi convallis hendrerit. Sed eu mi vel dolor posuere ultricies
                eget sed nisl. Suspendisse facilisis magna justo, in volutpat
                nulla eleifend in. Sed sapien est, dictum vel finibus cursus,
                condimentum sed nisl. Cras elementum imperdiet nisl imperdiet
                mollis.
              </p>

              <p>
                Nullam sit amet sem hendrerit, bibendum mauris at, rhoncus dui.
                Nulla non ex vulputate, mattis ligula imperdiet, dapibus lectus.
                Praesent quis mollis magna. Maecenas lacus purus, mattis vitae
                fermentum porta, dignissim ut turpis.
              </p>

              <blockquote className={styles.quoteContainer}>
                <span className={styles.quoteMark}>“</span>
                <span className={styles.quoteText}>
                  “Proin volutpat laoreet nisl, nec pharetra ligula. Nam eros
                  tellus, interdum et nunc quis, ultricies dignissim lacus. Duis
                  sed enim et augue molestie rutrum in dignissim enim. Integer
                  sem tellus, lobortis ut interdum.”
                </span>
              </blockquote>

              <p>
                Nullam sit amet sem hendrerit, bibendum mauris at, rhoncus dui.
                Nulla non ex vulputate, mattis ligula imperdiet, dapibus lectus.
                Praesent quis mollis magna. Maecenas lacus purus, mattis vitae
                fermentum porta, dignissim ut turpis.
              </p>

              <img
                src="https://via.placeholder.com/396x396/d8d8d8?text=%20"
                style={{ width: '100%', maxWidth: '100%' }}
                alt=""
              />

              <h2>Lorem ipsum dolor sit amet, consecteteur.</h2>
              <p>
                Proin pharetra orci porttitor, rutrum neque nec, cursus leo.
                Mauris fringilla nibh ut orci vehicula, in scelerisque turpis
                ultricies. In ut leo sed orci condimentum sollicitudin.
                Curabitur vel ultricies urna, in scelerisque diam. In volutpat
                odio eget mattis congue. In sodales ac purus in auctor.
              </p> */}
          </Grid>
        </Grid>
      </Container>

      <AuthorBio
        firstName={article.author.first_name}
        lastName={article.author.last_name}
        description={article.author.description}
        profileImage={`https://admin.retirementby.design/assets/${article.author.avatar}`}
        profileLink={`/about/${article.author.slug}`}
      />

      {/* <Comments /> */}

      {/* <div className="content mt-2">
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <h1>Suggested</h1>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={styles.workshopsContainer}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <article>
                <div
                  className={`${styles.imageContainer} ${styles.imageContainerSmall}`}
                >
                  <img src="https://via.placeholder.com/400x245/?text=%20" />

                  <div className={styles.imageContainerText}>
                    <p className={styles.imageContainerType}>
                      <HeadsetIcon />
                      Podcast Topic
                    </p>

                    <h3 className={`${styles.imageContainerTitle}`}>
                      The Importance of a Written Retirement Plan
                    </h3>
                  </div>
                </div>
              </article>
            </Grid>

            <Grid item xs={12} md={6}>
              <article>
                <div
                  className={`${styles.imageContainer} ${styles.imageContainerSmall}`}
                >
                  <img src="https://via.placeholder.com/400x245/?text=%20" />

                  <div className={styles.imageContainerText}>
                    <p className={styles.imageContainerType}>
                      <Assignment />
                      Article Topic
                    </p>
                    <h1 className={styles.imageContainerTitle}>
                      The Importance of a Written Retirement Plan
                    </h1>
                  </div>
                </div>
              </article>
            </Grid>
          </Grid>
        </Container>
      </div> */}

      <Newsletter />

      <Footer />
    </>
  );
}

export async function getServerSideProps(context: GetServerSideProps) {
  // Fetch data from external API
  //@ts-ignore
  const { id } = context.query;

  const article = await directus.items('articles').readMany({
    fields:
      '*,author.first_name,author.last_name,author.avatar,author.slug,author.email,author.slug,author.title,author.description,author.id',
    filter: {
      slug: id,
    },
    // fields: '*,author.*',
  });

  // console.log(article);

  return {
    props: {
      //@ts-ignore
      article: article.data[0] || null,
    },
  };
}
