import React from 'react'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import StoryDocument from '../content/story.mdx'
import StoryWrapper from '../components/StoryWrapper'

const StoryPage: NextPage = () => {
  return (
    <Layout>
      <StoryWrapper>
        <StoryDocument />
      </StoryWrapper>
    </Layout>
  )
}

export default StoryPage
