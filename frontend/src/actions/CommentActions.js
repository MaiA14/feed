import commentService from '../services/CommentService.js';
import { loading, doneLoading } from '../actions/SystemActions.js';

export function isNotlLoading(){
  return async (dispatch) => {
      dispatch(doneLoading());
  }
}

function setComments(comments) {
  return {
      type: 'SET_COMMENTS',
      toys
  }
}

// THUNK
export function loadComments(filterBy) {
  return async (dispatch) => {
      try {
          dispatch(loading());
          const comments = await commentService.query(filterBy);
          dispatch(setComments(comments))
      } catch (err) {
          console.log('CommentsActions: err in loadComments', err);
      } finally {
          dispatch(doneLoading());
      }
  }
}

function setFilter(filterBy) {
    return {
        type: 'SET_FILTER',
        filterBy
    }
}

export function setFilterBy(filterBy) {
    return (dispatch) => dispatch(setFilter(filterBy))
}

export function saveComment(comment) {
    return async (dispatch) => {
        const updatedComment = await commentService.saveComment(comment)
        const actionType = (updatedComment._id) ? 'UPDATE_COMMENT' : 'ADD_COMMENT';
        dispatch({ type: actionType, comment: updatedComment })
    }
}

export function getComment(commentId) {
  return async (dispatch) => {
      try {
          dispatch(loading());
          const comment = await commentService.getCommentById(commentId)
          dispatch({ type: 'GET_COMMENT', comment })
      } catch (err) {
          console.log('CommentsActions: err in get comment', err);
      } finally {
          dispatch(doneLoading());
      }
  }
}

// THUNK
export function deleteComment(commentId) {
    return async (dispatch) => {
        await commentService.deleteComment(commentId)
        dispatch({ type: 'DELETE_COMMENT', commentId })
    }
}
