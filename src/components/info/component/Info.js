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
				<div className="infoContainer">
		
			<h1 className="headingStyle">Mr and Mrs Clement</h1>
			<h1>July 29th 2017</h1>
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
