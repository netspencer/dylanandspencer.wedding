import 'resize-observer-polyfill'
import React, { FunctionComponent } from 'react'
import useTiltEffect from '../lib/useTiltEffect'
import classNames from 'classnames'

const Postcard: FunctionComponent = () => {
  const { containerRef, imageRef, captionRef, shineRef } = useTiltEffect()

  return (
    <section className={classNames('select-none', 'relative')}>
      <article ref={containerRef} className={classNames('mx-auto')}>
        <figure ref={imageRef}>
          <img src="/photoshoot/12.jpg" alt="Spencer and Dylan in a park" />
          <summary>
            <details ref={shineRef}></details>
          </summary>
          <figcaption
            ref={captionRef}
            className={classNames(
              'hidden',
              'md:block',
              'absolute',
              'bottom-0',
              'w-full',
              'p-16'
            )}
          >
            <h3
              className={classNames(
                'fatface',
                'text-5xl',
                'lg:text-7xl',
                'wedding-cream',
                'font-normal'
              )}
            >
              May 24, 2020
            </h3>
            <p
              className={classNames(
                'text-xl',
                'lg:text-2xl',
                'wedding-cream',
                'libre'
              )}
            >
              <span className={classNames('block', 'lg:inline')}>
                Hummingbird Nest Ranch
              </span>
              <span className={classNames('hidden', 'lg:inline')}>
                {' '}
                &bull;{' '}
              </span>
              <span className={classNames('block', 'lg:inline')}>
                Simi Valley, CA
              </span>
            </p>
          </figcaption>
        </figure>
      </article>
      <aside
        className={classNames(
          'block',
          'md:hidden',
          'mt-4',
          'w-full',
          'p-2',
          'wedding-gray',
          'text-center'
        )}
      >
        <h3 className={classNames('fatface', 'text-3xl')}>May 24, 2020</h3>
        <p className={classNames('text-l', 'libre', 'leading-normal')}>
          Hummingbird Nest Ranch
          <br />
          Simi Valley, CA
        </p>
      </aside>
      <style jsx>{`
        section {
          position: relative;
          top: 50vh;
        }
        @media (orientation: landscape) {
          section {
            margin-top: -37.5vh;
          }
          article {
            perspective: 140vh;
            width: 112.5vh;
            height: 75vh;
          }
        }

        @media (max-aspect-ratio: 6/4) {
          section {
            margin-top: -25vw;
          }
          article {
            perspective: 93.75vw;
            width: 75vw;
            height: 50vw;
          }
        }

        @media (orientation: portrait) {
          section {
            margin-top: -37.5vh;
          }
          article {
            perspective: 62vh;
            width: 50vh;
            height: 75vh;
            margin-top: 2vh;
          }
        }

        @media (max-aspect-ratio: 4/6) {
          section {
            margin-top: -56.25vw;
          }
          article {
            perspective: 93.75vw;
            width: 75vw;
            height: 112.5vw;
            margin-top: 7vh;
          }
        }

        @media (max-height: 800px) and (orientation: portrait) {
          article {
            margin-top: 12vh;
          }
          aside h3 {
            font-size: 1.4rem;
          }
          aside p {
            font-size: 0.75rem;
          }
        }

        @media (max-height: 700px) and (orientation: portrait) {
          article {
            margin-top: 15vh;
          }
          aside {
            margin-top: 0;
          }
        }

        @media (max-height: 600px) and (orientation: portrait) {
          section {
            margin-top: -30vh;
          }
          article {
            perspective: 50vh;
            width: 40vh;
            height: 60vh;
            margin-top: 20vh;
          }
        }

        article {
          position: relative;
          display: block;
          flex: none;
          color: #fff;
        }

        article * {
          pointer-events: none;
        }

        article:hover,
        article:focus {
          color: #fff;
          outline: none;
        }

        figure,
        img {
          object-fit: cover;
          object-position: 75% center;
          display: block;
          width: 100%;
          height: 100%;
          margin: 0;
        }

        figure > * {
          transform: translateZ(0px); /* Force correct stacking order */
        }

        figure {
          position: relative;
        }

        figure::before {
          content: '';
          position: absolute;
          top: 5%;
          left: 5%;
          width: 90%;
          height: 90%;
          box-shadow: 0 80px 50px rgba(35, 32, 39, 0.5);
        }

        summary {
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }

        summary details {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background-image: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(255, 255, 255, 0.15) 50%,
            transparent 100%
          );
        }
      `}</style>
    </section>
  )
}

export default Postcard
