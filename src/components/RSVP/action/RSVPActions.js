import {
	CREATE_RSVP_SUCCESS,
	LOAD_RSVP_SUCCESS,
	UPDATE_RSVP_SUCCESS,
	ADD_SONG_SUCCESS,
	ADD_TO_FORM,
	DELETE_SONG_FROM_FORM
} from '../../../actions/actionTypes'
import RSVPApi from '../../../api/imageApi'
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

export function deleteSong(songs) {
	return {type: DELETE_SONG_FROM_FORM, songs}
}

export function loadRSVPs() {
	return function (dispatch) {
		return RSVPApi.getRSVPs().then(rsvps => {
			dispatch(loadRSVPSuccess(rsvps))
		}).catch(error => {
			throw(error)
		})
	}
}

export function saveRSVP(rsvp) {
	let secondPlate = rsvp[0].plate2 ? rsvp[0].plate2 : ""
	let postObject = {
		"contactInfo": {
			"firstName": rsvp[0].guestFirstName ? rsvp[0].guestFirstName + " / " + rsvp[0].firstName : rsvp[0].firstName,
			"lastName": rsvp[0].guestLastName? rsvp[0].guestLastName + " / " + rsvp[0].lastName : rsvp[0].lastName,
			"emailAddress": rsvp[0].email
		},
		"attending": rsvp[0].plate != null ? "yes" : "no",
		"plusOne": rsvp[2].plusOne,
		"mealChoice": [rsvp[0].plate, secondPlate],
		"songRequests": [
			{
				"artist": rsvp[1][0]? rsvp[1][0][0] : "",
				"albumName": rsvp[1][0]? rsvp[1][0][2] : "",
				"songName": rsvp[1][0]? rsvp[1][0][1] : ""
			},
			{
				"artist": rsvp[1][1]? rsvp[1][1][0] : "",
				"albumName": rsvp[1][1]? rsvp[1][1][2] : "",
				"songName": rsvp[1][1]? rsvp[1][1][1] : ""
			},

			{
				"artist": rsvp[1][2]? rsvp[1][2][0] : "",
				"albumName": rsvp[1][2]? rsvp[1][2][2] : "",
				"songName": rsvp[1][2]? rsvp[1][2][1] : ""
			}, {
				"artist": rsvp[1][3]? rsvp[1][3][0] : "",
				"albumName": rsvp[1][3]? rsvp[1][3][2] : "",
				"songName": rsvp[1][3]? rsvp[1][3][1] : ""
			} 
		]
	}

	return function (dispatch, getState) {
		return axios.post(` https://petesportfolioserver.herokuapp.com/guest`, postObject)
		//return axios.post(` http://localhost:8080/guest`, postObject)	
	}
}

export function fetchSong(search) {
	return function (dispatch, getState) {
		return axios.get(` https://murmuring-falls-64104.herokuapp.com/song-list/${search}`)
		//return axios.get(` http://localhost:8080/song-list/${search}`)	
			.then(response => {
				dispatch(addSongSuccess(response.data.results))
			})
			.catch(error => {
				throw(error)
			})
	}
}

export function addSongToForm(song) {
	return function (dispatch) {
		return dispatch(addSong(song))
	}
}

export function deleteSongFromForm(song, songs) {
	let mutatedArray = []
	for (let i = 0; i < songs.length; i++) {
		if (songs[i] !== song) {
			mutatedArray.push(songs[i])
		}
	}
	return function (dispatch) {
		return dispatch(deleteSong(mutatedArray))
	}
}
