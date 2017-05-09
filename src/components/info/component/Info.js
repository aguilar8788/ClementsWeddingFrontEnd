import React, {PropTypes, Component} from 'react'
import Navigation from '../../common/Navigation'

class Info extends Component {
  constructor(props, context) {
    super(props, context)
  }
    render() {
        return (
            <div className="page-one-bg infoPage container-fluid">
              <Navigation className="mainNav" path={this.props.location}/>
              <h1>Mr and Mrs Clement</h1>
              <div className="infoContainer">

                <p className="infoText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie
                  vitae nibh eget molestie. Nam lectus eros, luctus a luctus ut, efficitur vitae odio.
                  Aliquam erat volutpat. In ac egestas erat. Quisque mattis ipsum molestie lorem aliquet,
                  mattis maximus neque semper. Vivamus feugiat urna vulputate metus egestas laoreet.
                  Suspendisse et mi tempor arcu porttitor porta ut a diam. Duis orci justo, volutpat eget porttitor eget,
                  faucibus id orci. Mauris volutpat, mi et laoreet rhoncus, urna sem suscipit felis, non ultrices lectus ligula eu leo.
                  Praesent imperdiet et lorem quis euismod. Vestibulum scelerisque luctus fermentum. Nunc euismod nunc libero,
                  ultrices tristique risus mattis in. Suspendisse vitae mauris diam.
                </p>
                <img className="coupleImage" src={require('../../../images/couple.JPG')} />
              </div>
            </div>
        )
    }
}

Info.propTypes = {
  location: PropTypes.object
}

Info.contextTypes = {
  router: React.PropTypes.object,
  location: React.PropTypes.object
}

export default Info
