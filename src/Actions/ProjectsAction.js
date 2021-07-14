import { 
    PROJECTS_LIST_REQUEST,
    PROJECTS_LIST_SUCCESS,
    PROJECTS_LIST_FAIL,

    PROJECT_DETAILS_REQUEST,
    PROJECT_DETAILS_SUCCESS,
    PROJECT_DETAILS_FAIL,

    ADD_REVIEW_REQUEST,
    ADD_REVIEW_SUCCESS,
    ADD_REVIEW_FAIL,
} from '../Constants/ProjectsConstants'
import axios from 'axios'

export const projectsListAction = (keyword = '') => async (dispatch) => {
    try{
        dispatch({type:PROJECTS_LIST_REQUEST})

        const {data} = await axios.get(`/projects/${keyword}`)

        dispatch({
            type:PROJECTS_LIST_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: PROJECTS_LIST_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message
                : error.message,
        })
    }
}

export const projectDetailsAction = (name = '') => async (dispatch) => {
    try{
        dispatch({type:PROJECT_DETAILS_REQUEST})

        const {data} = await axios.get(`/projects/${name}`)

        dispatch({
            type:PROJECT_DETAILS_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: PROJECT_DETAILS_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message
                : error.message, 
        })
    }
}

export const addReviewAction = (review) => async (dispatch) => {
    try{
        dispatch({type:ADD_REVIEW_REQUEST})

        const {data} = await axios.post(`/projects/review/add/`, review)

        dispatch({
            type: ADD_REVIEW_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ADD_REVIEW_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}