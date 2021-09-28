// import { getAllModels } from './Model'
import services from './Services'

// don't polute global object execute immedietly
const initializeMiddleware = () => ({
  name: 'SportsModeMiddleware',
  services
})

const middleware = initializeMiddleware()
export default middleware
