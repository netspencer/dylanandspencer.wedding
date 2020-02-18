import React from 'react'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import Layout from '../components/Layout'
import Registry from '../components/Registry'

const RegistryPage: NextPage = () => {
  return (
    <Layout>
      <NextSeo title="Registry" />
      <Registry />
    </Layout>
  )
}

export default RegistryPage
