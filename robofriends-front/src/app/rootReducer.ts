import { combineReducers } from 'redux'
import { requestRobotsReducers } from '../redux/reducers'

const rootReducer = combineReducers({
  requestRobotsReducers
})
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
