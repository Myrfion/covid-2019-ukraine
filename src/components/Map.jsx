import React, { useState } from "react"
import PropTypes from "prop-types"
import GoogleMapReact from "google-map-react"
import Marker from "./Marker"
import InfoPopover from "./InfoPopover"

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

let defaultZoom = 5.8

const screenWidth = window.screen.width

if (screenWidth <= 320) {
  defaultZoom = 4.5
} else if (screenWidth <= 420) {
  defaultZoom = 4.5
} else if (screenWidth <= 768) {
  defaultZoom = 4
}

const defaultLat = 48.3794
const defaultLng = 31.1656

const defaultMarkerSize = 25
const pxPerConfirmed = 2.5

function getMarkerSize(confirmed) {
  return defaultMarkerSize + pxPerConfirmed * confirmed
}

function Map(props) {
  const { data, className, loading } = props

  const [selected, setSelected] = useState(null)

  function onMarkerClick(key) {
    const selectedMarker = data.find(marker => marker.key === key)

    setSelected(selectedMarker)
  }

  return (
    <div
      className={`mt-4 lg:mx-2 border-gray-middle border relative ${className}`}
      style={{ height: 75 + "vh" }}
    >
      {selected && <InfoPopover {...selected} />}

      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={{ lat: defaultLat, lng: defaultLng }}
        defaultZoom={defaultZoom}
        options={{ styles: require("../assets/mapStyles.json") }}
      >
        {!loading &&
          data &&
          data.map(marker => {
            const markerSize = getMarkerSize(marker.info.confirmed)

            return (
              <Marker
                markerSize={markerSize}
                onClick={() => onMarkerClick(marker.key)}
                {...marker}
              />
            )
          })}
      </GoogleMapReact>
    </div>
  )
}

Map.propTypes = {
  data: PropTypes.instanceOf(Array),
  className: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Map
