import React, { FunctionComponent, useContext } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { NavVisibility } from './Layout'
import { useRouter } from 'next/router'

const RootNavigationItem: FunctionComponent<{
  onClick?: () => void
}> = ({ onClick }) => (
  <Link href="/">
    <a onClick={onClick} className={classNames('wedding-gray')} title="Home">
      <h1
        className={classNames(
          'fatface',
          'text-3xl',
          'sm:text-4xl',
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
}> = ({ title, href, final, mobile, onClick }) => {
  const router = useRouter()
  return (
    <Link href={href}>
      <a
        onClick={onClick}
        className={classNames('libre', 'wedding-gray', 'text-xl', {
          'mr-8': !mobile && !final,
          'my-3': mobile,
          'font-bold': router.pathname == href
        })}
        title={title}
      >
        {title}
      </a>
    </Link>
  )
}

const DesktopNav: FunctionComponent = () => (
  <nav className={classNames('hidden', 'sm:block')}>
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
  <div className={classNames('block', 'sm:hidden')} onClick={toggle}>
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
          'sm:px-16',
          { 'has-bg': !isNavVisible },
          { 'z-50': router.pathname != '/' }
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
