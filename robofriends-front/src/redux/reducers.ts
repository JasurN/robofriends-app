import {
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    requestRobotsType,
} from "./types";


const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobotsReducers = (state = initialStateRobots, action: requestRobotsType) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return {
                ...state,
                isPending: true
            }
        case REQUEST_ROBOTS_SUCCESS:
            return {
                ...state,
                robots: action.payload,
                isPending: false
            }
        case REQUEST_ROBOTS_FAILED:
            return {
                ...state,
                error: action.payload,
                isPending: false
            }
        default:
            return state

    }
}