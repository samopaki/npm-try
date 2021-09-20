import StandingsHelpers from '@luka.jez/npm-try/Model/Standings/Helpers'

export const getStandingDataService = async ({ vendorName, params }) => StandingsHelpers[vendorName](params)
