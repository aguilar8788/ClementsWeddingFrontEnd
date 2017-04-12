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
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.rsvp.id != nextProps.rsvp.id) {
      this.setState({rsvp: Object.assign({}, nextProps.rsvp)})
    }
    this.setState({songs: Object.assign({}, nextProps.songs)})
  }

  updateRSVPState(event) {
    const field = event.target.name
    let rsvp = this.state.rsvp

    rsvp[field] = event.target.value

    return this.setState({rsvp})
  }


  saveRSVP(event) {
    event.preventDefault()
    this.props.actions.saveRSVP(this.state.rsvp)
    this.context.router.push('/location')
  }

  addSong(event) {
    event.preventDefault()
    this.props.actions.fetchSong(this.state.rsvp.songName)
  }

  render() {
    console.log("props", this.props)
    console.log("state", this.state)
    return (
      <div className="page-four-bg rsvpPage container-fluid">
        <Navigation />
        <div className="row formContainer">
          <RSVPForm
            onSave={this.saveRSVP}
            onChange={this.updateRSVPState}
            options={["2", "3", "4"]}
            secondaryOptions={["Beef", "Chicken"]}
          />
          <MusicSearch onSave={this.addSong} onChange={this.updateRSVPState} options={this.props.songs} />
        </div>
      </div>
    )
  }
}

RSVP.propTypes = {
  rsvp: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

RSVP.contextTypes = {
  router: PropTypes.object
}

function mapStateToProps(state, ownProps) {
  console.log("state in props", state.MusicSearchReducer)
  const rsvpId = ownProps.params.id
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
    songs: state.MusicSearchReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(rsvpActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RSVP)
