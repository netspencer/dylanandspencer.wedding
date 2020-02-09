import React from 'react'
import { NextPage } from 'next'
import classNames from 'classnames'

import Layout from '../components/Layout'
import WeddingParty from '../components/WeddingParty'

const WeddingPartyPage: NextPage = () => {
  return (
    <Layout className={classNames('pb-12', 'md:pb-32')}>
      <WeddingParty />
    </Layout>
  )
}

export default WeddingPartyPage
