const axios = {
  get: endpoint => ({ endpoint }),
  put: endpoint => ({ endpoint }),
  post: endpoint => ({ endpoint }),
  delete: endpoint => ({ endpoint })
}

const SportRadar = {
  data: Object.freeze({
    name: 'SportRadar',
    baseURL: 'https://nekitamo.com/',
    apiKey: '1389',
    endpoints: {
      'roster': 'person-stats-by-match',
      'lineup': 'bla-bla-truc-trt-mrt'
    }
  }),
  get (endpoint) {
    axios.get(`${this.data.baseURL}/${endpoint}`)
  }
}

export default SportRadar
