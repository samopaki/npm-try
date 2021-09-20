import { getAllModels } from './Model'

// don't polute global object execute immedietly
const initializeMiddleware = () => ({
  name: 'SportsModeMiddleware',
  modules: getAllModels()
})

const middleware = initializeMiddleware()
export default middleware
