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

const news = (state= [], action) => {
    if (action.type === 'SET_NEWS') {
        state = action.news
    }
    return state
}

const reducer = combineReducers({
    patients,
    providers,
    news
})

export const fetchPatients = () => {
    return async(dispatch) => {
        const {data} = await axios.get(process.env.API_BASE_URL + '/api/patients');
        dispatch({type: 'SET_PATIENTS', patients: data})
    }
}
export const fetchProviders = () => {
    return async(dispatch) => {
        const {data} = await axios.get(process.env.API_BASE_URL + '/api/providers');
        dispatch({type: 'SET_PROVIDERS', providers: data})
    }
}

export const fetchNews = () => {
    return async(dispatch) => {
        const res = await axios.get('https://www.reddit.com/r/science/hot.json?f=flair_name%3A%22Health%22')
        const data = res.data.data.children
        dispatch({type: 'SET_NEWS', news: data})
    }
}

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store
