import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import dynamic from 'next/dynamic'

const EventMap = dynamic(() => import('./EventMap'), { ssr: false })

const P: FunctionComponent = ({ children }) => (
  <p
    className={classNames(
      'lg:text-xl',
      'md:text-lg',
      'text-base',
      'my-4',
      'md:my-6'
    )}
  >
    {children}
  </p>
)

const WeddingDetails: FunctionComponent = () => (
  <>
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
        <EventMap />
      </div>
    </section>
    <section
      className={classNames(
        'container',
        'mx-auto',
        'px-2',
        'pb-4',
        'sm:px-8',
        'text-center',
        'libre'
      )}
    >
      <div className={classNames('md:w-2/3', 'w-full', 'mx-auto')}>
        <P>
          <span className={classNames('block', 'sm:inline')}>
            You are cordially invited to{' '}
          </span>
          <span className={classNames('block', 'sm:inline')}>
            the wedding celebration of
          </span>
          <span className={classNames('block')}>
            Dylan Newman & Spencer Schoeben
          </span>
        </P>
        <P>Sunday May 24th 2020 at 5:30pm</P>
        <P>
          Location:{' '}
          <a
            className={classNames('text-blue-800')}
            target="_blank"
            href="http://maps.apple.com/?address=2940,Kuehner+Drive,Santa+Susana,CA,93063"
          >
            Hummingbird Nest Ranch
          </a>
          <br />
          <a
            className={classNames('text-blue-800')}
            target="_blank"
            href="http://maps.apple.com/?address=2940,Kuehner+Drive,Santa+Susana,CA,93063"
          >
            2940 Kuehner Drive
            <br />
            Santa Susana, CA 93063
          </a>
          <span
            className={classNames(
              'block',
              'text-xs',
              'md:text-sm',
              'lg:text-base'
            )}
          >
            Click the address to get directions.
          </span>
        </P>
        <P>Ceremony is located at The Sitting Bull.</P>
        <P>
          We kindly ask women to wear flats or wedges because the wedding is on
          grass.
        </P>
        <P>
          Accommodations: We have a discounted rate at{' '}
          <a
            className={classNames('font-bold', 'text-blue-800')}
            href="https://gc.synxis.com/rez.aspx?Hotel=1919&Chain=5154&arrive=5/22/2020&depart=5/24/2020&adult=1&child=0&group=052220NEWM"
            target="_blank"
          >
            Avalon Hotel in Beverly Hills.
          </a>
          <span
            className={classNames(
              'block',
              'text-xs',
              'md:text-sm',
              'lg:text-base'
            )}
          >
            Click on the link to book with our discounted rate.
          </span>
        </P>
        <P>Estimated travel time from Hotel is 40 minutes.</P>
        <P>So excited to see you there!</P>
      </div>
    </section>
  </>
)

export default WeddingDetails

{
  /* <h1 className={classNames('lg:text-3xl', 'md:text-2xl', 'text-lg')}>
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
      <div
        className={classNames('md:w-1/2', 'lg:w-2/3', 'w-full', 'md:mr-8')}
      ></div>
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
      </div> */
}
