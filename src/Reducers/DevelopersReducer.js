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

    DEVELOPER_LOGOUT,

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
        case DEVELOPER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const developerRegisterReducer = (state={}, action) => {
    switch (action.type) {
        case DEVELOPER_REGISTER_REQUEST:
            return {loading: true}
        case DEVELOPER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case DEVELOPER_REGISTER_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state        
    }
}

export const developerEditReducer = (state={}, action) => {
    switch (action.type) {
        case DEVELOPER_EDIT_REQUEST:
            return {loading: true}
        case DEVELOPER_EDIT_SUCCESS:
            return {loading: false, success: true}
        case DEVELOPER_EDIT_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const developerAddSkillReducer = (state={}, action) => {
    switch (action.type) {
        case DEVELOPER_ADD_SKILL_REQUEST:
            return {loading: true}
        case DEVELOPER_ADD_SKILL_SUCCESS:
            return {loading: false, success: true}
        case DEVELOPER_ADD_SKILL_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const developerAddProjectReducer = (state={}, action) => {
    switch (action.type) {
        case DEVELOPER_ADD_PROJECT_REQUEST:
            return {loading: true}
        case DEVELOPER_ADD_PROJECT_SUCCESS:
            return {loading: false, success: true}
        case DEVELOPER_ADD_PROJECT_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const developerEditSkillReducer = (state={}, action) => {
    switch (action.type) {
        case DEVELOPER_EDIT_SKILL_REQUEST:
            return {loading: true}
        case DEVELOPER_EDIT_SKILL_SUCCESS:
            return {loading: false, success: true}
        case DEVELOPER_EDIT_SKILL_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const developerDeleteSkillReducer = (state={}, action) => {
    switch (action.type) {
        case DEVELOPER_DELETE_SKILL_REQUEST:
            return {loading: true}
        case DEVELOPER_DELETE_SKILL_SUCCESS:
            return {loading: false, success: true}
        case DEVELOPER_DELETE_SKILL_FAIL:
            return {loading: false, success: false, error: action.payload}
        default:
            return state
    }
}

export const developerDeleteProjectReducer = (state={}, action) => {
    switch (action.type) {
        case DEVELOPER_DELETE_PROJECT_REQUEST:
            return {loading: true}
        case DEVELOPER_DELETE_PROJECT_SUCCESS:
            return {loading: false, success: true}
        case DEVELOPER_DELETE_PROJECT_FAIL:
            return {loading: false, success: false, error: action.payload}
        default:
            return state
    }
}

export const developerEditProjectReducer = (state={}, action) => {
    switch (action.type) {
        case DEVELOPER_EDIT_PROJECT_REQUEST:
            return {loading: true}
        case DEVELOPER_EDIT_PROJECT_SUCCESS:
            return {loading: false, success: true}
        case DEVELOPER_EDIT_PROJECT_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const developerMessagesReducer = (state={}, action) => {
    switch (action.type) {
        case DEVELOPER_MESSAGES_REQUEST:
            return {loading: true}
        case DEVELOPER_MESSAGES_SUCCESS:
            return {loading: false, messages: action.payload}
        case DEVELOPER_MESSAGES_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const developerMessageReducer = (state={}, action) => {
    switch (action.type) {
        case DEVELOPER_MESSAGE_REQUEST:
            return {loading: true}
        case DEVELOPER_MESSAGE_SUCCESS:
            return {loading: false, message: action.payload}
        case DEVELOPER_MESSAGE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const sendMessageReducer = (state={}, action) => {
    switch (action.type) {
        case SEND_MESSAGE_REQUEST:
            return {loading: true}
        case SEND_MESSAGE_SUCCESS:
            return {loading: false, success: true}
        case SEND_MESSAGE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}