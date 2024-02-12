import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <body itemScope itemType="https://schema.org/WebPage">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
