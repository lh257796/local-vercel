import axios from 'axios'
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from 'redux-thunk'
import logger from 'redux-logger'


const reducer = (state=[], action) => {

}

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store
