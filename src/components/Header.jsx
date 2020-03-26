import React from "react"

function Header(props) {
  const { className } = props

  return (
    <div
      className={`bg-gray-darker border-gray-middle border border-solid w-full px-2 py-2 text-white text-lg ${className}`}
    >
      Коронавірус COVID-19 в Україні
    </div>
  )
}

export default Header
