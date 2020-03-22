import React from "react"
import PropTypes from "prop-types"
import { Button } from "@material-ui/core"

function Marker(props) {
  const { markerSize, onClick, info, zIndex } = props

  const sizeStyles = {
    width: markerSize,
    height: markerSize,
    marginLeft: `-${markerSize / 2}px`,
    marginTop: `-${markerSize / 2}px`,
    minWidth: "0",
    zIndex
  }

  return (
    <Button
      className="bg-red rounded-full opacity-75 border border-white border-solid leading-none text-white font-bold"
      onClick={onClick}
      style={sizeStyles}
    >
      {info.confirmed}
    </Button>
  )
}

Marker.propTypes = {
  markerSize: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  info: PropTypes.instanceOf(Object).isRequired,
  zIndex: PropTypes.number.isRequired
}

export default Marker
