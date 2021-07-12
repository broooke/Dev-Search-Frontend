import { 
    DEVELOPERS_LIST_REQUEST,
    DEVELOPERS_LIST_SUCCESS,
    DEVELOPERS_LIST_FAIL,

    DEVELOPERS_DETAILS_REQUEST,
    DEVELOPERS_DETAILS_SUCCESS,
    DEVELOPERS_DETAILS_FAIL,
} from '../Constants/DevelopersConstants'
import axios from 'axios'

export const developersListAction = (keyword = '') => async (dispatch) => {
    try{
        dispatch({
            type: DEVELOPERS_LIST_REQUEST
        })

        const {data} = await axios.get(`/developers/${keyword}`)

        dispatch({
            type: DEVELOPERS_LIST_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: DEVELOPERS_LIST_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message
                : error.message,
        })
    }
}

export const developersDetailAction = (username='') => async (dispatch) => {
    try{
        dispatch({
            type: DEVELOPERS_DETAILS_REQUEST
        })

        const {data} = await axios.get(`/developers/${username}`)

        dispatch({
            type: DEVELOPERS_DETAILS_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: DEVELOPERS_DETAILS_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message
                : error.message,
        })
    }
}