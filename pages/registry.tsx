import React from 'react'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import Registry from '../components/Registry'

const RegistryPage: NextPage = () => {
  return (
    <Layout>
      <Registry />
    </Layout>
  )
}

export default RegistryPage
