import React from 'react'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import classNames from 'classnames'

import Layout from '../components/Layout'
import Content from '../content/covid.mdx'
import MDXWrapper from '../components/MDXWrapper'

const StoryPage: NextPage = () => {
  return (
    <Layout className={classNames('pb-12', 'md:pb-32')}>
      <NextSeo title="COVID-19 Update" />
      <MDXWrapper>
        <Content />
      </MDXWrapper>
    </Layout>
  )
}

export default StoryPage
