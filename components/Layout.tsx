import React, { FunctionComponent } from 'react'
import Head from 'next/head'
import Navigation from './Navigation'

interface Props {
  title?: string
}

const Layout: FunctionComponent<Props> = ({
  children,
  title = 'May 24, 2020'
}) => (
  <>
    <Head>
      <title>Dylan &amp; Spencer | {title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    </Head>
    <main className="relative">
      <Navigation />
      {children}
    </main>
    <style jsx global>{``}</style>
  </>
)

export default Layout
