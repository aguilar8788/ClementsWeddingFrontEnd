/*eslint-disable import/default*/
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
require('./styles/css/style.css')
require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css' 

const store = configureStore()
const App = () => {
  return (
    <div>
        <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
			</Provider>      
			<ToastContainer />
    </div>
  )
}
render (
    
	<App/>,	
    document.getElementById('app')
)
