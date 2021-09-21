import endpoints, { BASE_ROUTE } from './endpoints'
import API from '../../API'

const { axios: { get } } = API

export default {
  data: {
    name: 'Heimspiel',
    baseURL: BASE_ROUTE,
    apiKey: '',
    endpoints
  },
  get: ({ endpoint = '', params = {} }) => get(endpoints[endpoint](params))
}
