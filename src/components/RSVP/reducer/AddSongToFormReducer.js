import {
  ADD_TO_FORM,
  DELETE_SONG_FROM_FORM
} from '../../../actions/actionTypes'
import initialState from './initialState'

export default function addSongToFormReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_FORM:
      return [
        ...state,
        action.song
      ]
      case DELETE_SONG_FROM_FORM:
        console.log("song", action.songs)
        return [
            ...action.songs,
            ...state
            ]
    default:
      return state
  }
}
