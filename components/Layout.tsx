import React, { FunctionComponent } from 'react'
import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: FunctionComponent<Props> = ({ children, title }) => (
  <>
    <Head>
      <title>Dylan &amp; Spencer | May 24, 2020</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Abril+Fatface|Didact+Gothic|Libre+Baskerville&display=swap"
        rel="stylesheet"
      />
    </Head>
    <main className="relative container">{children}</main>
    <style jsx global>{`
      html,
      body {
        overflow-x: hidden;
        scroll-behavior: smooth;
      }

      body {
        background-color: #faf6e9;
        background-image: url(/texture.jpg);
        background-attachment: fixed;
        background-repeat: repeat;
      }

      .no-selection {
        user-select: none;
      }

      .cursor-progress {
        cursor: progress;
      }

      /* FONT SIZE */

      .text-huge {
        font-size: 16em;
      }

      /* FONTS */

      .didact {
        font-family: 'Didact Gothic', sans-serif;
      }

      .fatface {
        font-family: 'Abril Fatface', serif;
      }

      .libre {
        font-family: 'Libre Baskerville', serif;
      }

      /* TEXTURES */

      .bg-texture {
        background-image: url(/texture.jpg);
        background-attachment: fixed;
        background-repeat: repeat;
      }

      /* COLORS */

      .wedding-cream {
        color: #faf6e9;
      }
      .bg-wedding-cream {
        background-color: #faf6e9;
      }

      .wedding-tan {
        color: #ece8d9;
      }
      .bg-wedding-tan {
        background-color: #ece8d9;
      }

      .wedding-offwhite {
        color: #fffdf6;
      }
      .bg-wedding-offwhite {
        background-color: #fffdf6;
      }

      .wedding-gray {
        color: #494949;
      }
      .bg-wedding-gray {
        background-color: #494949;
      }
    `}</style>
  </>
)

export default Layout
