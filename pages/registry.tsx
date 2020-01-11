import React from 'react'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import Iframe from 'iframe-resizer-react'

const RegistryPage: NextPage = () => {
  return (
    <Layout>
      <section className="vh-100 dt w-100 relative no-selection">
        <div className="dtc v-mid tc">
          <Iframe
            className="w-full"
            bodyBackground="rgba(0,0,0,0)"
            src="https://widget.zola.com/v1/widget/registry/dylanandspencer/html"
          />
        </div>
      </section>
    </Layout>
  )
}

export default RegistryPage
