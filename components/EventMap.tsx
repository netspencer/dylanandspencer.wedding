import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoibWFnbWFtZWRpYSIsImEiOiJjazZkcTNrMGMxNTYwM2twc2l2dmFzejB4In0.2g01wKf-iMyfCUaD0Xl3IA'
})

const EventMap: FunctionComponent = () => (
  <div className={classNames('p-8')}>
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{ width: '100%', height: '600px' }}
      center={[-118.655891, 34.286331]}
      zoom={[10]}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-118.655891, 34.286331]} />
      </Layer>
    </Map>
  </div>
)

export default EventMap
