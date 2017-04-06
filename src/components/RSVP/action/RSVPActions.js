import {
  CREATE_RSVP_SUCCESS,
  LOAD_RSVP_SUCCESS,
  UPDATE_RSVP_SUCCESS
} from '../../../actions/actionTypes'
import RSVPApi from '../../../api/mockRSVPApi'

export function loadRSVPSuccess(rsvps) {
  return {type: LOAD_RSVP_SUCCESS, rsvps}
}

export function createRSVP(rsvp) {
  return {type: CREATE_RSVP_SUCCESS, rsvp}
}

export function updaterRSVPSuccess(rsvp) {
  return {type: UPDATE_RSVP_SUCCESS, rsvp}
}

export function loadRSVPs() {
  return function(dispatch) {
    return RSVPApi.getRSVPs().then(rsvps => {
      dispatch(loadRSVPSuccess(rsvps))
    }).catch(error => {
      throw(error)
    })
  }
}

export function saveRSVP(rsvp) {
  return function (dispatch, getState) {
    return RSVPApi.saveRSVP(rsvp).then(savedRSVP => {
      rsvp.id ? dispatch(updaterRSVPSuccess(savedRSVP)) :
        dispatch(createRSVP(savedRSVP))
    }).catch(error => {
      throw(error)
    })
  }
}