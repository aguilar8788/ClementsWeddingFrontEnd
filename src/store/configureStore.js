import { createStore, applyMiddleware } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import {createLogger} from 'redux-logger';
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

const logger = createLogger();

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger, reduxImmutableStateInvariant())
    )
}
