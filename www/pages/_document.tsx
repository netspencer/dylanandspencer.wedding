import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  NextDocumentContext
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:500|Playfair+Display+SC:900&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/static/index.css" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-137650812-2"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'UA-137650812-2');
            `
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '440931256657796');
              fbq('track', 'PageView');
        `
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=440931256657796&ev=PageView&noscript=1"
            />
          </noscript>
        </Head>
        <body className="cf">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
