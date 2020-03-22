import React from "react"
import PropTypes from "prop-types"

function InfoPopover(props) {
  const { info, name } = props

  const { confirmed, deaths, recovered } = info

  return (
    <div className="text-white absolute z-10 py-3 pl-4 pr-8 left-0 top-0 bg-gray-darker m-4 flex flex-col">
      <p className="text-white font-semibold">{name}</p>
      <p className="text-gray-lighter text-sm">
        Підтверджено: <span className="text-red">{confirmed}</span>
      </p>
      <p className="text-gray-lighter text-sm">
        Смерті: <span className="text-white">{deaths}</span>
      </p>
      <p className="text-gray-lighter text-sm">
        Одужали: <span className="text-green">{recovered}</span>
      </p>
    </div>
  )
}

InfoPopover.propTypes = {
  info: PropTypes.instanceOf(Object).isRequired,
  name: PropTypes.string
}

export default InfoPopover
