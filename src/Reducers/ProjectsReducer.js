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

export const projectsListReducer = (state={projects:[]}, action) => {
    switch (action.type) {
        case PROJECTS_LIST_REQUEST:
            return {loading: true, projects:[]}
        case PROJECTS_LIST_SUCCESS:
            return {loading: false, projects: action.payload}
        case PROJECTS_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const projectDetailsReducer = (state={project:{}}, action) => {
    switch (action.type) {
        case PROJECT_DETAILS_REQUEST:
            return {loading: true, project:{}}
        case PROJECT_DETAILS_SUCCESS:
            return {loading: false, project: action.payload}
        case PROJECT_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const addReviewReducer = (state={}, action) => {
    switch (action.type) {
        case ADD_REVIEW_REQUEST:
            return {loading: true}
        case ADD_REVIEW_SUCCESS:
            return {loading: false, success: true}
        case ADD_REVIEW_FAIL:
            return {loading: false, success: false, error: action.payload}
        default:
            return state
    }
}