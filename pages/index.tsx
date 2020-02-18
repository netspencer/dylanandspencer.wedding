import React from 'react'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import Layout from '../components/Layout'
import Postcard from '../components/Postcard'

const IndexPage: NextPage = () => {
  return (
    <>
      <Layout>
        <NextSeo title="May 24, 2020" />
        <Postcard />
      </Layout>
      <style jsx global>{`
        html,
        body {
          height: 100%;
          overflow: hidden;
        }
      `}</style>
    </>
  )
}

export default IndexPage
