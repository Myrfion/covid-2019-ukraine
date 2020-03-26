import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import InfoBlock from "../components/InfoBlock"
import Map from "../components/Map"
import { fetchInfo } from "../store/actions/info"
import Header from "../components/Header"
import Footer from "../components/Footer"

function getTotal(list, key) {
  return list.reduce((acc, cur) => acc + cur.info[key], 0)
}

function MainPage(props) {
  const { getData, virusData, loading } = props

  useEffect(() => {
    getData()
  }, [])

  const totalConfirmed = !loading ? getTotal(virusData, "confirmed") : 0

  const totalDeaths = !loading ? getTotal(virusData, "deaths") : 0

  const totalRecovered = !loading ? getTotal(virusData, "recovered") : 0

  return (
    <div className="min-h-screen bg-black flex flex-col justify-between w-full items-center">
      <div className="grid items-start px-4 grid-cols-3 lg:grid-cols-6 grid-flow-row-dense gap-4 w-full">
        <Header className="col-span-3 lg:col-span-6 mt-4" />
        <InfoBlock
          className=" max-h-auto lg:cv-max-h-75vh col-span-1 order-1"
          label="Підтверджено"
          value={totalConfirmed}
          valueColor="red"
          loading={loading}
          virusData={virusData}
          dataKey="confirmed"
        />
        <Map
          loading={loading}
          data={virusData}
          className="w-full col-span-3 order-5 lg:order-2"
        />
        <InfoBlock
          className=" max-h-auto lg:cv-max-h-50vh col-span-1 order-3"
          label="Смерті"
          value={totalDeaths}
          valueColor="white"
          loading={loading}
          virusData={virusData}
          dataKey="deaths"
        />
        <InfoBlock
          className="max-h-auto lg:cv-max-h-50vh col-span-1 order-4"
          label="Одужали"
          value={totalRecovered}
          valueColor="green"
          loading={loading}
          virusData={virusData}
          dataKey="recovered"
        />
      </div>
      <div className="p-4 w-full">
        <Footer className="w-full" />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    virusData: state.info.data,
    loading: state.info.loading
  }
}

const mapDispatchToProps = {
  getData: fetchInfo
}

MainPage.propTypes = {
  getData: PropTypes.func.isRequired,
  virusData: PropTypes.instanceOf(Array).isRequired,
  loading: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
