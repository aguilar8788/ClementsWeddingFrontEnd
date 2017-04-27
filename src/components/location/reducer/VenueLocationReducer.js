import {
  CHOOSE_LOCATION_SUCCESS,
  RENDER_HOTELS_SUCCESS
} from '../../../actions/actionTypes'
import initialState from './initialState'

export default function venueLocationReducer(state = {}, action) {
  switch(action.type) {
    case CHOOSE_LOCATION_SUCCESS:
      return Object.assign({}, state, {venueLocation: action.venueLocation})
    case RENDER_HOTELS_SUCCESS:
      return Object.assign({}, state, {hotels: action.hotelsNearby})
    default:
      return state
  }
}
