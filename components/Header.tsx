import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

const RootNavigationItem: FunctionComponent<{
  onClick?: () => void
}> = ({ onClick }) => (
  <Link href="/">
    <a onClick={onClick} className={classNames('wedding-gray')} title="Home">
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
  onClick?: () => void
}> = ({ title, href, final, mobile, onClick }) => (
  <>
    <Link href={href}>
      <a
        onClick={onClick}
        className={classNames('libre', 'wedding-gray', 'text-xl', {
          'mr-8': !mobile && !final,
          'my-3': mobile
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
    <NavigationItem onClick={onSelect} mobile href="/story" title="Our Story" />
    <NavigationItem
      onClick={onSelect}
      mobile
      href="/memories"
      title="Memories"
    />
    <NavigationItem
      onClick={onSelect}
      mobile
      href="/wedding"
      title="The Big Day"
    />
    <NavigationItem
      onClick={onSelect}
      mobile
      href="/registry"
      title="Registry"
    />
    <NavigationItem onClick={onSelect} mobile href="/rsvp" title="RSVP" />
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
    </>
  )
}

export default Header
