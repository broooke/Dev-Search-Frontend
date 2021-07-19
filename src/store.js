import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'
import { 
    developersDetailsReducer, 
    developersListReducer, 
    developLoginReducer, 
    developerRegisterReducer, 
    developerEditReducer, 
    developerAddSkillReducer, 
    developerAddProjectReducer, 
    developerEditSkillReducer,
    developerDeleteSkillReducer,
    developerDeleteProjectReducer,
} from './Reducers/DevelopersReducer'
import { projectsListReducer, projectDetailsReducer, addReviewReducer, getTagsReducer } from './Reducers/ProjectsReducer'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'

const reducer = combineReducers({
    developersList: developersListReducer,
    developersDetail: developersDetailsReducer,
    projectsList: projectsListReducer,
    projectDetails: projectDetailsReducer,
    userLogin: developLoginReducer,
    addReview: addReviewReducer,
    userRegister: developerRegisterReducer,
    userUpdate: developerEditReducer,
    addSkill: developerAddSkillReducer,
    addProject: developerAddProjectReducer,
    tagsList: getTagsReducer,
    editSkill: developerEditSkillReducer,
    deleteSkill: developerDeleteSkillReducer,
    deleteProject: developerDeleteProjectReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage } 
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store