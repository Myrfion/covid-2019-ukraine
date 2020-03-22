import { INFO_REQUEST, INFO_SUCCESS } from "../constants/info"

const initState = {
  loading: true,
  data: null
}

export default function info(state = initState, aciton) {
  switch (aciton.type) {
    case INFO_REQUEST:
      return { ...state, loading: true }
    case INFO_SUCCESS:
      return { ...state, loading: false, data: aciton.payload }
    default:
      return state
  }
}
