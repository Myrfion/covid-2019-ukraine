import { INFO_SUCCESS, INFO_REQUEST } from "../constants/info"
import db from "../../firebaseConfig"

function setZIndex(list) {
  const sortedList = list.sort((a, b) => b.info.confirmed - a.info.confirmed)

  return sortedList.map((item, key) => {
    return { ...item, zIndex: key }
  })
}

export function fetchInfo() {
  return async dispatch => {
    dispatch(infoRequest())

    let info = [];

    db.collection("info")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          info.push({
            key: doc.id,
            ...doc.data()
          })
        })
        dispatch(infoSuccess(setZIndex(info)))
      })
  }
}

function infoRequest() {
  return {
    type: INFO_REQUEST
  }
}

function infoSuccess(info) {
  return {
    payload: info,
    type: INFO_SUCCESS
  }
}
