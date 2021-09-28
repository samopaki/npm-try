import axios from 'axios'
import { specifyNumberOfSeconds } from './Utils/time'

export const MiddlewareAxiosInstance = axios.create()
MiddlewareAxiosInstance.defaults.timeout = specifyNumberOfSeconds({ numberOfSeconds: 10 })

export default MiddlewareAxiosInstance
