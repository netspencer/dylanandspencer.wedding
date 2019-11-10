import React, { FunctionComponent } from 'react'
import Link from 'next/link'

interface Props {
  title: string
  href: string
  final?: boolean
}

const NavigationItem: FunctionComponent<Props> = ({ title, href, final }) => (
  <>
    <Link href={href}>
      <a
        className={`link dim wedding-gray f5 f4-l dib ${
          final ? '' : 'mr2 mr4-l'
        }`}
        title={title}
      >
        {title}
      </a>
    </Link>
    <style jsx>{`
      @media (max-width: 320px) {
        a.link {
          font-size: 0.8rem;
        }
      }
    `}</style>
  </>
)

const Navigation: FunctionComponent = () => (
  <nav
    id="navbar"
    className="fixed top-0 db dt-l w-100 border-box pa3-ns ph5-l z-4 libre"
  >
    <Link href="/">
      <a
        className="db dtc-l v-mid wedding-gray link dim w-100 w-25-xl w-40-l tc tl-l mb2 mb0-l"
        title="Home"
      >
        <h1 className="fatface f2-l">Dylan &amp; Spencer</h1>
      </a>
    </Link>
    <div className="db dtc-l v-mid w-100 w-75-xl w-60-l tc tr-l">
      <NavigationItem href="/story" title="Our Story" />
      <NavigationItem href="/wedding" title="The Big Day" />
      <NavigationItem href="/registry" title="Registry" />
      <NavigationItem final href="/rsvp" title="RSVP" />
    </div>
  </nav>
)

export default Navigation
