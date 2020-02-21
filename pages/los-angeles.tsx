import React from 'react'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import classNames from 'classnames'

import Layout from '../components/Layout'

import Content from '../content/los-angeles.mdx'
import MDXWrapper from '../components/MDXWrapper'

const LAPage: NextPage = () => {
  return (
    <Layout className={classNames('pb-12', 'md:pb-32')}>
      <NextSeo title="Things To Do in Los Angeles" />
      <MDXWrapper useAbril centerHeadings>
        <Content />
      </MDXWrapper>
    </Layout>
  )
}

export default LAPage
