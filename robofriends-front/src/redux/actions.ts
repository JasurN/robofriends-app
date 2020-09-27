import {
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
} from "./types";
import {Dispatch} from "redux";

export const requestRobots = (dispatch: Dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING})
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: users}))
        .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}));
}