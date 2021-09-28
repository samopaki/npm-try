import Heimspiel from '../../../Vendors/Heimspiel'
import { MATCH } from '../../../Vendors/Heimspiel/endpoints'

const endpoint = MATCH

const isGameEventLive = param => param
const getMatchResultsPerPeriod = (match, isGameLive, sportType) => match && isGameLive && sportType
const getVenueDetails = (venueId, venueName, venueCountry, roundName) => venueId && venueName && venueCountry && roundName

export const getSportsModeInitialData = async (matchId = '') => {
  try {
    const loading = false
    const response = await Heimspiel.get({ endpoint, params: { matchId } })
    const { data = {} } = response || {}

    const isDataExists = data.length
    if (!isDataExists) {
      throw new Error('Response data is empty, api default behavior for non existing match Ids, froce throw error')
    }

    const [singleCompetition] = data[0]?.competition || []
    const round = singleCompetition?.season[0]?.round[0]
    const match = round?.match[0]
    const venue = match?.venue
    const venueId = venue?.id
    const venueName = venue?.name
    const venueCountry = venue?.country
    const roundName = round?.name
    const sportType = data[0]?.name
    const competitionID = singleCompetition?.id
    const isGameLive = match.finished !== 'yes' && isGameEventLive(match)
    const matchResultsPerPeriod = getMatchResultsPerPeriod(match, isGameLive, sportType)
    const sportTopicId = singleCompetition?.topic?.id
    const venueDetails = getVenueDetails(venueId, venueName, venueCountry, roundName)

    return {
      match,
      loading,
      roundName,
      sportType,
      isGameLive,
      venueDetails,
      sportTopicId,
      competitionID,
      matchResultsPerPeriod
    }
  } catch (error) {
    throw new Error(error)
  }
}
