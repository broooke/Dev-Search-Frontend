import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'
import { developersDetailsReducer, developersListReducer } from './Reducers/DevelopersReducer'

axios.defaults.baseURL = 'http://127.0.0.1:8001/api/'

const reducer = combineReducers({
    developersList: developersListReducer,
    developersDetail: developersDetailsReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store