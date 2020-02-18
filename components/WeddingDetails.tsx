import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import dynamic from 'next/dynamic'

const EventMap = dynamic(() => import('./EventMap'), { ssr: false })

const WeddingDetails: FunctionComponent = () => (
  <>
    <section
      className={classNames(
        'container',
        'mx-auto',
        'px-2',
        'py-4',
        'sm:px-8',
        'text-center',
        'libre'
      )}
    >
      <h1 className={classNames('lg:text-2xl', 'md:text-xl')}>The Wedding</h1>
      <h1 className={classNames('lg:text-3xl', 'md:text-2xl', 'text-lg')}>
        <span className={classNames('sm:inline', 'block')}>
          Dylan Michelle Newman{' '}
        </span>
        <span className={classNames('sm:inline', 'block')}>
          &amp; Spencer Davis Schoeben
        </span>
      </h1>
      <h1
        className={classNames(
          'lg:text-4xl',
          'md:text-3xl',
          'text-xl',
          'font-bold'
        )}
      >
        <span className={classNames('sm:inline', 'block')}>
          Sunday, May 24th, 2020{' '}
        </span>
        <span className={classNames('sm:inline', 'block')}>at 5:30pm</span>
      </h1>
    </section>
    <section
      className={classNames(
        'container',
        'mx-auto',
        'py-4',
        'sm:px-8',
        'flex',
        'justify-center',
        'items-center',
        'flex-wrap',
        'md:flex-no-wrap'
      )}
    >
      <div className={classNames('md:w-1/2', 'lg:w-2/3', 'w-full', 'md:mr-8')}>
        <EventMap />
      </div>
      <div
        className={classNames(
          'md:w-1/2',
          'lg:w-1/3',
          'w-full',
          'libre',
          'text-xl',
          'xl:text-2xl',
          'text-center',
          'md:text-left',
          'mt-8',
          'md:mt-0'
        )}
      >
        <h1 className={classNames('font-bold')}>Hummingbird Nest Ranch</h1>
        <h2>
          2940 Kuehner Drive
          <br />
          Santa Susana, CA 93063
        </h2>
      </div>
    </section>
  </>
)

export default WeddingDetails
