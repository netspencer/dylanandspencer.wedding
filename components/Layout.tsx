import React, { FunctionComponent } from 'react'
import Head from 'next/head'
import Header from './Header'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useToggle } from 'react-use'

interface Props {
  title?: string
}

const Layout: FunctionComponent<Props> = ({
  children,
  title = 'May 24, 2020'
}) => {
  const { pathname } = useRouter()
  const [isNavVisible, toggleNavVisibility] = useToggle(false)

  return (
    <div className={classNames('relative')}>
      <Head>
        <title>Dylan &amp; Spencer | {title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <Header
        isNavVisible={isNavVisible}
        toggleNavVisibility={toggleNavVisibility}
        sticky={pathname != '/'}
      />
      <main className={classNames({ blur: isNavVisible })}>{children}</main>
      <style jsx>{`
        main {
          transition: all 0.3s;
        }
        .blur {
          filter: blur(15px);
        }
      `}</style>
    </div>
  )
}

export default Layout
