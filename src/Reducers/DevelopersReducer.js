import { 
    DEVELOPERS_LIST_REQUEST,
    DEVELOPERS_LIST_SUCCESS,
    DEVELOPERS_LIST_FAIL,

    DEVELOPERS_DETAILS_REQUEST,
    DEVELOPERS_DETAILS_SUCCESS,
    DEVELOPERS_DETAILS_FAIL,
    
    DEVELOPER_LOGIN_REQUEST,
    DEVELOPER_LOGIN_SUCCESS,
    DEVELOPER_LOGIN_FAIL,
 } from '../Constants/DevelopersConstants'

export const developersListReducer = (state={developers:[]}, action) => {
    switch (action.type) {
        case DEVELOPERS_LIST_REQUEST:
            return {loading: true, developers: []}
        case DEVELOPERS_LIST_SUCCESS:
            return {loading: false, developers: action.payload}
        case DEVELOPERS_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const developersDetailsReducer = (state={}, action) => {
    switch (action.type) {
        case DEVELOPERS_DETAILS_REQUEST:
            return {loading: true}
        case DEVELOPERS_DETAILS_SUCCESS:
            return {loading: false, developer: action.payload}
        case DEVELOPERS_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const developLoginReducer = (state={}, action) => {
    switch (action.type) {
        case DEVELOPER_LOGIN_REQUEST:
            return {loading: true}
        case DEVELOPER_LOGIN_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case DEVELOPER_LOGIN_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}