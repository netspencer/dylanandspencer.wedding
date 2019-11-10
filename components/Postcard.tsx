import 'resize-observer-polyfill'
import React, { FunctionComponent } from 'react'
import useTiltEffect from '../lib/useTiltEffect'

const Postcard: FunctionComponent = () => {
  const { containerRef, imageRef, captionRef, shineRef } = useTiltEffect()

  return (
    <section>
      <article ref={containerRef} className="z-5 center">
        <figure ref={imageRef}>
          <img src="/photoshoot/12.jpg" alt="Spencer and Dylan in a park" />
          <div className="shine">
            <div ref={shineRef}></div>
          </div>
          <figcaption
            ref={captionRef}
            className="db-ns dn tl absolute bottom-0 w-100 pa5"
          >
            <h3 className="fatface f-subheadline-l f1-m f2 wedding-cream fw4 lh-title ma0 mb2">
              May 24, 2020
            </h3>
            <p className="f3-l f4 libre ma0 lh-copy wedding-cream">
              Hummingbird Nest Ranch &bull; Simi Valley, CA
            </p>
          </figcaption>
        </figure>
      </article>
      <aside className="dn-ns db mt3 w-100 pa3 wedding-gray">
        <h3 className="fatface f2 fw4 lh-title ma0 mb2">May 24, 2020</h3>
        <p className="f5 f4-l libre ma0 lh-copy">
          Hummingbird Nest Ranch
          <br />
          Simi Valley, CA
        </p>
      </aside>
      <style jsx>{`
        @media (orientation: landscape) {
          article {
            perspective: 140vh;
            width: 112.5vh;
            height: 75vh;
          }
        }

        @media (max-aspect-ratio: 6/4) {
          article {
            perspective: 93.75vw;
            width: 75vw;
            height: 50vw;
          }
        }

        @media (orientation: portrait) {
          article {
            perspective: 62vh;
            width: 50vh;
            height: 75vh;
            margin-top: 2vh;
          }
        }

        @media (max-aspect-ratio: 4/6) {
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

        .shine {
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }

        .shine div {
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
