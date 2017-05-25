import React, {PropTypes} from 'react'
import { Link, IndexLink } from 'react-router'

const Navigation = () => {
    return (
        <nav className="">
          <ul>
            <li><IndexLink to="/" activeClassName="active">home</IndexLink></li>
            <li><Link to="/location" activeClassName="active">location</Link></li>
            <li><Link to="/gallery" activeClassName="active">gallery</Link></li>
            <li><Link to="/rsvp" activeClassName="active">rsvp</Link></li>
          </ul>
        </nav>
    )
}



export default Navigation

