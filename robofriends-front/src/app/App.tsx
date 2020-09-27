import React from 'react'
import RoboFriendsApp from '../components/RoboFriendsApp'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import { requestRobotsReducers } from '../redux/reducers'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  requestRobotsReducers
})

const store = configureStore({
  reducer: rootReducer
})

function App() {
  return (
    <Provider store={store}>
      <RoboFriendsApp />
    </Provider>
  )
}

export default App
