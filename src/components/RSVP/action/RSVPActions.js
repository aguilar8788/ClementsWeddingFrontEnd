import {
  CREATE_RSVP_SUCCESS,
  LOAD_RSVP_SUCCESS,
  UPDATE_RSVP_SUCCESS,
  ADD_SONG_SUCCESS,
  ADD_TO_FORM
} from '../../../actions/actionTypes'
import RSVPApi from '../../../api/mockRSVPApi'
import axios from 'axios';

export function loadRSVPSuccess(rsvps) {
  return {type: LOAD_RSVP_SUCCESS, rsvps}
}

export function createRSVP(rsvp) {
  return {type: CREATE_RSVP_SUCCESS, rsvp}
}

export function updaterRSVPSuccess(rsvp) {
  return {type: UPDATE_RSVP_SUCCESS, rsvp}
}

export function addSongSuccess(songs) {
  return {type: ADD_SONG_SUCCESS, songs}
}

export function addSong(song) {
  return {type: ADD_TO_FORM, song}
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
  console.log("rsvp", rsvp)



  let postObject = {
    "contactInfo": {
      "firstName": rsvp[0].firstName,
      "lastName": rsvp[0].lastName,
      "emailAddress": rsvp[0].email
    },
    "attending": rsvp[2].attending,
    "plusOne": rsvp[2].plusOne,
    "mealChoice": [rsvp[0].plate],
    "songRequests": [
      {
        "artist": rsvp[1][0][0],
        "albumName": rsvp[1][0][1],
        "songName": rsvp[1][0][2]
      },
      {
        "artist": rsvp[1][1][0],
        "albumName": rsvp[1][1][1],
        "songName": rsvp[1][1][2]
      },
      {
        "artist": rsvp[1][2][0],
        "albumName": rsvp[1][2][1],
        "songName": rsvp[1][2][2]
      },
      {
        "artist": rsvp[1][3][0],
        "albumName": rsvp[1][3][1],
        "songName": rsvp[1][3][2]
      }
    ]
  }

  return function (dispatch, getState) {
    return axios.post(`http://localhost:8080/guest`, postObject)
  }
}

export function fetchSong(search) {
  return function (dispatch, getState) {
    return axios.get(`http://localhost:8080/song-list/${search}`)
      .then(response => {
        dispatch(addSongSuccess(response.data.results))
      })
      .catch(error => {
        throw(error)
      })
  }
}

export function addSongToForm(song) {
  return function(dispatch) {
    return dispatch(addSong(song))
  }
}
