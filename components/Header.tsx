import React, { FunctionComponent, useContext } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { useRouter } from 'next/router'

import { NavVisibility } from './Layout'

import navigation from '../content/navigation'

const RootNavigationItem: FunctionComponent<{
  onClick?: () => void
}> = ({ onClick }) => (
  <Link href="/">
    <a
      onClick={onClick}
      className={classNames('wedding-gray', 'flex-shrink-0')}
      title="Home"
    >
      <h1
        className={classNames(
          'font-slab',
          'text-3xl',
          'lg:text-4xl',
          'font-bold'
        )}
      >
        Dylan &amp; Spencer
      </h1>
    </a>
  </Link>
)

const NavigationItem: FunctionComponent<{
  title: string
  href: string
  mobile?: boolean
  onClick?: () => void
}> = ({ title, href, mobile, onClick }) => {
  const router = useRouter()
  return (
    <Link href={href}>
      <a
        onClick={onClick}
        className={classNames(
          'block',
          'font-serif',
          'wedding-gray',
          { 'text-xl': mobile },
          { 'lg:text-lg': !mobile },
          {
            'ml-4': !mobile,
            'xl:ml-8': !mobile,
            'my-3': mobile,
            'font-bold': router.pathname == href
          }
        )}
        title={title}
      >
        {title}
      </a>
    </Link>
  )
}

const DesktopNav: FunctionComponent = () => (
  <nav className={classNames('hidden', 'sm:flex', 'flex-wrap', 'justify-end')}>
    {navigation.pages.map(page => (
      <NavigationItem key={page.href} href={page.href} title={page.title} />
    ))}
  </nav>
)

const NavToggle: FunctionComponent<{
  toggle: (nextValue?: any) => void
  hidden: boolean
}> = ({ toggle, hidden }) => (
  <button
    className={classNames(
      'sm:hidden',
      'focus:outline-none',
      'p-0',
      'hamburger',
      'hamburger--collapse',
      {
        'is-active': !hidden
      }
    )}
    type="button"
    onClick={toggle}
  >
    <span className={classNames('hamburger-box')}>
      <span className={classNames('hamburger-inner')}></span>
    </span>
  </button>
)

const MobileNav: FunctionComponent<{
  hidden: boolean
  onSelect: () => void
}> = ({ hidden, onSelect }) => (
  <nav
    style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
    className={classNames(
      { hidden: hidden, block: !hidden },
      'left-0',
      'top-0',
      'bottom-0',
      'fixed',
      'sm:hidden',
      'z-40',
      'min-h-screen',
      'flex',
      'flex-col',
      'w-full',
      'items-center',
      'justify-center',
      'h-screen'
    )}
  >
    {navigation.pages.map(page => (
      <NavigationItem
        key={page.href}
        onClick={onSelect}
        mobile
        href={page.href}
        title={page.title}
      />
    ))}
    {!hidden && (
      <style jsx global>{`
        html,
        body {
          height: 100%;
          overflow: hidden;
        }
      `}</style>
    )}
  </nav>
)

const Header: FunctionComponent<{
  sticky: boolean
}> = ({ sticky }) => {
  const router = useRouter()
  const [isNavVisible, toggleNavVisibility] = useContext(NavVisibility)
  return (
    <>
      <header
        className={classNames(
          { sticky: sticky, fixed: !sticky },
          'top-0',
          'w-full',
          'flex',
          'items-center',
          'justify-between',
          'p-4',
          'sm:p-8',
          { 'has-bg': !isNavVisible },
          { 'z-50': isNavVisible || router.pathname != '/' }
        )}
      >
        <RootNavigationItem
          onClick={() => {
            toggleNavVisibility(false)
          }}
        />
        <DesktopNav />
        <NavToggle hidden={!isNavVisible} toggle={toggleNavVisibility} />
      </header>
      <MobileNav
        onSelect={() => {
          toggleNavVisibility(false)
        }}
        hidden={!isNavVisible}
      />
      <style jsx>{`
        .has-bg {
          background: #faf6e9ee;
        }
      `}</style>
    </>
  )
}

export default Header
