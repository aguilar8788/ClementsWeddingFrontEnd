import {combineReducers} from 'redux'
import infoRootReducer from '../components/info/reducer/infoRootReducer'
import RSVPReducer from '../components/RSVP/reducer/RSVPReducer'
import MusicSearchReducer from '../components/RSVP/reducer/MusicSearchReducer'

const rootReducer = combineReducers({
    infoRootReducer,
    RSVPReducer,
    MusicSearchReducer
})

export default rootReducer
