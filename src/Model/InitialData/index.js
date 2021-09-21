import { getSportsModeInitialDataService } from './Services'
import Strategies from './Strategies'

// #region HELPERS
const _hasIssueInMatchResultsValidation = matchResultArray => {
  const first = matchResultArray[1] && matchResultArray[1].match_result
  const second = matchResultArray[1] && matchResultArray[1].match_result
  return !(matchResultArray.length && first && second)
}

const _isValidMatchInfo = () => true

const DEFAULT_RESULTS_SCORE = '0'

export const makeBasicMatchInfo = data => {
  let homeScore
  let awayScore
  const validationErrorsArray = _isValidMatchInfo()
  if (validationErrorsArray.length) {
    if (_hasIssueInMatchResultsValidation(data)) { // mock results - 0:0
      homeScore = DEFAULT_RESULTS_SCORE
      awayScore = DEFAULT_RESULTS_SCORE
    } else {
      throw new Error()
    }
  }
  const preparedData = {
    home: {
      score: homeScore || data?.match_result[0].match_result,
      name: data.home.shortname,
      shortname: data.home.microname,
      logo: _makeUrl(data.home.id, data.home.personOneId),
      id: data.home.id
    },
    away: {
      score: awayScore || data?.match_result[1].match_result,
      name: data.away.shortname,
      shortname: data.away.microname,
      logo: _makeUrl(data.away.id, data.away.personOneId),
      id: data.away.id
    }
  }
  if (data.home.personTwoId && data.away.personTwoId) {
    preparedData.home.additionalLogo = _makeUrl(data.home.id, data.home.personTwoId)
    preparedData.away.additionalLogo = _makeUrl(data.away.id, data.away.personTwoId)
  }
  return preparedData
}

export const PERSON_IMAGE_URL = 'https://s.hs-data.com/gfx/person/l/'
export const PERSON_IMAGE_EXTENSION = '.jpg'
export const LOGO_URL = 'https://s.hs-data.com/gfx/emblem/common/100x100/'
export const LOGO_EXTENSION = '.png'

export const _makeUrl = (teamId, personId) => {
  if (personId) {
    return `${PERSON_IMAGE_URL}${personId}${PERSON_IMAGE_EXTENSION}`
  } else if (teamId) {
    return `${LOGO_URL}${teamId}${LOGO_EXTENSION}`
  } else {
    return ''
  }
}
// #endregion

export default {
  namespaced: true,
  state: {
    loading: true,
    initialData: [],
    roundName: '',
    venueDetails: {},
    competitionId: '',
    sportType: '',
    isGameLive: false,
    sportTopicId: '',
    matchResultsPerPeriod: []
  },
  actions: {
    getSportsModeInitialData: async ({ commit, dispatch }, { matchId, vendorName }) => {
      let response = {}
      try {
        const serviceOutput = await getSportsModeInitialDataService({ vendorName, matchId })

        commit('SET_LOADING', serviceOutput.loading)
        commit('SET_INITIAL_DATA', serviceOutput.match)
        commit('SET_ROUND_NAME', serviceOutput.roundName)
        commit('SET_VENUE_DETAILS', serviceOutput.venueDetails)
        commit('SET_COMPETITION_ID', serviceOutput.competitionID)
        commit('SET_SPORT_TYPE', serviceOutput.sportType)
        commit('SET_IS_GAME_LIVE', serviceOutput.isGameLive)
        commit('SET_SPORT_TOPIC_ID', serviceOutput.sportTopicId)
        commit('SET_MATCH_RESULTS_PER_PERIOD', serviceOutput.matchResultsPerPeriod)

        response = await Strategies.InitialDataStrategy(dispatch, serviceOutput.sportType, { matchId, match: serviceOutput.match })
      } catch (error) {
        throw new Error(error)
      }

      return response
    },
    setBasicSportData ({ commit, state }, { match }) {
      const type = 'rawDataLoading'
      const matchShortDetails = makeBasicMatchInfo(match)

      commit('SET_HEADER_DATA', matchShortDetails)
      commit('SET_LOADING_STATUS', { loading: false, type })

      return state.sportType
    }
  },
  mutations: {
    SET_HEADER_DATA: (state, headerData) => {
      state.headerData = headerData
    },
    SET_LOADING_STATUS: (state, loading) => {
      state.loading = loading
    },
    SET_LOADING: (state, loading) => {
      state.loading = loading
    },
    SET_INITIAL_DATA: (state, initialData) => {
      state.initialData = initialData
    },
    SET_ROUND_NAME: (state, roundName) => {
      state.roundName = roundName
    },
    SET_VENUE_DETAILS: (state, venueDetails) => {
      state.venueDetails = venueDetails
    },
    SET_COMPETITION_ID: (state, competitionId) => {
      state.competitionId = competitionId
    },
    SET_SPORT_TYPE: (state, sportType) => {
      state.sportType = sportType
    },
    SET_IS_GAME_LIVE: (state, isGameLive) => {
      state.isGameLive = isGameLive
    },
    SET_SPORT_TOPIC_ID: (state, sportTopicId) => {
      state.sportTopicId = sportTopicId
    },
    SET_MATCH_RESULTS_PER_PERIOD: (state, matchResultsPerPeriod) => {
      state.matchResultsPerPeriod = matchResultsPerPeriod
    }
  }
}
