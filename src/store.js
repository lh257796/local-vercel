import axios from 'axios'
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import logger from 'redux-logger'


const patients = (state=[], action) => {
    if (action.type === 'SET_PATIENTS') {
        state = action.patients
    }
    return state
}

const providers = (state = [], action) => {
    if (action.type === 'SET_PROVIDERS') {
        state = action.providers
    }
    return state
}

const reducer = combineReducers({
    patients,
    providers
})

export const fetchPatients = () => {
    return async(dispatch) => {
        const {data} = await axios.get('/api/patients');
        dispatch({type: 'SET_PATIENTS', patients: data})
    }
}

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store
