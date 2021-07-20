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

    DEVELOPER_LOGOUT,

    DEVELOPER_REGISTER_REQUEST,
    DEVELOPER_REGISTER_SUCCESS,
    DEVELOPER_REGISTER_FAIL,

    DEVELOPER_EDIT_REQUEST,
    DEVELOPER_EDIT_SUCCESS,
    DEVELOPER_EDIT_FAIL,
    
    DEVELOPER_ADD_SKILL_REQUEST,
    DEVELOPER_ADD_SKILL_SUCCESS,
    DEVELOPER_ADD_SKILL_FAIL,

    DEVELOPER_ADD_PROJECT_REQUEST,
    DEVELOPER_ADD_PROJECT_SUCCESS,
    DEVELOPER_ADD_PROJECT_FAIL,

    DEVELOPER_EDIT_SKILL_REQUEST,
    DEVELOPER_EDIT_SKILL_SUCCESS,
    DEVELOPER_EDIT_SKILL_FAIL,

    DEVELOPER_DELETE_SKILL_REQUEST,
    DEVELOPER_DELETE_SKILL_SUCCESS,
    DEVELOPER_DELETE_SKILL_FAIL,

    DEVELOPER_DELETE_PROJECT_REQUEST,
    DEVELOPER_DELETE_PROJECT_SUCCESS,
    DEVELOPER_DELETE_PROJECT_FAIL,

    DEVELOPER_EDIT_PROJECT_REQUEST,
    DEVELOPER_EDIT_PROJECT_SUCCESS,
    DEVELOPER_EDIT_PROJECT_FAIL,

    DEVELOPER_MESSAGES_REQUEST,
    DEVELOPER_MESSAGES_SUCCESS,
    DEVELOPER_MESSAGES_FAIL,

    DEVELOPER_MESSAGE_REQUEST,
    DEVELOPER_MESSAGE_SUCCESS,
    DEVELOPER_MESSAGE_FAIL,

    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAIL,
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

