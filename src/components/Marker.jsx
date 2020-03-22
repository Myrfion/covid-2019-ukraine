import React from "react"
import { Button } from "@material-ui/core"

function Marker(props) {
  const { markerSize, onClick, info } = props

  const sizeStyles = {
    width: markerSize,
    height: markerSize,
    marginLeft: `-${markerSize / 2}px`,
    marginTop: `-${markerSize / 2}px`,
    minWidth: "0"
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

export default Marker
