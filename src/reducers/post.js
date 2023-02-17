import { SET_COMMENTS, SET_POSTS } from "../actions/types"

const initialState = {
    posts: [],
    commentsPosts: []
};

export default function post(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_POSTS:
      return { posts: payload.data.posts }
    case SET_COMMENTS:
      //if already has the comments of this post, remove and add the updated comments to array
      let newComments = []
      if(state.commentsPosts && state.commentsPosts.length > 0){ //remove old comments
        newComments = state.commentsPosts.filter(c => {
          return payload.data.comments.filter(p => p.id === c.id).length > 0 ? false : true
        })
      }
      return { ...state, commentsPosts: [...newComments, ...payload.data.comments] }
    default:
      return state
  }
}