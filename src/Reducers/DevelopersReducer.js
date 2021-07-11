import { 
    DEVELOPERS_LIST_REQUEST,
    DEVELOPERS_LIST_SUCCESS,
    DEVELOPERS_LIST_FAIL,
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