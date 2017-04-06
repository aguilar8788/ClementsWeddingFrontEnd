import {INFO} from '../../../actions/actionTypes'

export default function infoReducer(state = [], action) {
    switch(action.type) {
        case INFO:
            return state
        default:
            return state
    }
}