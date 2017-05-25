import {
  CHOOSE_LOCATION_SUCCESS,
  RENDER_HOTELS_SUCCESS,
  RENDER_SELECTED_HOTEL_SUCCESS
} from '../../../actions/actionTypes'
import axios from 'axios';

export function chooseLocation(venueLocation) {
  return {type: CHOOSE_LOCATION_SUCCESS, venueLocation}
}

export function renderHotelsNearby(hotelsNearby) {
  return {type: RENDER_HOTELS_SUCCESS, hotelsNearby}
}

export function renderSelectedHotel(hotel) {
  return {type: RENDER_SELECTED_HOTEL_SUCCESS, hotel}
}


export function addLocationChoice(venueLocation) {
  return function (dispatch) {
    return dispatch(chooseLocation(venueLocation))
  }
}

export function fetchHotels() {
  return function (dispatch, getState) {
    //change to own proxy
    return axios.get("https://galvanize-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels+in+saugatuck+mi&location=42.694537,-86.13508&radius=10000&key=AIzaSyCzjnfkEthMXC1R3-lo-PD2vQ_TQinCZSw")
      .then(response => {
        dispatch(renderHotelsNearby(response.data.results))
      })
      .catch(error => {
        throw(error)
      })
  }
}

export function fetchSelectedHotelData(location) {
  return function (dispatch, getState) {
    //change to own proxy
    return axios.get("https://galvanize-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=" + location + "&key=AIzaSyCzjnfkEthMXC1R3-lo-PD2vQ_TQinCZSw")
      .then(response => {
        dispatch(renderSelectedHotel(response.data.result))
      })
      .catch(error => {
        throw(error)
      })
  }
}
