import React, { FunctionComponent, createContext, useContext } from 'react'
import Head from 'next/head'
import Header from './Header'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useToggle } from 'react-use'

interface Props {
  title?: string
}

const initialValue: [boolean, (nextValue?: any) => void] = [false, () => {}]
export const NavVisibility = createContext(initialValue)

const BlurContainer: FunctionComponent = ({ children }) => {
  const [isNavVisible] = useContext(NavVisibility)
  return (
    <main className={classNames({ blur: isNavVisible })}>
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

const Layout: FunctionComponent<Props> = ({
  children,
  title = 'May 24, 2020'
}) => {
  const { pathname } = useRouter()

  return (
    <NavVisibility.Provider value={useToggle(false)}>
      <div className={classNames('relative')}>
        <Head>
          <title>Dylan &amp; Spencer | {title}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        </Head>
        <Header sticky={pathname != '/'} />
        <BlurContainer children={children} />
      </div>
    </NavVisibility.Provider>
  )
}

export default Layout
