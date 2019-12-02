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

      {/* <section className="step dt w-100 relative">
                <div className="dtc v-mid wedding-gray ph3 ph4-l">
                  <div className="tj pv5 pv6-ns ph5-ns lh-copy w-60-ns fl-ns f3"></div>
                </div>
              </section> */}

      {/* <section className="vh-100 dt w-100 relative no-selection">
        <div className="dtc v-mid tc">
          <div className="crawl-container libre pv5 pa6-ns top-0"></div>
        </div>
      </section> */}
    </Layout>
  )
}

export default StoryPage
