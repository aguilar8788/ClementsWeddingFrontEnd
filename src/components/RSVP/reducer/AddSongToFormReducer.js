import {
  ADD_TO_FORM
} from '../../../actions/actionTypes'
import initialState from './initialState'

export default function addSongToFormReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_FORM:
      return [
        ...state,
        action.song
      ]
    default:
      return state
  }
}
