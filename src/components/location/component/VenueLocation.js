import React, {Component} from 'react'
import Navigation from '../../common/Navigation'

class VenueLocation extends Component {
  render() {
    return (
      <div className="page-two-bg container-fluid">
        <Navigation />
        <div className="venueLocationContainer">
          <h1>Adventure is worth while...</h1>
          <div className="locationMaps">
            <div className="vanueLocationMap styleBothMaps">
              <h4>venue location</h4>
              <iframe className="map" width="400" height="250" frameBorder="0" style={{border: 0}}
                      src="https://www.google.com/maps/embed/v1/place?q=place_id:Eio2MDY5IEJsdWUgU3RhciBId3ksIEhvbGxhbmQsIE1JIDQ5NDIzLCBVU0E&key=AIzaSyCzjnfkEthMXC1R3-lo-PD2vQ_TQinCZSw"
                      allowFullscreen></iframe>
            </div>
            <div className="lodgingMap styleBothMaps">
              <h4>lodging options</h4>
              <iframe className="map" width="400" height="250" frameBorder="0" style={{border: 0}}
                      src="https://www.google.com/maps/embed/v1/search?q=hotels%20blue%20star%20highway%20in%20holland%2C%20mi&key=AIzaSyCzjnfkEthMXC1R3-lo-PD2vQ_TQinCZSw"
                      allowFullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VenueLocation
