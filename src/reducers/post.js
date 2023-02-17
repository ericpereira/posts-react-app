import { SET_POSTS } from "../actions/types"

const initialState = {
    posts: []
};

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_POSTS:
      return { posts: payload.data.posts }
    default:
      return state
  }
}