import {combineReducers} from 'redux'
import infoRootReducer from '../components/info/reducer/infoRootReducer'
import RSVPReducer from '../components/RSVP/reducer/RSVPReducer'
import MusicSearchReducer from '../components/RSVP/reducer/MusicSearchReducer'
import addSongReducer from '../components/RSVP/reducer/AddSongToFormReducer'

const rootReducer = combineReducers({
    infoRootReducer,
    addSongReducer,
    RSVPReducer,
    MusicSearchReducer
})

export default rootReducer
