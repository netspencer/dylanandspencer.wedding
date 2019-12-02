import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

interface Props {
  title: string
  href: string
  final?: boolean
}

const NavigationItem: FunctionComponent<Props> = ({ title, href, final }) => (
  <>
    <Link href={href}>
      <a
        className={classNames('libre', 'wedding-gray', 'text-xl', {
          'mr-8': !final
        })}
        title={title}
      >
        {title}
      </a>
    </Link>
  </>
)

const Navigation: FunctionComponent = () => (
  <nav
    className={classNames(
      'sticky',
      'top-0',
      'w-full',
      'flex',
      'items-center',
      'justify-between',
      'p-8',
      'px-16'
    )}
  >
    <Link href="/">
      <a className={classNames('wedding-gray')} title="Home">
        <h1 className={classNames('fatface', 'text-4xl', 'font-bold')}>
          Dylan &amp; Spencer
        </h1>
      </a>
    </Link>
    <div className="">
      <NavigationItem href="/story" title="Our Story" />
      <NavigationItem href="/memories" title="Memories" />
      <NavigationItem href="/wedding" title="The Big Day" />
      <NavigationItem href="/registry" title="Registry" />
      <NavigationItem final href="/rsvp" title="RSVP" />
    </div>
  </nav>
)

export default Navigation
