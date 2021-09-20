import InitialDataHelpers from '../Helpers'

export const getSportsModeInitialDataService = async ({ matchId, vendorName }) => InitialDataHelpers[vendorName](matchId)
