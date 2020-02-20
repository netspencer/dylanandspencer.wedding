import '../styles/main.css'

import React, { FunctionComponent } from 'react'
import App from 'next/app'
import Head from 'next/head'

import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

const Favicon: FunctionComponent = () => (
  <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
  </Head>
)

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Favicon />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </>
    )
  }
}
