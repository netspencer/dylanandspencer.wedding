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
      <section
        className={classNames(
          'container',
          'mx-auto',
          'px-2',
          'pt-4',
          'pb-2',
          'sm:px-8',
          'text-center',
          'libre'
        )}
      >
        <div className={classNames('md:w-2/3', 'w-full', 'mx-auto')}>
          <a
            target="_blank"
            href="http://maps.apple.com/?address=2940,Kuehner+Drive,Santa+Susana,CA,93063"
          >
            <EventMap />
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default WeddingPage
