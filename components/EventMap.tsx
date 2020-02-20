import React, { FunctionComponent } from 'react'
import classNames from 'classnames'

const EventMap: FunctionComponent = () => (
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

export default EventMap
