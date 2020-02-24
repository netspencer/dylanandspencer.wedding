import React, {
  FunctionComponent,
  createContext,
  useContext,
  useEffect
} from 'react'
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
  // @ts-ignore
  const ga = typeof window != 'undefined' ? window.ga : null
  const { pathname } = useRouter()
  useEffect(() => {
    if (ga) {
      ga('set', 'page', pathname)
      ga('send', 'pageview')
    }
  }, [pathname])

  return (
    <NavVisibility.Provider value={useToggle(false)}>
      <div className={classNames('relative')}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
            ga('create', 'UA-158956650-1', 'auto');
            ga('send', 'pageview');
          `
            }}
          />
          <script async src="https://www.google-analytics.com/analytics.js" />
        </Head>
        <Header sticky={pathname != '/'} />
        <BlurContainer className={className} children={children} />
      </div>
    </NavVisibility.Provider>
  )
}

export default Layout
