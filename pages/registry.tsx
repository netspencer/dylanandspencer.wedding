import React from 'react'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import Registry from '../components/Registry'

const RegistryPage: NextPage = () => {
  return (
    <Layout>
      <section className="vh-100 dt w-100 relative no-selection">
        <div className="dtc v-mid tc">
          <Registry />
        </div>
      </section>
    </Layout>
  )
}

export default RegistryPage
