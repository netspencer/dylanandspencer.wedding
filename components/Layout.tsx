import React, { FunctionComponent, createContext, useContext } from 'react'
import Head from 'next/head'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useToggle } from 'react-use'

import Header from './Header'

interface Props {
  className?: string
}

const initialValue: [boolean, (nextValue?: any) => void] = [false, () => {}]
export const NavVisibility = createContext(initialValue)

const BlurContainer: FunctionComponent<{ className?: string }> = ({
  children,
  className
}) => {
  const [isNavVisible] = useContext(NavVisibility)
  return (
    <main className={classNames({ blur: isNavVisible }, className)}>
      {children}
      <style jsx>{`
        main {
          transition: all 0.3s;
        }
        .blur {
          filter: blur(25px);
        }
      `}</style>
    </main>
  )
}

const Layout: FunctionComponent<Props> = ({ children, className }) => {
  const { pathname } = useRouter()

  return (
    <NavVisibility.Provider value={useToggle(false)}>
      <div className={classNames('relative')}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        </Head>
        <Header sticky={pathname != '/'} />
        <BlurContainer className={className} children={children} />
      </div>
    </NavVisibility.Provider>
  )
}

export default Layout
