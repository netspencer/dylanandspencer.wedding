import React from 'react'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import Postcard from '../components/Postcard'

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <section className="vh-100 dt w-100 relative no-selection">
        <div className="dtc v-mid tc">
          <Postcard />
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
