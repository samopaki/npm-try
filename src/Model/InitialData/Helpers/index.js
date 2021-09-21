import { getSportsModeInitialData as getSportsModeInitialDataHeimspiel } from './InitialData.heimspiel.helpers'
import { getSportsModeInitialData as getSportsModeInitialDataSportRadar } from './InitialData.sportRadar.helpers'

const helpers = {
  'Heimspiel': async matchId => getSportsModeInitialDataHeimspiel(matchId),
  'SportRadar': async matchId => getSportsModeInitialDataSportRadar(matchId)
}

export default helpers
