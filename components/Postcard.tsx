import 'resize-observer-polyfill'
import React, { FunctionComponent } from 'react'

const Postcard: FunctionComponent = () => (
  <div id="postcard_container">
    <a id="postcard" className="z-5 tilter center tilter--2">
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
          width: 75vw;
          height: 50vw;
        }
      }

      @media (orientation: portrait) {
        #postcard {
          width: 75vw;
          height: 112.5vw;
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

export default Postcard
