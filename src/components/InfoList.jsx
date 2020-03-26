import React from "react"
import PropTypes from "prop-types"

function InfoList(props) {
  const { data, valueColor } = props

  return (
    <div
      className={`bg-gray-darker p-4 mt-4 border-gray-middle border border-solid hidden lg:flex flex-col overflow-scroll`}
    >
      {data.map(item => (
        <p className="text-gray-lighter text-md" key={item.name}>
          <span className={`text-${valueColor}`}>{item.value}</span> {item.name}
        </p>
      ))}
    </div>
  )
}

InfoList.propTypes = {
  data: PropTypes.instanceOf(Array),
  valueColor: PropTypes.string
}

export default InfoList
