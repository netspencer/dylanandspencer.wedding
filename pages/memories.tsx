import React from 'react'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import Layout from '../components/Layout'
import PhotoGallery from '../components/PhotoGallery'

const MemoriesPage: NextPage = () => {
  return (
    <Layout>
      <NextSeo title="Memories" />
      <PhotoGallery />
    </Layout>
  )
}

export default MemoriesPage
