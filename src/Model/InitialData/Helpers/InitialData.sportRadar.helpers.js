import Heimspiel from '../../../Vendors/Heimspiel'

export const getSportsModeInitialData = async (matchId = '') => {
  Heimspiel.get({ matchId})
}
