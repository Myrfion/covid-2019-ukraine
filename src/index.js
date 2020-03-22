import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store"
import "./styles/tailwind.css"

import MainPage from "./pages/MainPage"

function App(props) {
  useEffect(() => {}, [])

  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
