import React, {PropTypes, Component} from 'react'
import Navigation from '../../common/Navigation'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as rsvpActions from '../action/RSVPActions'
import RSVPForm from '../../form/FormComponent'

class RSVP extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      rsvp: Object.assign({}, this.props.rsvp)
    }

    this.updateRSVPState = this.updateRSVPState.bind(this)
    this.saveRSVP = this.saveRSVP.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.rsvp.id != nextProps.rsvp.id) {
      this.setState({course: Object.assign({}, nextProps.rsvp)})
    }
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

  render() {
    console.log("props", this.props)
    console.log("state", this.state)
    return (
      <div className="page-four-bg container-fluid">
        <Navigation />
        <h1>RSVP</h1>
        <RSVPForm
          onSave={this.saveRSVP}
          onChange={this.updateRSVPState}
          options={["2", "3"]}
          secondaryOptions={["Beef", "Chicken"]}
        />
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
    rsvp: rsvp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(rsvpActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RSVP)
