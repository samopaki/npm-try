import endpoints, { BASE_ROUTE } from './endpoints'
import MiddlewareAxiosInstance from '../../axios.config'

const { get } = MiddlewareAxiosInstance

export default {
  data: {
    name: 'Heimspiel',
    baseURL: BASE_ROUTE,
    apiKey: '',
    endpoints
  },
  get: ({ endpoint = '', params = {} }) => get(endpoints[endpoint](params))
}
