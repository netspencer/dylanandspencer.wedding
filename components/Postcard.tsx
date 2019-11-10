import 'resize-observer-polyfill'
import React, { FunctionComponent, useRef, useEffect } from 'react'
import TiltEffect from '../lib/tilt'

const Postcard: FunctionComponent = () => {
  const ref = useRef()
  useEffect(() => {
    new TiltEffect(ref.current)
  }, [])
  return (
    <div id="postcard_container">
      <a ref={ref} id="postcard" className="z-5 tilter center tilter--2">
        <figure className="tilter__figure">
          <img className="tilter__image" src="/photoshoot/12.jpg" alt="img03" />
          <div className="tilter__deco tilter__deco--shine">
            <div></div>
          </div>
          <figcaption className="db-ns dn tilter__caption tl absolute bottom-0 w-100 pa5">
            <h3 className="fatface f-subheadline-l f1-m f2 wedding-cream fw4 lh-title ma0 mb2">
              May 24, 2020
            </h3>
            <p className="f3-l f4 libre ma0 lh-copy wedding-cream">
              Hummingbird Nest Ranch &bull; Simi Valley, CA
            </p>
          </figcaption>
        </figure>
      </a>
      <div id="cta-mobile" className="dn-ns db mt3 w-100 pa3 wedding-gray">
        <h3 className="fatface f2 fw4 lh-title ma0 mb2">May 24, 2020</h3>
        <p className="f5 f4-l libre ma0 lh-copy">
          Hummingbird Nest Ranch
          <br />
          Simi Valley, CA
        </p>
      </div>
      <style jsx>{`
        @media (orientation: landscape) {
          #postcard {
            perspective: 140vh;
            width: 112.5vh;
            height: 75vh;
          }
        }

        @media (max-aspect-ratio: 6/4) {
          #postcard {
            perspective: 93.75vw;
            width: 75vw;
            height: 50vw;
          }
        }

        @media (orientation: portrait) {
          #postcard {
            perspective: 62vh;
            width: 50vh;
            height: 75vh;
            margin-top: 2vh;
          }
        }

        @media (max-aspect-ratio: 4/6) {
          #postcard {
            perspective: 93.75vw;
            width: 75vw;
            height: 112.5vw;
            margin-top: 7vh;
          }
        }

        @media (max-height: 800px) and (orientation: portrait) {
          #postcard {
            margin-top: 12vh;
          }
          #cta-mobile h3 {
            font-size: 1.4rem;
          }
          #cta-mobile p {
            font-size: 0.75rem;
          }
        }

        @media (max-height: 700px) and (orientation: portrait) {
          #postcard {
            margin-top: 15vh;
          }
          #cta-mobile {
            margin-top: 0;
          }
        }

        @media (max-height: 600px) and (orientation: portrait) {
          #postcard {
            perspective: 50vh;
            width: 40vh;
            height: 60vh;
            margin-top: 20vh;
          }
        }

        .tilter {
          position: relative;
          display: block;
          flex: none;
          color: #fff;
        }

        .tilter * {
          pointer-events: none;
        }

        .tilter:hover,
        .tilter:focus {
          color: #fff;
          outline: none;
        }

        .tilter__figure,
        .tilter__image {
          object-fit: cover;
          object-position: 75% center;
          display: block;
          width: 100%;
          height: 100%;
          margin: 0;
        }

        .tilter__figure > * {
          transform: translateZ(0px); /* Force correct stacking order */
        }

        .tilter__figure {
          position: relative;
        }

        .tilter__figure::before {
          content: '';
          position: absolute;
          top: 5%;
          left: 5%;
          width: 90%;
          height: 90%;
          box-shadow: 0 80px 50px rgba(35, 32, 39, 0.5);
        }

        .tilter__deco {
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }

        .tilter__deco--shine div {
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
    </div>
  )
}

export default Postcard
