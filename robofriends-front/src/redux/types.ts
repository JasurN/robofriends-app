export const REQUEST_ROBOTS_PENDING = 'REQUEST_ROBOTS_PENDING'
export const REQUEST_ROBOTS_SUCCESS = 'REQUEST_ROBOTS_SUCCESS'
export const REQUEST_ROBOTS_FAILED = 'REQUEST_ROBOTS_FAILED'

export interface RequestRobotsPendingAction {
  type: typeof REQUEST_ROBOTS_PENDING,
}

export interface RequestRobotsSuccessAction {
  type: typeof REQUEST_ROBOTS_SUCCESS,
  payload: object
}

export interface RequestRobotsFailedAction {
  type: typeof REQUEST_ROBOTS_FAILED,
  payload: object
}

export type requestRobotsType = RequestRobotsPendingAction | RequestRobotsSuccessAction
  | RequestRobotsFailedAction;