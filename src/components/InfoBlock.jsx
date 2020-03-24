import React from "react"
import PropTypes from "prop-types"
import { CircularProgress, withStyles } from "@material-ui/core"
import COLORS from "../styles/colors"
import InfoList from "./InfoList"

function InfoBlock(props) {
  const {
    label,
    value,
    valueColor,
    className,
    loading,
    virusData,
    dataKey
  } = props

  const CircularProgressStyled = withStyles({
    root: {
      color: COLORS[valueColor]
    }
  })(CircularProgress)

  const infoListData = !loading
    ? virusData
        .filter(item => item.info[dataKey] !== 0)
        .map(item => ({
          name: item.name,
          value: item.info[dataKey]
        }))
        .sort((a, b) => b.value - a.value)
    : []

  return (
    <div className={`${className}`}>
      <div
        className={`w-full bg-gray-darker py-4 px-1 inline-flex flex-col items-center border-gray-middle border border-solid`}
      >
        <p className="text-sm xs:text-md md:text-lg lg:text-xl text-white text-center font-semibold">
          {label}
        </p>
        {loading ? (
          <CircularProgressStyled />
        ) : (
          <p
            className={`text-5xl font-semibold leading-snug text-${valueColor}`}
          >
            {value}
          </p>
        )}
      </div>
      {infoListData.length > 0 && (
         <InfoList data={infoListData} valueColor={valueColor} />
      )}
    </div>
  )
}

InfoBlock.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  valueColor: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  virusData: PropTypes.instanceOf(Array),
  dataKey: PropTypes.string.isRequired
}

export default InfoBlock
