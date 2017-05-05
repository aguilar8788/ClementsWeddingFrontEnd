import {
  CHOOSE_LOCATION_SUCCESS,
  RENDER_HOTELS_SUCCESS,
  RENDER_SELECTED_HOTEL_SUCCESS
} from '../../../actions/actionTypes'
import initialState from './initialState'

export default function venueLocationReducer(state = {}, action) {
  switch(action.type) {
    case CHOOSE_LOCATION_SUCCESS:
      return Object.assign({}, state, {venueLocation: action.venueLocation})
    case RENDER_HOTELS_SUCCESS:
      return Object.assign({}, state, {hotelsNearby: action.hotelsNearby})
    case RENDER_SELECTED_HOTEL_SUCCESS:
      return Object.assign({}, state, {SelectedHotel: action.hotel})
    default:
      return state
  }
}
