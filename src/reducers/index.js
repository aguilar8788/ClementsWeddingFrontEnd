import {combineReducers} from 'redux'
import infoRootReducer from '../components/info/reducer/infoRootReducer'
import RSVPReducer from '../components/RSVP/reducer/RSVPReducer'
import MusicSearchReducer from '../components/RSVP/reducer/MusicSearchReducer'
import addSongReducer from '../components/RSVP/reducer/AddSongToFormReducer'
import locationReducer from '../components/location/reducer/VenueLocationReducer'

const rootReducer = combineReducers({
    infoRootReducer,
    addSongReducer,
    locationReducer,
    RSVPReducer,
    MusicSearchReducer
})

export default rootReducer
