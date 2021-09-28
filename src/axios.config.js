import axios from 'axios'
import { specifyNumberOfSeconds } from '../../utils/time'

export const MiddlewareAxiosInstance = axios.create()
MiddlewareAxiosInstance.defaults.timeout = specifyNumberOfSeconds({ numberOfSeconds: 10 })

export default MiddlewareAxiosInstance
