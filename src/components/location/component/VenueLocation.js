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

  componentWillReceiveProps(nextProps) {

  }

  componentDidMount() {
    this.props.actions.fetchHotels()
  }

  chooseLocation(location) {
    this.setState({location: ""})
    this.props.actions.addLocationChoice(location)
  }

  renderHotelsList(hotels) {
    if(hotels) {
      return hotels.map(hotel => {
        console.log("hotels", hotel.name)
        return (
          <p className="hotels" onClick={() => this.chooseLocation(hotel.formatted_address)}>{hotel.name}</p>
        )
      })
    }
    return false
  }

  render() {
    let location = this.props.location ? this.props.location.venueLocation : " "
  console.log("props", this.props)
    return (
      <div className="page-two-bg container-fluid">
        <Navigation />
        <div className="venueLocationContainer">
          <h1>Adventure is worth while...</h1>
          <div className="locationMaps">
            <div className="vanueLocationMap styleBothMaps">
              {/*<iframe className="map" width="500" height="250" frameBorder="0" style={{border: 0}}*/}
                      {/*src="https://www.google.com/maps/embed/v1/place?q=Laketown%20Golf%20%26%20Conference%20Center%20in%20West%20Michigan&zoom=12&key=AIzaSyCzjnfkEthMXC1R3-lo-PD2vQ_TQinCZSw"*/}
                      {/*allowFullscreen></iframe>*/}
              <h3>The venue is located at...</h3>
            </div>
            <div className="lodgingMapContainer styleBothMaps">
              <h4>lodging options</h4>
              <div className="lodgingMap">
                <iframe className="map" width="700" height="420" frameBorder="0" style={{border: 0}}
                        src={"https://www.google.com/maps/embed/v1/directions?origin=6069%20blue%20star%20hwy%20holland%20mi&destination=" + location + "&zoom=12&key=AIzaSyCzjnfkEthMXC1R3-lo-PD2vQ_TQinCZSw"}
                        allowFullscreen></iframe>
                <div className="hotelsList">
                  {this.renderHotelsList(this.props.location.hotels)}
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
  location: PropTypes.string
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
