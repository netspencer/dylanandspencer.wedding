import React from 'react'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import classNames from 'classnames'

import Layout from '../components/Layout'
import WeddingDetails from '../components/WeddingDetails'

const WeddingPage: NextPage = () => {
  return (
    <Layout className={classNames('pb-12', 'md:pb-32')}>
      <NextSeo title="The Big Day" />
      <WeddingDetails />
    </Layout>
  )
}

export default WeddingPage
