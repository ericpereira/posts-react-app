import { SET_USERS } from "../actions/types"

const initialState = {
    users: []
};

export default function user(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_USERS:
      return { users: payload.data.users }
    default:
      return state
  }
}