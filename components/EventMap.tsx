import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoibWFnbWFtZWRpYSIsImEiOiJjazZkcTNrMGMxNTYwM2twc2l2dmFzejB4In0.2g01wKf-iMyfCUaD0Xl3IA'
})

const EventMap: FunctionComponent = () => (
  <div className={classNames('sm:p-8')}>
    <article className={classNames('relative')}>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{ position: 'absolute' }}
        className={classNames(
          'w-full',
          'absolute',
          'left-0',
          'right-0',
          'top-0',
          'bottom-0',
          'h-full',
          'h-64'
        )}
        center={[-118.655891, 34.286331]}
        zoom={[10]}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-118.655891, 34.286331]} />
        </Layer>
      </Map>
    </article>
    <style jsx>{`
      article {
        padding-top: 100%;
      }
      @media (min-width: 640px) {
        article {
          padding-top: 66%;
        }
      }
    `}</style>
  </div>
)

export default EventMap
