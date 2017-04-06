import React, {Component} from 'react'
import Navigation from '../../common/Navigation'

class VenueLocation extends Component {
    render() {
        return (
            <div className="page-two-bg container-fluid">
                 <Navigation path={this.props.location}/>
                <h1>location</h1>
            </div>
        )
    }
}

export default VenueLocation
