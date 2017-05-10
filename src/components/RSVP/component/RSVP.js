import React, {PropTypes, Component} from 'react'
import Navigation from '../../common/Navigation'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as rsvpActions from '../action/RSVPActions'
import RSVPForm from '../../form/FormComponent'
import MusicSearch from '../../form/MusicSearchFormComponent'

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
    if(field == "plusOne") {
      return this.setState({checkBoxValuePlusOne: !this.state.checkBoxValuePlusOne})
    }else {
      return this.setState({checkBoxValueAttending: !this.state.checkBoxValueAttending})
    }
  }


  saveRSVP(event) {
    event.preventDefault()
    if(this.props.song) {
      this.props.actions.saveRSVP([this.state.rsvp, this.props.song, {plusOne: this.state.checkBoxValuePlusOne, attending: this.state.checkBoxValueAttending}])
    }else {
      this.props.actions.saveRSVP([this.state.rsvp, {plusOne: this.state.checkBoxValuePlusOne, attending: this.state.checkBoxValueAttending}])
    }

    this.context.router.push('/location')
  }

  addSong(event) {
    event.preventDefault()
    this.setState({songs: {}})
    this.props.actions.fetchSong(this.state.rsvp.searchSong)
  }


  render() {
    return (
      <div className="page-four-bg rsvpPage container-fluid">
        <Navigation />
        <div className="row formContainer">
          <RSVPForm
            onSave={this.saveRSVP}
            onChange={this.updateRSVPState}
            options={["1", "2", "3", "4"]}
            secondaryOptions={["Beef", "Chicken"]}
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
