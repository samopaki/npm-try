import { getStandingData as getStandingDataHeimspiel } from '@luka.jez/npm-try/Model/Standings/Helpers/Standings.heimspiel.helpers'
import { getStandingData as getStandingDataSportRadar } from '@luka.jez/npm-try/Model/Standings/Helpers/Standings.sportRadar.helpers'

const helpers = {
  'Heimspiel': async params => getStandingDataHeimspiel(params),
  'SportRadar': async params => getStandingDataSportRadar(params)
}

export default helpers
