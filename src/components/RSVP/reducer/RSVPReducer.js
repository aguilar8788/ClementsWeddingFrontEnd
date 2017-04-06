import {
  LOAD_RSVP_SUCCESS,
  CREATE_RSVP_SUCCESS,
  UPDATE_RSVP_SUCCESS
} from '../../../actions/actionTypes'
import initialState from './initialState'

export default function rsvpReducer(state = initialState.rsvps, action) {
  switch(action.type) {
    case LOAD_RSVP_SUCCESS:
      return action.rsvps
    case CREATE_RSVP_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.rsvp)
      ]
    case UPDATE_RSVP_SUCCESS:
      return [
        ...state.filter(rsvp => rsvp.id !== action.rsvp.id),
        Object.assign({}, action.rsvp)
      ]
    default:
      return state
  }
}
