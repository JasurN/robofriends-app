import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../../app/store'
import { getRobots } from '../../api/robots'

interface RequestPending {
  isPending: boolean
}

export interface Robot {
  id: number,
  name: string,
  email: string
}

interface RequestError {
  error: string
}

export interface Robots {
  robots: Robot[],
}

type initialStateRobots = {} & RequestPending
  & RequestError
  & Robots

let initialState: initialStateRobots = {
  isPending: false,
  robots: [],
  error: ''
}
const robots = createSlice({
  name: 'issuesDisplay',
  initialState,
  reducers: {
    getRobotsPending(state, action: PayloadAction<RequestPending>) {
      const { isPending } = action.payload
      state.isPending = isPending
    },
    setRobotsRequestError(state, action: PayloadAction<RequestError>) {
      state.error = action.payload.error
      state.isPending = false
    },
    setRobots(state, action: PayloadAction<Robots>) {
      state.robots = action.payload.robots
      state.isPending = false
    }
  }
})

export const {
  getRobotsPending,
  setRobotsRequestError,
  setRobots
} = robots.actions

export default robots.reducer

export const fetchIssue = (): AppThunk => async dispatch => {
  try {
    dispatch(getRobotsPending({ isPending: true }))
    const robots = await getRobots()
    dispatch(setRobots(robots))
  } catch (err) {
    dispatch(setRobotsRequestError(err.toString()))
  }
}
