import React, {PropTypes, Component} from 'react'
import Navigation from '../../common/Navigation'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as rsvpActions from '../action/RSVPActions'
import RSVPForm from '../../form/FormComponent'
import MusicSearch from '../../form/MusicSearchFormComponent'
import { toast } from 'react-toastify'


class RSVP extends Component {
	constructor(props, context) {
		super(props, context)

		this.state = {
			rsvp: Object.assign({}, this.props.rsvp)
		}

		this.updateRSVPState = this.updateRSVPState.bind(this)
		this.saveRSVP = this.saveRSVP.bind(this)
		this.addSong = this.addSong.bind(this)
		this.updateCheckBox = this.updateCheckBox.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.rsvp.id != nextProps.rsvp.id) {
			this.setState({rsvp: Object.assign({}, nextProps.rsvp)})
		}
		this.setState({songs: Object.assign({}, nextProps.songs)})
		this.setState({song: Object.assign({}, nextProps.song)})
	}

	handleClick() {

		if (this.state.rsvp.plate) {
			const Notification = ({ name }) => <div>Thank you {this.state.rsvp.firstName}, your RSVP has been submitted. We look forward to seeing you July 29th...</div>
				const options = {
					autoClose: 6000, 
					type: toast.TYPE.INFO,
					hideProgressBar: true 
				}	
			toast.success(
				<Notification 
					hideProgressBar={true} 
				/>,
				options
			)
		} else {
			const Notification = ({ name }) => <div>Thank you {this.state.rsvp.firstName}, your RSVP has been submitted. Sorry you are unable to make it.</div>
				const options = {
					autoClose: 6000, 
					type: toast.TYPE.INFO,
					hideProgressBar: true 
				}	
			toast.success(
				<Notification 
					hideProgressBar={true} 
				/>,
				options
			)
		}
	}

	updateRSVPState(event) {
		const field = event.target.name
		let rsvp = this.state.rsvp

		rsvp[field] = event.target.value

		return this.setState({rsvp})
	}

	updateCheckBox(event) {
		const field = event.target.name
		let rsvp = this.state.rsvp

		rsvp[field] = event.target.value
		if (field == "plusOne") {
			return this.setState({checkBoxValuePlusOne: !this.state.checkBoxValuePlusOne})
		} else {
			return this.setState({checkBoxValueAttending: !this.state.checkBoxValueAttending})
		}
	}

	validateEmail(emailAddress) {
		var regexEmailValidation = emailAddress.search(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
		console.log(regexEmailValidation)
		if(regexEmailValidation === 0) {
			return true 
		}
		return false 
	}

	saveRSVP(event) {
		console.log("state", this.state)
		event.preventDefault()
		if(this.state.rsvp.firstName && this.state.rsvp.lastName && this.state.rsvp.email && this.state.rsvp.plate && this.state.rsvp.attending){
			if (this.validateEmail(this.state.rsvp.email)){	
				if (this.props.song) {
					this.handleClick()
					this.props.actions.saveRSVP([this.state.rsvp, this.props.song, {
						plusOne: this.state.checkBoxValuePlusOne,
						attending: this.state.checkBoxValueAttending
					}])
				} else {
					this.props.actions.saveRSVP([this.state.rsvp, {
						plusOne: this.state.checkBoxValuePlusOne,
						attending: this.state.checkBoxValueAttending
					}])
				}

				this.context.router.push('/location')
			} else {
       const options = {
				autoClose: 6000, 
				type: toast.TYPE.INFO,
				hideProgressBar: true 
			}	
			toast.warn(
				"Please add a valid email address",
				options
			)  
			}		
		} else {
			const options = {
				autoClose: 6000, 
				type: toast.TYPE.INFO,
				hideProgressBar: true 
			}	
			toast.warn(
				"Please complete all form fields",
				options
			)

		}
	}

	addSong(event) {
		event.preventDefault()
		this.setState({songs: {}})
		this.props.actions.fetchSong(this.state.rsvp.searchSong)
	}


	render() {
		return (
			<div className={this.state.checkBoxValuePlusOne ? "page-four-bg rsvpPage container-fluid page-four-bg-expanded" : "page-four-bg rsvpPage container-fluid"}>
				<Navigation />
				<div className="row formContainer">
					<RSVPForm
						onSave={this.saveRSVP}
						onChange={this.updateRSVPState}
						options={["1", "2", "3", "4"]}
						secondaryOptions={["Slow Roasted Pot Roast: pan gravy, roasted garlic mashed potatoes, honey glazed baby carrots"
							, "Grilled Mango Salsa Chicken: brown rice, roasted root vegetables, mango salsa, mango coulis", 
							"Vegetarian"]}
							plusOne={this.state.checkBoxValuePlusOne}
							songs={this.props.song}
							checkBoxValue={this.updateCheckBox}
							dispatch={this.props.actions}
						/>
						<MusicSearch
							onSave={this.addSong}
							onChange={this.updateRSVPState}
							options={this.props.songs}
							dispatch={this.props.actions}
						/>
					</div>
				</div>
		)
	}
}

RSVP.propTypes = {
	rsvp: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
	song: PropTypes.array,
	songs: PropTypes.array
}

RSVP.contextTypes = {
	router: PropTypes.object
}

function mapStateToProps(state, ownProps) {
	let rsvp = [{
		contactInfo: {
			firstName: '',
			lastName: '',
			emailAddress: '',
			phoneNumber: '',
			streetAddress: {
				line1: '',
				line2: '',
				city: '',
				state: '',
				zip: ''
			}
		},
		attending: '',
		numberOfAttending: 0,
		mealChoice: [],
		songRequest: [
			{
				artist: '',
				albumName: '',
				songName: ''
			}
		]
	}
	]

	return {
		rsvp: rsvp,
		songs: state.MusicSearchReducer,
		song: state.addSongReducer
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(rsvpActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RSVP)
