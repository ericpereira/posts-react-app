import { SET_IS_LOGGED, SET_USERS } from "../actions/types"

const initialState = {
    users: [],
    isLogged: undefined
};

export default function user(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_USERS:
      return { ...state, users: payload.data.users }
    case SET_IS_LOGGED:
        return { ...state, isLogged: payload.data.isLogged }
    default:
      return state
  }
}