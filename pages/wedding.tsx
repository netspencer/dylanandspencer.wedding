import React from 'react'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import classNames from 'classnames'

import Layout from '../components/Layout'
import EventMap from '../components/EventMap'

import Content from '../content/details.mdx'
import MDXWrapper from '../components/MDXWrapper'

const WeddingPage: NextPage = () => {
  return (
    <Layout className={classNames('pb-12', 'md:pb-32')}>
      <NextSeo title="The Big Day" />
      <MDXWrapper useAbril centerHeadings>
        <Content />
      </MDXWrapper>
      <EventMap />
    </Layout>
  )
}

export default WeddingPage
