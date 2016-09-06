import { combineReducers } from 'redux';
import { ActionTypes } from '../actions';

function loading(state = false, action) {
  switch (action.type) {
    case ActionTypes.SET_LOADING:
      return action.loading;
    default:
      return state;
  }
}

function notes(state = [], action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_NOTES:
      return action.notes;
    case ActionTypes.ADD_NOTE:
      return [ action.note, ...state ];
    case ActionTypes.DELETE_NOTE:
      return state.filter(note => {
        note.id !== action.note.id
      });
    default:
      return state;
  }
}

function msg(state = '', action) {
  switch (action.type) {
    case ActionTypes.HINT:
      return action.msg;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  loading,
  notes,
  msg
});

export default rootReducer;