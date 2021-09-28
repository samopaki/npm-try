import Heimspiel from '@luka.jez/npm-try/Vendors/Heimspiel'

export const getSportsModeInitialData = async (matchId = '') => {
  Heimspiel.get({ matchId})
}
