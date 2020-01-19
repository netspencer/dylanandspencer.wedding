import React from 'react'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import PhotoGallery from '../components/PhotoGallery'

const MemoriesPage: NextPage = () => {
  return (
    <Layout>
      <PhotoGallery />
    </Layout>
  )
}

export default MemoriesPage
