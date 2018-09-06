import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'


//将reducer暴露给store
export default combineReducers({
    todos,
    visibilityFilter
})