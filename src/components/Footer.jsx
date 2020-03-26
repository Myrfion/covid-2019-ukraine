import React from "react"

function Footer(props) {
  const { className } = props

  return (
    <div
      className={`bg-gray-darker border-gray-middle border border-solid w-full py-2 text-sm text-gray-lighter text-center w-full lg:mt-auto ${className}`}
    >
      © 2020 Tymur Levtsun levtsuntimur@gmail.com
    </div>
  )
}

export default Footer
