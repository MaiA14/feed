const initialState = {
  comments: [],
  filterBy: { email: '', comment: '' },
};

export default function (state = initialState, action = {}) {
  switch (action.type) {

    case 'SET_COMMENTS':
      return { ...state, comments: action.comments }
    case 'ADD_COMMENT':
      return { ...state, comments: [...state.comments, action.comment] }
    case 'GET_COMMENT':
      return { ...state, comment: action.comment }
    case 'UPDATE_COMMENT':
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment._id === action.comment._id ? action.comment : comment)
      };
    case 'DELETE_COMMENT':
      return {
        ...state, comments: [...state.comments.filter(comment =>
          comment._id !== action.commentId)]
      }
    case 'SET_FILTER':
      return { ...state, filterBy: { ...action.filterBy } }
    default:
      return state
  }
}