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

				<h1 className="headingStyle">Adventure is worthwhile...</h1>
				<div className="venueLocationContainer">
					<div className="locationMaps">
						<div className="vanueLocationMap styleBothMaps">
							<p>date and time: July 29th 2017 @ 4:30 PM</p>
							<div className="venueAddress">	
								<p>location:</p>
								<div className="address">
									<p>	Laketown Golf and Conference Center </p>	
									<p>	6069 Blue Star Hwy, Saugatuck, MI 49453</p>
								</div>				
							</div>
							<div className="itinerary">	
							<p className="ulHeading">itinerary:</p>
							<ul>
								<li>4:30 pm ~ Doors</li>
								<li>5:00 pm ~ Ceremony</li>
								<li>6:00 pm - 7:00 pm ~ Cocktail Hour</li>
								<li>7:00 pm ~ Adult only reception</li>
							</ul>
						</div>
							<p>
								*click on the hotel of your choice from the list below for more information.
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
