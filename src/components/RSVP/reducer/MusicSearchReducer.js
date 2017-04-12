import {
  ADD_SONG_SUCCESS
} from '../../../actions/actionTypes'
import initialState from './initialState'

export default function musicSearchReducer(state = [], action) {
  switch (action.type) {
    case ADD_SONG_SUCCESS:
      console.log('in reducer', action.songs)
      return action.songs
    default:
      return state
  }
}
