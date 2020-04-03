import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { OPENMAP_API_KEY } from 'constants/common'

function GMaps({ data }) {
  const points = data.slice(1)
  const [, , lt, ln] = points[0]
  return (
    <Map id="map" center={{ lat: lt, lng: ln }} zoom={12}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points.map(([name, , lat, lng ]) => (
        <Marker position={{ lat, lng }}>
          <Popup>{name}</Popup>
        </Marker>
      ))}
    </Map>
  )
}

GMaps.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.oneOf([
      PropTypes.number,
      PropTypes.string,
    ]),
  ).isRequired
}

export default GMaps
