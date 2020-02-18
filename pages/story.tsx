import React from 'react'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import Layout from '../components/Layout'
import StoryDocument from '../content/story.mdx'
import StoryWrapper from '../components/StoryWrapper'

const StoryPage: NextPage = () => {
  return (
    <Layout>
      <NextSeo title="Our Story" />
      <StoryWrapper>
        <StoryDocument />
      </StoryWrapper>
    </Layout>
  )
}

export default StoryPage
