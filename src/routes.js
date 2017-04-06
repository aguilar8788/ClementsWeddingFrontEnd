import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Info from './components/info/component/Info'
import VenueLocation from './components/location/component/VenueLocation'
import Gallery from './components/gallery/component/Gallery'
import RSVP from './components/RSVP/component/RSVP'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Info} />
        <Route path="location" component={VenueLocation} />
        <Route path="gallery" component={Gallery} />
        <Route path="rsvp" component={RSVP} />
    </Route>
)