export const developerLoginAction = (username = '', password = '') => async (dispatch) => {
    try{
        dispatch({type:DEVELOPER_LOGIN_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.post('/developers/login/', {'username': username, 'password': password}, config)

        dispatch({
            type: DEVELOPER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    }catch(error){
        dispatch({
            type: DEVELOPER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail 
                ? error.response.data.detail 
                : error.message,
        })
    }
}

export const developerRegisterAction = (developer) => async (dispatch) => {
    try{

        dispatch({type:DEVELOPER_REGISTER_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.post('/developers/register/', developer, config)

        dispatch({
            type: DEVELOPER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: DEVELOPER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    }catch(error){

        dispatch({
            type: DEVELOPER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail 
                ? error.response.data.detail 
                : error.message,
        })

    }
}

export const developerUpdateAction = (developer) => async (dispatch) => {
    try{
        dispatch({type:DEVELOPER_EDIT_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.put('/developers/update/', developer, config)

        dispatch({
            type: DEVELOPER_EDIT_SUCCESS,
            payload: data
        })

        dispatch({
            type: DEVELOPER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    }catch(error){
        dispatch({
            type: DEVELOPER_EDIT_FAIL,
            payload: error.response && error.response.data.detail 
                ? error.response.data.detail 
                : error.message,
        })
    }
}

export const developerAddSkillAction = (skill) => async (dispatch) => {
    try{
        dispatch({type: DEVELOPER_ADD_SKILL_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.post('/developers/add/skill/', skill, config)

        dispatch({
            type: DEVELOPER_ADD_SKILL_SUCCESS,
            payload: data
        })

        dispatch({
            type: DEVELOPER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    }catch(error){
        dispatch({
            type: DEVELOPER_ADD_SKILL_FAIL,
            payload: error.response && error.response.data.detail 
                ? error.response.data.detail 
                : error.message,
        })
    }
}

export const developerAddProjectAction = (project) => async (dispatch) => {
    try{
        dispatch({type: DEVELOPER_ADD_PROJECT_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.post('/developers/add/project/', project, config)

        dispatch({
            type: DEVELOPER_ADD_PROJECT_SUCCESS,
            payload: data
        })

        dispatch({
            type: DEVELOPER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    }catch(error){
        dispatch({
            type: DEVELOPER_ADD_PROJECT_FAIL,
            payload: error.response && error.response.data.detail 
                ? error.response.data.detail 
                : error.message,
        })
    }
}

export const developerEditSkillAction = (skill) => async (dispatch) => {
    try{
        dispatch({type: DEVELOPER_EDIT_SKILL_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.put('/developers/edit/skill/', skill, config)

        dispatch({
            type: DEVELOPER_EDIT_SKILL_SUCCESS,
            payload: data
        })

        dispatch({
            type: DEVELOPER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    }catch(error){
        dispatch({
            type: DEVELOPER_EDIT_SKILL_FAIL,
            payload: error.response && error.response.data.detail 
                ? error.response.data.detail 
                : error.message,
        })
    }
}

export const developerDeleteSkillAction = (skill) => async (dispatch) => {
    try{
        dispatch({type: DEVELOPER_DELETE_SKILL_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.post('/developers/delete/skill/', skill, config)

        dispatch({
            type: DEVELOPER_DELETE_SKILL_SUCCESS,
            payload: data
        })

        dispatch({
            type: DEVELOPER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    }catch(error){
        dispatch({
            type: DEVELOPER_DELETE_SKILL_FAIL,
            payload: error.response && error.response.data.detail 
                ? error.response.data.detail 
                : error.message,
        })
    }
}

export const developerDeleteProjectAction = (project) => async (dispatch) => {
    try{
        dispatch({type: DEVELOPER_DELETE_PROJECT_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.post('/developers/delete/project/', project, config)

        dispatch({
            type: DEVELOPER_DELETE_PROJECT_SUCCESS,
            payload: data
        })

        dispatch({
            type: DEVELOPER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    }catch(error){
        dispatch({
            type: DEVELOPER_DELETE_PROJECT_FAIL,
            payload: error.response && error.response.data.detail 
                ? error.response.data.detail 
                : error.message,
        })
    }
}

export const developerEditProjectAction = (project) => async (dispatch) => {
    try{
        dispatch({type: DEVELOPER_EDIT_PROJECT_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.put('/developers/edit/project/', project, config)

        dispatch({
            type: DEVELOPER_EDIT_PROJECT_SUCCESS,
            payload: data
        })

        dispatch({
            type: DEVELOPER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    }catch(error){
        dispatch({
            type: DEVELOPER_EDIT_PROJECT_FAIL,
            payload: error.response && error.response.data.detail 
                ? error.response.data.detail 
                : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type: DEVELOPER_LOGOUT})
}

export const developerMessagesAction = (id) => async (dispatch) => {
    try{
        dispatch({type: DEVELOPER_MESSAGES_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.post('/developers/messages/', {'id': id}, config)

        dispatch({
            type: DEVELOPER_MESSAGES_SUCCESS,
            payload: data
        })

    }catch(error){
        dispatch({
            type: DEVELOPER_MESSAGES_FAIL,
            payload: error.response && error.response.data.detail 
                ? error.response.data.detail 
                : error.message,
        })
    }
}

export const developerMessageAction = (id) => async (dispatch) => {
    try{
        dispatch({type: DEVELOPER_MESSAGE_REQUEST})

        const {data} = await axios.get(`/developers/messages/${id}/`)

        dispatch({
            type: DEVELOPER_MESSAGE_SUCCESS,
            payload: data
        })

    }catch(error){
        dispatch({
            type: DEVELOPER_MESSAGE_FAIL,
            payload: error.response && error.response.data.detail 
                ? error.response.data.detail 
                : error.message,
        })
    }
}

export const sendMessageAction = (message) => async (dispatch) => {
    try{
        dispatch({type: SEND_MESSAGE_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.post(`/developers/message/send/`, message, config)

        dispatch({
            type: SEND_MESSAGE_SUCCESS,
            payload: data
        })
        
    }catch(error){
        dispatch({
            type: SEND_MESSAGE_FAIL,
            payload: error.response && error.response.data.detail 
                ? error.response.data.detail 
                : error.message,
        })
    }
}