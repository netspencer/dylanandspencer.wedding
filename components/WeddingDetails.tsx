import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import dynamic from 'next/dynamic'

const EventMap = dynamic(() => import('./EventMap'), { ssr: false })

const WeddingDetails: FunctionComponent = () => (
  <section className={classNames('container', 'mx-auto')}>
    <EventMap />
    <h1>The Big Day</h1>
  </section>
)

export default WeddingDetails
