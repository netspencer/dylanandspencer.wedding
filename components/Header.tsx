import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

const RootNavigationItem: FunctionComponent = () => (
  <Link href="/">
    <a className={classNames('wedding-gray')} title="Home">
      <h1
        className={classNames(
          'fatface',
          'text-3xl',
          'md:text-4xl',
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
  final?: boolean
  mobile?: boolean
}> = ({ title, href, final, mobile }) => (
  <>
    <Link href={href}>
      <a
        className={classNames('libre', 'wedding-gray', 'text-xl', {
          'mr-8': !mobile && !final
        })}
        title={title}
      >
        {title}
      </a>
    </Link>
  </>
)

const DesktopNav: FunctionComponent = () => (
  <nav className={classNames('hidden', 'md:block')}>
    <NavigationItem href="/story" title="Our Story" />
    <NavigationItem href="/memories" title="Memories" />
    <NavigationItem href="/wedding" title="The Big Day" />
    <NavigationItem href="/registry" title="Registry" />
    <NavigationItem final href="/rsvp" title="RSVP" />
  </nav>
)

const NavToggle: FunctionComponent<{
  toggle: (nextValue?: any) => void
  hidden: boolean
}> = ({ toggle, hidden }) => (
  <div className={classNames('block', 'md:hidden')} onClick={toggle}>
    {hidden ? 'OFF' : 'ON'}
  </div>
)

const MobileNav: FunctionComponent<{ hidden: boolean }> = ({ hidden }) => (
  <nav
    style={{ backgroundColor: 'rgba(255,255,255,0.85)' }}
    className={classNames(
      { hidden: hidden, block: !hidden },
      'left-0',
      'top-0',
      'bottom-0',
      'fixed',
      'md:hidden',
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
    <NavigationItem mobile href="/story" title="Our Story" />
    <NavigationItem mobile href="/memories" title="Memories" />
    <NavigationItem mobile href="/wedding" title="The Big Day" />
    <NavigationItem mobile href="/registry" title="Registry" />
    <NavigationItem mobile href="/rsvp" title="RSVP" />
  </nav>
)

const Header: FunctionComponent<{
  sticky: boolean
  toggleNavVisibility: (nextValue?: any) => void
  isNavVisible: boolean
}> = ({ sticky, isNavVisible, toggleNavVisibility }) => {
  return (
    <>
      <header
        className={classNames(
          'fixed',
          { sticky: sticky },
          'top-0',
          'w-full',
          'flex',
          'items-center',
          'justify-between',
          'p-4',
          'md:p-8',
          'md:px-16',
          'z-50'
        )}
      >
        <RootNavigationItem />
        <DesktopNav />
        <NavToggle hidden={!isNavVisible} toggle={toggleNavVisibility} />
      </header>
      <MobileNav hidden={!isNavVisible} />
    </>
  )
}

export default Header
