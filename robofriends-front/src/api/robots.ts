import axios from 'axios'
import { Robot, Robots } from '../features/robots/robotsSlice'

export async function getRobots(): Promise<Robots> {
  const url = `https://jsonplaceholder.typicode.com/users`
  try {
    const robotsResponse = await axios.get<Robot[]>(url)
    return { robots: robotsResponse.data }
  } catch (err) {
    throw err
  }
}