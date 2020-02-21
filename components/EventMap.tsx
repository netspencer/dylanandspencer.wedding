import React, { FunctionComponent } from 'react'
import classNames from 'classnames'

const Map: FunctionComponent = () => (
  <article
    className={classNames(
      'relative',
      'p-2',
      'md:p-4',
      'bg-wedding-tan',
      'border-solid',
      'border-4'
    )}
  >
    <figure className={classNames('relative')}>
      <img
        className={classNames('absolute', 'top-0')}
        draggable={false}
        src="/images/map.png"
        alt="map"
      />
    </figure>
    <style jsx>{`
      article {
        border-color: #b2aea1;
      }
      figure {
        padding-top: 75%;
      }
    `}</style>
  </article>
)

const EventMap: FunctionComponent = () => (
  <section
    className={classNames(
      'container',
      'mx-auto',
      'px-2',
      'pt-4',
      'pb-2',
      'sm:px-8',
      'text-center',
      'libre'
    )}
  >
    <div className={classNames('md:w-2/3', 'w-full', 'mx-auto')}>
      <a
        target="_blank"
        href="http://maps.apple.com/?address=2940,Kuehner+Drive,Santa+Susana,CA,93063"
      >
        <Map />
      </a>
    </div>
  </section>
)

export default EventMap
