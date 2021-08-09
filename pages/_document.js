import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="UTF-8" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500;700&display=swap" rel="stylesheet"></link>
          <script src="https://kit.fontawesome.com/ac8fc7a7fb.js" crossOrigin="anonymous"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument