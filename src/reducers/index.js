import {combineReducers} from 'redux'
import infoRootReducer from '../components/info/reducer/infoRootReducer'
import RSVPReducer from '../components/RSVP/reducer/RSVPReducer'

const rootReducer = combineReducers({
    infoRootReducer,
    RSVPReducer
})

export default rootReducer
