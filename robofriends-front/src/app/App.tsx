import React from 'react';
import RoboFriendsApp from "../components/RoboFriendsApp";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from "redux";
import {searchRobotsReducers, requestRobotsReducers} from "../redux/reducers";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    searchRobotsReducers, requestRobotsReducers
})

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware( thunkMiddleware),
))

function App() {
    return (
        <Provider store={store}>
            <RoboFriendsApp/>
        </Provider>
    )
}

export default App;
