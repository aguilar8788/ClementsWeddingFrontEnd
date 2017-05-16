import React, {PropTypes, Component} from 'react'
import Navigation from '../../common/Navigation'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as locationActions from '../action/VenueLocationActions'

class VenueLocation extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {}
    this.chooseLocation = this.chooseLocation.bind(this)
  }

  componentDidMount() {
    this.props.actions.fetchHotels()
  }

  componentWillReceiveProps(nextProps) {
  }

  fetchSelectedHotelData(selectedLocation) {
    this.props.actions.fetchSelectedHotelData(selectedLocation)
  }

  formatSelectedHotelData(selectedHotel) {
    return (
      <div>
        <ul>
          <li className="hotels">{selectedHotel.formatted_address}</li>
          <li className="hotels">{selectedHotel.formatted_phone_number}</li>
          <li className="hotels"><a href={selectedHotel.website} target="_blank">view website and check availability</a></li>
        </ul>
      </div>
    )
  }

  chooseLocation(location, locationName, placeId) {
    this.fetchSelectedHotelData(placeId)
    this.setState({location: ""})
    this.setState({hotelsNearby: [locationName]})
    this.props.actions.addLocationChoice(location)
  }

  renderHotelsList(hotels) {
    if (hotels) {
      if (hotels.length > 1) {
        return hotels.map((hotel, iterator) => {
          return (
            <p key={iterator} className="hotels"
               onClick={() => this.chooseLocation(hotel.formatted_address, hotel.name, hotel.place_id)}>{hotel.name}</p>
          )
        })
      } else {
        return (
          <div>
            <p className="hotels">{hotels}</p>
          </div>
        )
      }
    }
  }

  renderMap(location) {
    if (location) {
      return (<iframe className="map" width="700" height="420" frameBorder="0" style={{border: 0}}
                      src={"https://www.google.com/maps/embed/v1/directions?origin=6069%20blue%20star%20hwy%20holland%20mi&destination=" + location + "&zoom=12&key=AIzaSyCzjnfkEthMXC1R3-lo-PD2vQ_TQinCZSw"}
                      allowFullscreen>Map
      </iframe>)
    } else {
      return (<iframe className="map" width="700" height="420" frameBorder="0" style={{border: 0}}
                      src="https://www.google.com/maps/embed/v1/search?q=hotels in saugutuck mi&zoom=12&key=AIzaSyCzjnfkEthMXC1R3-lo-PD2vQ_TQinCZSw"
                      allowFullscreen></iframe>)
    }
  }

  render() {
    let location = this.props.location ? this.props.location.venueLocation : " "
    return (
      <div className="page-two-bg container-fluid">
        <Navigation className="mainNav" />
        
          <h1 className="headingStyle">Adventure is worth while...</h1>
			<div className="venueLocationContainer">
          <div className="locationMaps">
            <div className="vanueLocationMap styleBothMaps">
              <p>
                Please join us on June whatever at the Laketown Golf & Conference Center located at 6069 Blue Star HWY,
                Sauguck, MI 49453
              </p>
              <p>
                below you can find lodging near the ceremony. Click on the hotel of your choice for more information.
              </p>
            </div>
            <div className="lodgingMapContainer styleBothMaps">
              {this.renderMap(location)}
              <div className="hotelListContainer">
                <div className="hotelsList">
                  {this.renderHotelsList(this.state.hotelsNearby ? this.state.hotelsNearby : this.props.location.hotelsNearby)}
                  {this.props.location.SelectedHotel ? this.formatSelectedHotelData(this.props.location.SelectedHotel) : ""}
                  {this.props.location.SelectedHotel ? <button onClick={() => window.location.reload()}>back</button> : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

VenueLocation.propTypes = {
  actions: PropTypes.object.isRequired,
  location: PropTypes.object
}

function mapStateToProps(state, ownProps) {
  return {
    location: state.locationReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(locationActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueLocation)
