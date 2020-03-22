import { INFO_SUCCESS, INFO_REQUEST } from "../constants/info"
import db from "../../firebaseConfig"

export function fetchInfo() {
  return async dispatch => {
    dispatch(infoRequest())

    let info = []

    db.collection("info")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          info.push({
            key: doc.id,
            ...doc.data()
          })
        })
        dispatch(infoSuccess(info))
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
